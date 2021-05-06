import Vue from "vue";
import VueRouter from "vue-router";
import RecipeList from "../views/RecipeList.vue";
import NewRecipe from "../views/NewRecipe.vue";
import RecipeDetails from "../views/RecipeDetails.vue";

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
  {
    path: "/recipes/:id",
    name: "RecipeDetails",
    component: RecipeDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
