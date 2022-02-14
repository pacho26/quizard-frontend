<template>
  <nav>
    <div @click="$router.push({ path: '/' })" class="image-container">
      <img
        class="image-container__logo"
        src="../assets/img/quizard-logo.svg"
        alt="Logo"
      />
    </div>
    <nuxt-link to="/login">{{ currentUser ? 'Logout' : 'Login' }}</nuxt-link>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  mounted() {
    this.setCurrentUser(JSON.parse(localStorage.getItem('loggedUser')));
  },
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    ...mapActions(['setCurrentUser']),
  },
};
</script>

<style lang="scss" scoped>
nav {
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .image-container {
    padding: 10px;
    cursor: pointer;
    -webkit-filter: grayscale(0.5);
    transition: 0.2s ease-in-out;

    &:hover {
      -webkit-filter: grayscale(0);
    }

    &__logo {
      width: 40px;
    }
  }
}
</style>
