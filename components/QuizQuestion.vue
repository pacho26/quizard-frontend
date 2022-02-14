<template>
  <div class="question">
    <div class="question__input">
      <b-input-group :prepend="question.question">
        <b-form-input class="answer-input"></b-form-input>
      </b-input-group>
    </div>

    <div class="question__answer" v-if="isQuizOver">
      <p>{{ question.answer }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['isQuizOver']),
  },
};
</script>

<style lang="scss" scoped>
.question {
  display: flex;
  align-items: center;
  gap: 20px;

  &__input {
    width: 80%;
  }

  &__answer {
    color: rgb(104, 104, 104);

    p {
      margin: 0;
    }
  }

  .wrong {
    background: #ffb3b3;
  }

  .correct {
    background: #b3ffb3;
  }
}
</style>
