import { Store } from "@/store"; // path to store file
import { JokesData } from "@/models/JokesModel";
import { Names } from "@/models/NamesModel";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface RootState {
    data: JokesData;
    names: Names[];
  }
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
