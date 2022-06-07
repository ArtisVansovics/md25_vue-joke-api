<template>
  <div class="container">
    <div class="names-box">
      <p v-for="{ id, name, surname } in names.names" :key="id">
        {{ name }} {{ surname }}
      </p>
    </div>
    <div class="result-box">
      <p></p>
    </div>
    <ButtonPrimary>Random name</ButtonPrimary>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary.vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "NamesRandomizer",
  components: { ButtonPrimary },
  computed: {
    ...mapState(["names"]),
  },
});
</script>

<style scoped lang="scss" src="./NamesRandomizer.scss" />
