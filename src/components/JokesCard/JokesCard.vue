<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "JokesCard",
});
</script>

<style scoped lang="scss" src="./JokesCard.scss" />
