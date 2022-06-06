<template>
  <div class="names-view">
    <h1>Names</h1>
    <ul>
      <li v-for="{ id, name, surname } in namePicker.names" :key="id">
        {{ name }} {{ surname }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "NamesView",
  computed: {
    ...mapState(["namePicker"]),
  },
});
</script>
