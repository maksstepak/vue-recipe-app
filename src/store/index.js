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
  },
  actions: {
    addRecipe({ commit }, recipe) {
      commit("addRecipe", {
        id: uuidv4(),
        createdAt: dayjs().format(),
        ...recipe,
      });
    },
  },
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem("recipes", JSON.stringify(state.recipes));
});

export default store;
