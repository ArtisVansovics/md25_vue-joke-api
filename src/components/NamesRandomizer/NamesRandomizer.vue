<template>
  <div class="container">
    <div v-if="notSelected.length > 0" class="names-box">
      <p v-for="{ id, name, surname } in notSelected" :key="id">
        {{ name }} {{ surname }}
      </p>
    </div>
    <div v-else class="names-box">
      <p v-for="{ id, name, surname } in allNames" :key="id">
        {{ name }} {{ surname }}
      </p>
    </div>
    <div class="result-box">
      <p>{{ currentSelectedName.name }} {{ currentSelectedName.surname }}</p>
    </div>
    <ButtonPrimary v-if="notSelected.length > 0" :onClick="selectNewName"
      >Select new random name</ButtonPrimary
    >
    <ButtonPrimary v-else :onClick="selectRandomName"
      >Select random name</ButtonPrimary
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "NamesRandomizer",
  components: { ButtonPrimary },
  computed: {
    ...mapState(["names"]),
    ...mapGetters("names", ["notSelected", "allNames", "currentSelectedName"]),
  },
  methods: {
    ...mapActions("names", ["selectNewName", "selectRandomName"]),
  },
});
</script>

<style scoped lang="scss" src="./NamesRandomizer.scss" />
