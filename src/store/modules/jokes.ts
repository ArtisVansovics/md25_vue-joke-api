import { JokesData } from "@/models/JokesModel";
import { ActionContext } from "vuex";
import { RootState } from "@/store";
import { Commit } from "vuex";
import axios from "axios";

export interface JokesState {
  data: JokesData;
}

type Context = ActionContext<JokesState, RootState>;

export default {
  namespaced: true,
  state: (): JokesState => ({
    data: {} as JokesData,
  }),
  getters: {
    data: (state: JokesState) => state.data,
  },
  actions: {
    async getData({ commit }: { commit: Commit }) {
      try {
        const data = await axios.get(
          "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10"
        );
        commit("setData", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    // async getData(context: Context): Promise<JokesData> {
    //   const jokesData = (
    //     await axios.get(
    //       "https://v2.jokeapi.dev/joke/Programming?type=single&amount=10"
    //     )
    //   ).data;
    //   context.commit("setData", jokesData);
    //   return context.state.data;
    // },
  },
  mutations: {
    setData(state: JokesState, data: JokesData): void {
      state.data = data;
    },
  },
};
