<template>
  <div class="quiz-wrapper">
    <div>
      <nuxt-link :to="`${quiz.category}/${quiz._id}`">
        <h3>{{ quiz.name }}</h3>
        <p>{{ quiz.description }}</p>
      </nuxt-link>

      <div class="edit-area" v-if="isEditing">
        <div class="quiz-name">
          <b-input-group prepend="Quiz name">
            <b-form-input class="quiz-name" v-model="quizName"></b-form-input>
          </b-input-group>
        </div>
        <div class="quiz-name mt-2">
          <b-input-group prepend="Quiz description">
            <b-form-input class="quiz-name" v-model="quizDesc"></b-form-input>
          </b-input-group>
        </div>
        <b-button
          v-if="isCurrentUserAdmin"
          class="edit-btn mt-3"
          variant="primary"
          @click="editQuizById"
          >Update</b-button
        >
      </div>
    </div>
    <div class="buttons">
      <b-button
        v-if="isCurrentUserAdmin"
        class="edit-btn"
        variant="info"
        @click="isEditing = true"
        >Edit</b-button
      >
      <b-button
        v-if="isCurrentUserAdmin"
        class="delete-btn"
        variant="danger"
        @click="deleteQuizById"
        >Delete</b-button
      >
    </div>
  </div>
</template>

<script>
import { deleteQuiz, editQuiz } from '../services/service';
import { mapGetters } from 'vuex';
export default {
  props: {
    quiz: {
      type: Object,
      required: true,
    },
    quizName: '',
    quizDesc: '',
    isEditing: false,
  },
  computed: {
    ...mapGetters(['getCurrentUser']),
    isCurrentUserAdmin() {
      return this.getCurrentUser?.isAdmin;
    },
  },
  mounted() {
    this.quizName = this.quiz.name;
    this.quizDesc = this.quiz.description;
  },
  methods: {
    async deleteQuizById() {
      await deleteQuiz(this.quiz._id);
      window.location.reload();
    },
    async editQuizById() {
      if (this.quizName && this.quizDesc) {
        this.quiz.name = this.quizName;
        this.quiz.description = this.quizDesc;
        await editQuiz(this.quiz);
        this.isEditing = false;
      }
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

  .edit-btn {
    transform: scale(0.9);
    position: relative;
    bottom: 6px;
  }
}
</style>
