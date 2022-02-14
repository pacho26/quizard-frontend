<template>
  <div class="quiz-container" :key="componentKey">
    <h1>{{ quiz.name }}</h1>
    <div class="questions-container">
      <QuizQuestion
        v-for="question in questions"
        :key="question._id"
        :question="question"
      />
    </div>

    <div class="result-container">
      <div class="buttons">
        <b-button
          class="submit-btn"
          ref="submitBtn"
          variant="primary"
          @click="submitAnswers"
          >Submit</b-button
        >
        <b-button class="submit-btn" variant="danger" @click="reloadComponent"
          >Reset</b-button
        >
      </div>
      <h3 v-if="isQuizOver">
        {{ this.counterCorrect }} / {{ this.questions.length }}
      </h3>
    </div>
  </div>
</template>

<script>
import { getQuestionsByQuizId, getQuizById } from '../services/service';
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      questions: [],
      quiz: {},
      counterCorrect: 0,
      componentKey: 0,
    };
  },
  async created() {
    this.setIsQuizOver(false);
    this.quiz = await getQuizById(this.$route.params.quiz);
    this.questions = await getQuestionsByQuizId(this.$route.params.quiz);
  },
  computed: {
    ...mapState(['isQuizOver']),
  },
  methods: {
    ...mapActions(['setIsQuizOver']),
    submitAnswers() {
      if (!this.isQuizOver) {
        this.$refs['submitBtn'].disabled = true;

        this.setIsQuizOver(true);
        const answers = document.querySelectorAll('.answer-input');
        answers.forEach((answer, idx) => {
          const isCorrect = this.checkAnswers(
            answer.value,
            this.questions[idx].answer
          );
          if (isCorrect) {
            answer.classList.add('correct');
            this.counterCorrect++;
          } else {
            answer.classList.add('wrong');
          }
        });
      }
    },
    checkAnswers(str1, str2) {
      str1 = str1.toLowerCase();
      str2 = str2.toLowerCase();

      return str1 === str2 ? true : false;
    },
    reloadComponent() {
      this.setIsQuizOver(false);
      this.componentKey++;
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz-container {
  max-width: 1000px;
  margin: 0 auto;

  .questions-container {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .result-container {
    display: flex;
    margin-top: 32px;
    align-items: center;
    gap: 60px;

    .buttons {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    h3 {
      margin: 0;
    }
  }
}
</style>
