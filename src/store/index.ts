import { createStore } from "vuex";
import names, { NamesState } from "@/store/modules/names";
import jokes, { JokesState } from "@/store/modules/jokes";

export interface RootState {
  names: NamesState;
  data: JokesState;
}

export default createStore({
  modules: {
    names,
    jokes,
  },
});
