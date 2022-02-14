<template>
  <div class="form-container">
    <h1>Login form</h1>

    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.username"
          placeholder="Enter username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <p class="form-container__message" ref="message">{{ message }}</p>

      <div class="form-container__buttons">
        <b-button type="submit" variant="primary">Login</b-button>
        <nuxt-link to="register">
          <b-button variant="danger">Register</b-button>
        </nuxt-link>
      </div>
    </b-form>
  </div>
</template>

<script>
import { loginUser } from '../services/service';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      message: '',
    };
  },
  created() {
    this.setCurrentUser(null);
  },
  mounted() {
    localStorage.removeItem('loggedUser');
  },
  computed: {
    ...mapGetters(['getUsernames', 'getUserByUsername']),
  },
  methods: {
    ...mapActions(['setCurrentUser']),
    async onSubmit(ev) {
      ev.preventDefault();

      const loginDetails = {
        username: this.form.username,
        password: this.form.password,
      };
      const userFound = await loginUser(loginDetails);
      if (userFound.username) {
        this.setCurrentUser(userFound);
        localStorage.setItem('loggedUser', JSON.stringify(userFound));
        this.$router.push({ path: '/' });
      } else {
        this.message = 'Username or password is incorrect!';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  margin: 0 auto;
  max-width: 700px;

  &__message {
    color: #ee0000;
    min-height: 24px;
    position: relative;
    bottom: 6px;
  }

  .success {
    color: #008000;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
