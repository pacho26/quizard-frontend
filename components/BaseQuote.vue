<template>
  <div class="quote-container" v-if="quoteText">
    <h3 id="quote" class="text-xl font-bold">
      {{ quoteText }}
    </h3>
    <p id="author" class="uppercase pt-1 text-right">
      {{ quoteAuthor }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quoteText: '',
      quoteAuthor: '',
    };
  },
  created() {
    fetch('https://quotable.io/random?minLength=25&maxLength=60')
      .then((res) => res.json())
      .then((data) => {
        this.quoteText = data.content;
        this.quoteAuthor = data.author;
      });
  },
};
</script>

<style lang="scss" scoped>
.quote-container {
  padding: 16px;
  border-radius: 4px;
  max-width: 500px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 0 auto;
  margin-top: 100px;

  p {
    margin-bottom: 0;
  }
}
</style>
