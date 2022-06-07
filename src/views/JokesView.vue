<template>
  <div class="names-view">
    <h1>Random Jokes</h1>
    {{ test }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "JokesView",
  computed: {
    ...mapState(["jokes"]),
    ...mapGetters(["jokes/data"]),
    test() {
      return console.log(this.jokes);
    },
  },
  methods: {
    ...mapActions(["jokes/getData"]),
  },
});
</script>
