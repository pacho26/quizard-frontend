<template>
  <div>
    <div v-if="quizzes">
      <QuizCard v-for="quiz in quizzes" :key="quiz._id" :quiz="quiz" />
    </div>
    <b-button class="add-btn mt-5" variant="dark">Add new quiz</b-button>
  </div>
</template>

<script>
import { getQuizzesByCategoryName } from '../../services/service';
export default {
  data() {
    return {
      quizzes: [],
    };
  },
  async created() {
    this.quizzes = await getQuizzesByCategoryName(
      this.$route.params.categoryName
    );
  },
};
</script>
