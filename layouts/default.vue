<template>
  <div>
    <div class="nav-container">
      <MainNavigation />
    </div>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

main {
  margin: 0 auto;
  max-width: 1300px;
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>
