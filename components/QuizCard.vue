<template>
  <div class="quiz-wrapper">
    <div>
      <nuxt-link :to="`${quiz.category}/${quiz._id}`">
        <h3>{{ quiz.name }}</h3>
        <p>{{ quiz.description }}</p>
      </nuxt-link>
    </div>
    <b-button
      v-if="isCurrentUserAdmin"
      class="delete-btn"
      variant="danger"
      @click="deleteQuizById()"
      >Delete</b-button
    >
  </div>
</template>

<script>
import { deleteQuiz } from '../services/service';
import { mapGetters } from 'vuex';
export default {
  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getCurrentUser']),
    isCurrentUserAdmin() {
      return this.getCurrentUser?.isAdmin;
    },
  },
  methods: {
    async deleteQuizById() {
      await deleteQuiz(this.quiz._id);
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 640px;

  h3 {
    margin-bottom: 2px;
  }

  .delete-btn {
    transform: scale(0.9);
    position: relative;
    bottom: 6px;
  }
}
</style>
