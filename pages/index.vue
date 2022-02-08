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
import { mapActions, mapState } from 'vuex';
export default {
  async created() {
    await this.loadCategories();
  },
  computed: {
    ...mapState(['categories']),
  },
  methods: {
    ...mapActions(['loadCategories']),
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
