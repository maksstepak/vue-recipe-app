<template>
  <div>
    <form @submit.prevent="addRecipe" class="form">
      <h3>Add a new recipe</h3>
      <label for="name">Name</label>
      <input v-model="newRecipe.name" id="name" />
      <label for="description">Description</label>
      <textarea v-model="newRecipe.description" id="description"></textarea>
      <label for="totalTime">Total time</label>
      <input
        v-model.number="newRecipe.totalTime"
        type="number"
        id="totalTime"
      />
      <label for="servings">Servings</label>
      <input v-model.number="newRecipe.servings" type="number" id="servings" />
      <fieldset>
        <legend>Categories</legend>
        <input
          type="checkbox"
          id="breakfast"
          value="Breakfast"
          v-model="newRecipe.categories"
        />
        <label for="breakfast">Breakfast</label>
        <input
          type="checkbox"
          id="lunch"
          value="Lunch"
          v-model="newRecipe.categories"
        />
        <label for="lunch">Lunch</label>
        <input
          type="checkbox"
          id="dinner"
          value="Dinner"
          v-model="newRecipe.categories"
        />
        <label for="dinner">Dinner</label>
      </fieldset>
      <label for="ingredients">Ingredients</label>
      <textarea v-model="newRecipe.ingredients" id="ingredients"></textarea>
      <label for="instructions">Instructions</label>
      <textarea v-model="newRecipe.instructions" id="instructions"></textarea>
      <button>Save the recipe</button>
    </form>
  </div>
</template>

<script>
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
    addRecipe() {
      console.log(this.newRecipe);
      // TODO: save the recipe
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 320px;
  margin: 0 auto;
}
</style>
