<template>
  <div class="container">
    <h1 class="title">{{ `Joke: ${joke.id}` }}</h1>
    <p class="main-text">{{ joke.joke }}</p>
    <p>{{ `Category: ${joke.category}` }}</p>
    <p>{{ `Type: ${joke.type}` }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "JokeView",
  mounted() {
    this.$store.dispatch("jokes/getSingleData", this.$route.params.id);
  },
  computed: {
    ...mapState("jokes", {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      joke: (state) => state.dataSingle,
    }),
    ...mapGetters("jokes", ["jokeData"]),
  },
});
</script>

<style scoped lang="scss" src="./JokeView.scss" />
