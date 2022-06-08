<template>
  <div class="names-view">
    <JokesContainer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import JokesContainer from "@/components/JokesContainer/JokesContainer";

export default defineComponent({
  name: "JokesView",
  components: { JokesContainer },
});
</script>
