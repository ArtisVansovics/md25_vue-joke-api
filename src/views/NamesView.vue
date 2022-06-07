<template>
  <div class="names-view">
    <NamesRandomizer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NamesRandomizer from "@/components/NamesRandomizer/NamesRandomizer.vue";

export default defineComponent({
  name: "NamesView",
  components: { NamesRandomizer },
});
</script>
