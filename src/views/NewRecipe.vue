<template>
  <div>
    <form @submit.prevent="addRecipe(newRecipe)" class="form">
      <h3 class="form__title">Add new recipe</h3>
      <label for="name" class="form__label">Name</label>
      <input v-model="newRecipe.name" id="name" class="form__input" />
      <label for="description" class="form__label">Description</label>
      <textarea
        v-model="newRecipe.description"
        id="description"
        class="form__input"
      ></textarea>
      <label for="totalTime" class="form__label">Total time</label>
      <input
        v-model.number="newRecipe.totalTime"
        type="number"
        id="totalTime"
        class="form__input"
      />
      <label for="servings" class="form__label">Servings</label>
      <input
        v-model.number="newRecipe.servings"
        type="number"
        id="servings"
        class="form__input"
      />
      <fieldset>
        <legend class="form__label">Categories</legend>
        <input
          type="checkbox"
          id="breakfast"
          value="Breakfast"
          v-model="newRecipe.categories"
        />
        <label for="breakfast" class="form__label">Breakfast</label>
        <input
          type="checkbox"
          id="lunch"
          value="Lunch"
          v-model="newRecipe.categories"
        />
        <label for="lunch" class="form__label">Lunch</label>
        <input
          type="checkbox"
          id="dinner"
          value="Dinner"
          v-model="newRecipe.categories"
        />
        <label for="dinner" class="form__label">Dinner</label>
      </fieldset>
      <label for="ingredients" class="form__label">Ingredients</label>
      <textarea
        v-model="newRecipe.ingredients"
        id="ingredients"
        class="form__input"
      ></textarea>
      <label for="instructions" class="form__label">Instructions</label>
      <textarea
        v-model="newRecipe.instructions"
        id="instructions"
        class="form__input"
      ></textarea>
      <button class="form__button">
        <font-awesome-icon icon="save" /> Save the recipe
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NewRecipe",
  data() {
    return {
      newRecipe: {
        name: "",
        description: "",
        totalTime: "",
        servings: "",
        categories: [],
        ingredients: "",
        instructions: "",
      },
    };
  },
  methods: {
    ...mapActions(["addRecipe"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables";

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 320px;
  margin: 0 auto;
  padding: 4px 0;

  &__title {
    font-size: 22px;
    margin: 0;
  }

  &__label {
    font-size: 14px;
  }

  &__input {
    font-family: inherit;
    border: solid 1px $black;
  }

  &__button {
    border: 0;
    background: $green;
    color: $white;
    padding: 8px;
    cursor: pointer;
  }
}
</style>
