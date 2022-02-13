<template>
  <main>
    <h1>Choose category</h1>
    <div class="categories">
      <CategoryCard
        v-for="category in categories"
        :key="category._id"
        :category="category"
      />
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['categories']),
  },
};
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
</style>
