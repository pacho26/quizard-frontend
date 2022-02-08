<template>
  <div class="content-container">
    <nav>
      <nuxt-link to="login"
        ><b-button class="blue" variant="primary">Login</b-button></nuxt-link
      >
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.content-container {
  margin: 0 auto;
  max-width: 1200px;

  nav {
    display: flex;
    justify-content: flex-end;
  }

  main {
    // TODO: temporary margins
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
