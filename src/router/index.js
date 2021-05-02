import Vue from "vue";
import VueRouter from "vue-router";
import RecipeList from "../views/RecipeList.vue";
import NewRecipe from "../views/NewRecipe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RecipeList",
    component: RecipeList,
  },
  {
    path: "/recipes/new",
    name: "NewRecipe",
    component: NewRecipe,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
