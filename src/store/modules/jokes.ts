import { JokeData, JokesData } from "@/models/JokesModel";
import { ActionContext } from "vuex";
import { RootState } from "@/store";
import axios from "axios";

export interface JokesState {
  data: JokesData;
  dataSingle: JokeData;
}

type Context = ActionContext<JokesState, RootState>;

export default {
  namespaced: true,
  state: {
    data: {} as JokesData,
    dataSingle: {} as JokeData,
  },
  getters: {
    jokesData: (state: JokesState) => state.data,
    jokeData: (state: JokesState) => state.dataSingle,
  },
  actions: {
    async getData(context: Context) {
      try {
        const data = await axios.get(
          "https://v2.jokeapi.dev/joke/Programming?type=single&amount=9"
        );
        context.commit("setData", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async getSingleData(context: Context, id: number) {
      try {
        const data = await axios.get(
          `https://v2.jokeapi.dev/joke/Any?idRange=${id}`
        );
        context.commit("setDataSingle", data.data);
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
    setData(state: JokesState, data: JokesData) {
      state.data = data;
    },
    setDataSingle(state: JokesState, dataSingle: JokeData) {
      state.dataSingle = dataSingle;
    },
  },
};
