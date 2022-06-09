import { Flags, JokeData, JokesData } from "@/models/JokesModel";
import { ActionContext } from "vuex";
import { RootState } from "@/store";
import axios from "axios";

export interface JokesState {
  data: JokesData;
  dataSingle: JokeData;
  loading: boolean;
}

type Context = ActionContext<JokesState, RootState>;

export default {
  namespaced: true,
  state: {
    data: {} as JokesData,
    dataSingle: {} as JokeData,
    loading: false,
  },
  getters: {
    loading: (state: JokesState) => state.loading,
    jokesData: (state: JokesState) => state.data,
    jokeData: (state: JokesState) => state.dataSingle,
    jokesFilter: (state: JokesState) => (flag: string) => {
      if (flag === "all") {
        return state.data.jokes;
      } else
        return state.data.jokes.filter(
          (joke) => joke.flags[flag as keyof Flags]
        );
    },
  },
  actions: {
    async getData(context: Context) {
      context.commit("loadingStatus", true);

      try {
        const data = await axios.get(
          "https://v2.jokeapi.dev/joke/Programming?type=single&amount=9"
        );

        context.commit("setData", data.data);
        context.commit("loadingStatus", false);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async getSingleData(context: Context, id: number) {
      context.commit("loadingStatus", true);

      try {
        const data = await axios.get(
          `https://v2.jokeapi.dev/joke/Any?idRange=${id}`
        );

        context.commit("setDataSingle", data.data);
        context.commit("loadingStatus", false);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    loadingStatus(state: JokesState, newLoadingStatus: boolean) {
      state.loading = newLoadingStatus;
    },
    setData(state: JokesState, data: JokesData) {
      state.data = data;
    },
    setDataSingle(state: JokesState, dataSingle: JokeData) {
      state.dataSingle = dataSingle;
    },
  },
};
