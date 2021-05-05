import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recipes: localStorage.getItem("recipes")
      ? JSON.parse(localStorage.getItem("recipes"))
      : [],
  },
  getters: {
    recipes: (state) => {
      return state.recipes;
    },
    getRecipeById: (state) => (id) => {
      return state.recipes.find((recipe) => recipe.id === id);
    },
  },
  mutations: {
    addRecipe(state, recipe) {
      state.recipes.push(recipe);
    },
    removeRecipe(state, id) {
      const index = state.recipes.findIndex((recipe) => recipe.id === id);
      state.recipes.splice(index, 1);
    },
  },
  actions: {
    addRecipe({ commit }, recipe) {
      commit("addRecipe", {
        id: uuidv4(),
        createdAt: dayjs().format(),
        ...recipe,
      });

      Vue.swal({
        position: "top-end",
        icon: "success",
        title: "Your recipe has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    removeRecipe({ commit }, id) {
      commit("removeRecipe", id);

      Vue.swal({
        position: "top-end",
        icon: "success",
        title: "Your recipe has been deleted",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem("recipes", JSON.stringify(state.recipes));
});

export default store;
