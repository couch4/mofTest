import { create, StateCreator } from "zustand";
import { Action, State } from "./types";

const stateCreator: StateCreator<State & Action> = (set, get) => ({
  bloom: false,
  data: null,
  heroLoaded: false,
  homeData: {},
  isLoaded: false,
  sections: [],
  shaderLoaded: false,

  /// setters

  setBloom: (bloom) => set({ bloom }),
  setData: (data) => {
    if (data) {
      set({ data });
      const sections = data.pages.filter((page: any) => page.id !== "home");
      set({ sections });
      const homeData = data.pages.find((page: any) => page.id === "home");
      set({ homeData });
    }
  },
  setHeroLoaded: (heroLoaded) => {
    set({ heroLoaded });
    if (get().shaderLoaded) {
      set({ isLoaded: true });
    }
  },
  setIsLoaded: (isLoaded: boolean) => set({ isLoaded }),
  setShaderLoaded: (shaderLoaded) => {
    set({ shaderLoaded });
    if (get().heroLoaded) {
      set({ isLoaded: true });
    }
  },
});

const useStore = create<State & Action>(stateCreator);

export default useStore;
