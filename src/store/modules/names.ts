import { Name } from "@/models/NamesModel";
import { ActionContext } from "vuex";
import { RootState } from "@/store";

export interface NamesState {
  names: Name[];
  selectedName: Name;
}

type Context = ActionContext<NamesState, RootState>;

export default {
  namespaced: true,
  state: {
    names: [
      {
        id: 1,
        name: "Alberts",
        surname: "Ivāns",
        picked: false,
      },
      {
        id: 2,
        name: "Arnis",
        surname: "Toks",
        picked: false,
      },
      {
        id: 3,
        name: "Artis",
        surname: "Vansovičs",
        picked: false,
      },
      {
        id: 4,
        name: "Artūrs",
        surname: "Dancis",
        picked: false,
      },
      {
        id: 5,
        name: "Bogdans",
        surname: "Zabela",
        picked: false,
      },
      {
        id: 6,
        name: "Edgars",
        surname: "Kapilinskis",
        picked: false,
      },
      {
        id: 7,
        name: "Elvis",
        surname: "Ketners",
        picked: false,
      },
      {
        id: 8,
        name: "Harals",
        surname: "",
        picked: false,
      },
      {
        id: 9,
        name: "Ieva",
        surname: "Dīvāne",
        picked: false,
      },
      {
        id: 10,
        name: "Ilona",
        surname: "",
        picked: false,
      },
      {
        id: 12,
        name: "Inta",
        surname: "Ozoliņa",
        picked: false,
      },
      {
        id: 13,
        name: "Jānis",
        surname: "Šijānovs",
        picked: false,
      },
      {
        id: 14,
        name: "Ņikita",
        surname: "Peškovs",
        picked: false,
      },
      {
        id: 15,
        name: "Niklāvs",
        surname: "Romans",
        picked: false,
      },
      {
        id: 16,
        name: "Regīna",
        surname: "",
        picked: false,
      },
      {
        id: 17,
        name: "Ričards",
        surname: "Dzelme",
        picked: false,
      },
      {
        id: 18,
        name: "Rihards",
        surname: "Karlauskis",
        picked: false,
      },
      {
        id: 19,
        name: "Roberts",
        surname: "Lode",
        picked: false,
      },
    ] as Name[],
    selectedName: {} as Name,
  },
  getters: {
    notSelected(state: NamesState) {
      return state.names.filter((name) => !name.picked);
    },
  },
  actions: {
    selectNewName(context: Context) {
      context.commit("selectNewName");
    },
    selectRandomName(context: Context) {
      context.commit("selectRandomName");
    },
  },
  mutations: {
    selectNewName(state: NamesState) {
      const unselectedNames = state.names.filter((name) => !name.picked);

      const randomName =
        unselectedNames[Math.floor(Math.random() * unselectedNames.length)];

      randomName.picked = true;

      state.selectedName = randomName;
    },
    selectRandomName(state: NamesState) {
      const notPreviousNames = state.names.filter(
        (name) => name.id !== state.selectedName.id
      );

      state.selectedName =
        notPreviousNames[Math.floor(Math.random() * notPreviousNames.length)];
    },
  },
};
