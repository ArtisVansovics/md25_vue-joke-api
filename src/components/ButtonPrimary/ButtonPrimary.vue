<template>
  <button class="button" @click="clickHandler" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonPrimary",
  props: ["isDisabled"],
  emits: ["onClick"],
  methods: {
    clickHandler() {
      this.$emit("onClick");
    },
  },
});
</script>

<style scoped lang="scss" src="./ButtonPrimary.scss" />
