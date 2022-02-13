<template>
  <div class="content-container">
    <nav>
      <nuxt-link to="/">Logo</nuxt-link>
      <nuxt-link to="/login">{{ currentUser ? 'Logout' : 'Login' }}</nuxt-link>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  async created() {
    await this.loadCategories();
    await this.loadUsers();
  },
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    ...mapActions(['loadCategories', 'loadUsers']),
  },
};
</script>

<style lang="scss" scoped>
.content-container {
  margin: 0 auto;
  max-width: 1200px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  main {
    // TODO: Temporary margins
    margin: 40px 0 80px;
  }
}
</style>
