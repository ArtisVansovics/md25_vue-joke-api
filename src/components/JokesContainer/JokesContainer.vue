<template>
  <div class="container">
    <JokesCard v-for="{ joke, id } in jokes" :key="id">
      <p>{{ joke }}</p>
      <ButtonPrimary>More details</ButtonPrimary>
    </JokesCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JokesCard from "@/components/JokesCard/JokesCard.vue";
import { mapGetters, mapState } from "vuex";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary.vue";

export default defineComponent({
  name: "JokesContainer",
  components: { ButtonPrimary, JokesCard },
  mounted() {
    this.$store.dispatch("jokes/getData");
  },
  computed: {
    ...mapState("jokes", {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      jokes: (state) => state.data.jokes,
    }),
    ...mapGetters("jokes", ["jokesData"]),
  },
});
</script>

<style scoped lang="scss" src="./JokesContainer.scss" />
