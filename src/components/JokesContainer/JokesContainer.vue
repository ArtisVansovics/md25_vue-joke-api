<template>
  <div class="container">
    <div class="row">
      <button
        v-for="{ value, name } in filterButtons"
        :class="['filter-button', filterFlag === value ? 'selected' : '']"
        @click="setFilter(value)"
        :key="value"
      >
        {{ name }}
      </button>
    </div>
    <div class="row" v-if="loading">
      <h2>Loading...</h2>
    </div>
    <div
      class="row"
      v-if="filterFlag !== 'all' && jokesFilter(filterFlag).length === 0"
    >
      <h3>No jokes matching your query</h3>
    </div>
    <div class="card-box">
      <JokesCard v-for="{ joke, id } in jokesFilter(filterFlag)" :key="id">
        <p>{{ joke }}</p>
        <RouterLink :to="{ name: 'joke', params: { id: id } }" class="link">
          <ButtonPrimary>More details</ButtonPrimary>
        </RouterLink>
      </JokesCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JokesCard from "@/components/JokesCard/JokesCard.vue";
import { mapGetters, mapState } from "vuex";
import ButtonPrimary from "@/components/ButtonPrimary/ButtonPrimary.vue";

type FilterButton = {
  value: Filter;
  name: string;
};

type Filter =
  | "all"
  | "nsfw"
  | "religious"
  | "political"
  | "racist"
  | "sexist"
  | "explicit";

export default defineComponent({
  name: "JokesContainer",
  components: { ButtonPrimary, JokesCard },
  data: () => ({
    filterFlag: "all" as Filter,
    filterButtons: [
      {
        value: "all",
        name: "ALL",
      },
      {
        value: "nsfw",
        name: "NSFW",
      },
      {
        value: "religious",
        name: "RELIGIOUS",
      },
      {
        value: "political",
        name: "POLITICAL",
      },
      {
        value: "racist",
        name: "RACIST",
      },
      {
        value: "sexist",
        name: "SEXIST",
      },
      {
        value: "explicit",
        name: "EXPLICIT",
      },
    ] as FilterButton[],
  }),
  mounted() {
    this.$store.dispatch("jokes/getData");
  },
  computed: {
    ...mapState(["jokes"]),
    ...mapGetters("jokes", ["jokesData", "jokesFilter", "loading"]),
  },
  methods: {
    setFilter(filterValue: Filter) {
      this.filterFlag = filterValue;
    },
  },
});
</script>

<style scoped lang="scss" src="./JokesContainer.scss" />
