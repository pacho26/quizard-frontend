<template>
  <main>
    <div class="form-container">
      <h1>Register form</h1>

      <b-form @submit="onSubmit">
        <b-form-group label="Username">
          <b-form-input
            v-model="form.username"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password">
          <b-form-input
            type="password"
            v-model="form.password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Repeat password">
          <b-form-input
            type="password"
            v-model="form.repeatPassword"
            placeholder="Repeat password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Full name">
          <b-form-input
            v-model="form.fullName"
            placeholder="Enter full name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="E-mail">
          <b-form-input
            type="email"
            v-model="form.email"
            placeholder="Enter e-mail"
            required
          ></b-form-input>
        </b-form-group>

        <p class="form-container__message" ref="message">{{ message }}</p>

        <b-button type="submit" :variant="inputsEntered ? 'success' : 'danger'"
          >Register</b-button
        >
      </b-form>
      <nuxt-link to="/login">Back to login form</nuxt-link>
    </div>
  </main>
</template>

<script>
import { registerUser } from '../services/service';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        repeatPassword: '',
        fullName: '',
        email: '',
      },

      message: '',
    };
  },
  computed: {
    ...mapGetters(['getUsernames']),
    inputsEntered() {
      let allInputsEntered = true;
      Object.entries(this.form).map(([key, value]) => {
        if (!value.trim()) {
          allInputsEntered = false;
        }
      });
      return allInputsEntered;
    },
  },
  methods: {
    ...mapActions(['loadUsers']),

    async onSubmit(event) {
      event.preventDefault();
      this.form.username = this.form.username.trim();
      if (this.form.username.length < 4 || this.form.username.length > 12) {
        this.message = 'Username must contain 5 - 12 characters!';
      } else if (this.form.password !== this.form.repeatPassword) {
        this.message = "Passwords doesn't match!";
      } else if (this.getUsernames.includes(this.form.username)) {
        this.message = 'Username already exists!';
      } else {
        const messageEl = this.$refs.message;
        messageEl.classList.add('success');
        this.message = 'You registered successfully!';
        const newUser = this.filterObjectField('repeatPassword');
        await registerUser(newUser);
        await this.loadUsers();

        setTimeout(() => {
          this.$router.push({ path: '/login' });
        }, 1000);
      }
    },
    filterObjectField(keyName) {
      return Object.keys(this.form).reduce(
        (value, key) =>
          key === keyName ? value : { ...value, [key]: this.form[key] },
        {}
      );
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 700px;

  .form-container {
    &__message {
      color: #ee0000;
      min-height: 24px;
      position: relative;
      bottom: 6px;
    }

    .success {
      color: #008000;
    }
  }

  a {
    position: relative;
    top: 44px;
  }
}
</style>
