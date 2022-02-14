<template>
  <nuxt-link :to="`${quiz.category}/${quiz._id}`">
    <h3>{{ quiz.name }}</h3>
    <p>{{ quiz.description }}</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },
};
</script>
