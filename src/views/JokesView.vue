<template>
  <div class="names-view">
    <h1>Random Jokes</h1>
    <p v-for="{ joke, id } in jokes.data.jokes" :key="id">{{ joke }}</p>
    {{ test }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "JokesView",
  mounted() {
    this.$store.dispatch("jokes/getData");
  },
  computed: {
    ...mapState(["jokes"]),
    ...mapGetters(["jokes/data"]),
    test() {
      return console.log(this.jokes);
    },
  },
});
</script>
