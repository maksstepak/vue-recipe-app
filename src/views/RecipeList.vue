<template>
  <div>
    <h2>Recipe List</h2>
    <div v-if="recipes.length > 0">
      <div v-for="recipe in recipes" :key="recipe.id">
        <h3>{{ recipe.name }}</h3>
        <time>{{ recipe.createdAt | formatDate }}</time>
        <p>{{ recipe.description }}</p>
      </div>
    </div>
    <div v-else>
      <p></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RecipeList",
  computed: {
    ...mapGetters(["recipes"]),
  },
};
</script>

<style lang="scss" scoped></style>
