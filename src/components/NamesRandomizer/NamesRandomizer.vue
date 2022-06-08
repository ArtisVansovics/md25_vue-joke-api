<template>
  <div class="container">
    <div class="names-box">
      <p v-for="{ id, name, surname } in notSelected" :key="id">
        {{ name }} {{ surname }}
      </p>
    </div>
    <div class="result-box">
      <p></p>
    </div>
    <ButtonPrimary>Select random name</ButtonPrimary>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary.vue";
import { mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "NamesRandomizer",
  components: { ButtonPrimary },
  computed: {
    ...mapState("names", {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      names: (state) => state.names,
    }),
    ...mapGetters("names", ["notSelected"]),
  },
});
</script>

<style scoped lang="scss" src="./NamesRandomizer.scss" />
