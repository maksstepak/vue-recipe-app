<template>
  <div>
    <form @submit.prevent="addRecipe" class="form">
      <h3 class="form__title">Add new recipe</h3>
      <label for="name" class="form__label">Name</label>
      <input v-model.trim="newRecipe.name" id="name" class="form__input" />
      <div v-if="$v.newRecipe.name.$error">
        <div class="form__error" v-if="!$v.newRecipe.name.required">
          Field is required
        </div>
        <div class="form__error" v-if="!$v.newRecipe.name.minLength">
          Name must have at least
          {{ $v.newRecipe.name.$params.minLength.min }} letters.
        </div>
        <div class="form__error" v-if="!$v.newRecipe.name.maxLength">
          Name must have at most
          {{ $v.newRecipe.name.$params.maxLength.max }} letters.
        </div>
      </div>
      <label for="description" class="form__label">Description</label>
      <textarea
        v-model.trim="newRecipe.description"
        id="description"
        class="form__input"
      ></textarea>
      <div v-if="$v.newRecipe.description.$error">
        <div class="form__error" v-if="!$v.newRecipe.description.required">
          Field is required
        </div>
      </div>
      <label for="totalTime" class="form__label">Total time</label>
      <input
        v-model.number="newRecipe.totalTime"
        type="number"
        id="totalTime"
        class="form__input"
      />
      <div v-if="$v.newRecipe.totalTime.$error">
        <div class="form__error" v-if="!$v.newRecipe.totalTime.required">
          Field is required
        </div>
      </div>
      <label for="servings" class="form__label">Servings</label>
      <input
        v-model.number="newRecipe.servings"
        type="number"
        id="servings"
        class="form__input"
      />
      <div v-if="$v.newRecipe.servings.$error">
        <div class="form__error" v-if="!$v.newRecipe.servings.required">
          Field is required
        </div>
      </div>
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
        v-model.trim="newRecipe.ingredients"
        id="ingredients"
        class="form__input"
      ></textarea>
      <div v-if="$v.newRecipe.ingredients.$error">
        <div class="form__error" v-if="!$v.newRecipe.ingredients.required">
          Field is required
        </div>
      </div>
      <label for="instructions" class="form__label">Instructions</label>
      <textarea
        v-model.trim="newRecipe.instructions"
        id="instructions"
        class="form__input"
      ></textarea>
      <div v-if="$v.newRecipe.instructions.$error">
        <div class="form__error" v-if="!$v.newRecipe.instructions.required">
          Field is required
        </div>
      </div>
      <button type="submit" class="form__button">
        <font-awesome-icon icon="save" /> Save the recipe
      </button>
    </form>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("addRecipe", this.newRecipe);
        Object.assign(this.$data, this.$options.data.apply(this));
        this.$v.$reset();
      }
    },
  },
  validations: {
    newRecipe: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(255),
      },
      description: {
        required,
      },
      totalTime: {
        required,
      },
      servings: {
        required,
      },
      ingredients: {
        required,
      },
      instructions: {
        required,
      },
    },
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

  &__error {
    color: $red;
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
