<template>
  <div class="form-container">
    <h1>Login form</h1>

    <b-form @submit="onSubmit" v-if="show">
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
          v-model="form.name"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <nuxt-link to="register">
        <b-button type="reset" variant="danger">Register</b-button>
      </nuxt-link>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  margin: 0 auto;
  max-width: 700px;
}
</style>
