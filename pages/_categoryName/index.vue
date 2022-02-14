<template>
  <main>
    <div v-if="quizzes" class="quizzes-container">
      <QuizCard v-for="quiz in quizzes" :key="quiz._id" :quiz="quiz" />
    </div>
    <nuxt-link v-if="isCurrentUserAdmin" to="/geography/new-quiz">
      <b-button class="add-btn mt-5" variant="dark">Add new quiz</b-button>
    </nuxt-link>
  </main>
</template>

<script>
import { getQuizzesByCategoryName } from '../../services/service';
import { mapGetters } from 'vuex';
export default {
  async created() {
    this.quizzes = await getQuizzesByCategoryName(
      this.$route.params.categoryName
    );
  },
  data() {
    return {
      quizzes: [],
    };
  },
  computed: {
    ...mapGetters(['getCurrentUser']),
    isCurrentUserAdmin() {
      return this.getCurrentUser?.isAdmin;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
