<template>
  <div>{{ categories }}</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  async created() {
    await this.loadCategories();
    console.log('prvo', this.categories);
  },
  computed: {
    ...mapState(['categories']),
  },
  methods: {
    ...mapActions(['loadCategories']),
  },
};
</script>
