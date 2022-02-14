<template>
  <div class="new-quiz-form">
    <div class="quiz-details">
      <div class="quiz-name">
        <b-input-group prepend="Quiz name">
          <b-form-input class="quiz-name" v-model="quizName"></b-form-input>
        </b-input-group>
      </div>
      <div class="desc">
        <b-input-group prepend="Description">
          <b-form-input class="quiz-desc" v-model="quizDesc"></b-form-input>
        </b-input-group>
      </div>
    </div>

    <section>
      <div
        class="question-answer-container"
        v-for="i in numberOfQuestions"
        :key="i"
      >
        <b-input-group prepend="Question">
          <b-form-input class="question"></b-form-input>
        </b-input-group>

        <b-input-group prepend="Answer" class="answer-container">
          <b-form-input class="answer"></b-form-input>
        </b-input-group>
      </div>

      <div class="buttons">
        <b-button class="add-btn" variant="dark" @click="addNewQuestion"
          >+</b-button
        >
        <b-button
          class="remove-btn"
          variant="danger"
          @click="removeLastQuestion"
          >-</b-button
        >
      </div>
    </section>

    <p class="message" ref="message">{{ message }}</p>

    <b-button class="submit-btn" variant="primary" @click="addNewQuiz"
      >Submit</b-button
    >
  </div>
</template>

<script>
import { addQuiz, getLastQuiz, addQuestion } from '../../services/service';
export default {
  data() {
    return {
      quizName: '',
      quizDesc: '',
      numberOfQuestions: 1,
      message: '',
    };
  },
  methods: {
    addNewQuestion() {
      this.numberOfQuestions++;
    },
    removeLastQuestion() {
      if (this.numberOfQuestions > 1) {
        this.numberOfQuestions--;
      }
    },
    async addNewQuiz() {
      const questionsElem = document.querySelectorAll('.question');
      const answersElem = document.querySelectorAll('.answer');
      let questionsArr = [];
      let emptyFields = false;

      questionsElem.forEach((question, idx) => {
        const answer = answersElem[idx].value;
        if (question.value === '' || answer === '') {
          this.message = 'Some fields are empty.';
          this.$refs['message'].classList.add('error');
          emptyFields = true;
        }
        questionsArr.push({
          question: question.value,
          answer: answer,
        });
      });

      if (!emptyFields && this.quizName && this.quizDesc) {
        await addQuiz({
          name: this.quizName,
          desc: this.quizDesc,
          category: this.$route.params.categoryName,
        });

        const lastQuiz = await getLastQuiz();

        questionsArr.forEach(async (elem) => {
          await addQuestion({
            question: elem.question,
            answer: elem.answer,
            quizId: lastQuiz._id,
          });
        });

        this.message = 'Quiz succesfully added.';
        this.$refs['message'].classList.add('success');
        setTimeout(() => {
          this.$router.go(-1);
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.new-quiz-form {
  .quiz-details {
    display: flex;
    justify-content: space-between;
    gap: 16px;

    .quiz-name {
      width: 40%;
    }

    .desc {
      width: 60%;
    }
  }

  section {
    margin: 60px 0;

    .question-answer-container {
      display: flex;
      gap: 32px;
      margin-bottom: 16px;

      .answer-container {
        width: 60%;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 12px;

      .add-btn {
        padding: 0px 10px;
        font-size: 24px;
        font-weight: 900;
      }

      .remove-btn {
        padding: 0 13px;
        font-size: 24px;
        font-weight: 900;
      }
    }
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }
}
</style>
