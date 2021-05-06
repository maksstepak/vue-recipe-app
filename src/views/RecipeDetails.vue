<template>
  <div>
    <div v-if="recipe" class="recipe">
      <h2 class="recipe__name">{{ recipe.name }}</h2>
      <p class="recipe__description">{{ recipe.description }}</p>
      <ul class="recipe__list">
        <li>
          <p class="recipe__content">
            <strong>Total time:</strong> {{ recipe.totalTime }}
          </p>
        </li>
        <li>
          <p class="recipe__content">
            <strong>Servings:</strong> {{ recipe.servings }}
          </p>
        </li>
        <li>
          <p class="recipe__content">
            <strong>Categories:</strong> {{ recipe.categories.join(", ") }}
          </p>
        </li>
      </ul>
      <div class="recipe__section">
        <h5 class="recipe__headline">Ingredients:</h5>
        <p class="recipe__text">{{ recipe.ingredients }}</p>
      </div>
      <div class="recipe__section">
        <h5 class="recipe__headline">Instructions:</h5>
        <p class="recipe__text">{{ recipe.instructions }}</p>
      </div>
    </div>
    <div v-else>
      <p>Not found</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeDetails",
  computed: {
    recipe() {
      return this.$store.getters.getRecipeById(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.recipe {
  &__name {
    font-size: 24px;
    margin: 0;
  }

  &__description {
    white-space: pre-line;
  }

  &__list {
    list-style: none;
    padding: 0;
  }

  &__content {
    margin: 0;
  }

  &__section {
    padding: 6px 0;
  }

  &__headline {
    font-size: 18px;
    margin: 0;
  }

  &__text {
    white-space: pre-line;
    margin: 4px 0;
  }
}
</style>
