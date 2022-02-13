<template>
  <nuxt-link :to="`${category.name.toLowerCase()}`">
    <div class="category">
      <img
        :src="require(`../assets/img/${category.name.toLowerCase()}.png`)"
        alt="Category"
      />
      <h2>{{ category.name }}</h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  border-radius: 8px;
  width: fit-content;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  -webkit-filter: grayscale(0.5);

  img {
    max-width: 260px;
    padding: 20px;
  }

  h2 {
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 16px;
  }

  &:hover {
    -webkit-filter: grayscale(0);
    cursor: pointer;
  }
}

a {
  text-decoration: none;
}
</style>
