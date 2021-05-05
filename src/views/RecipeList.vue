<template>
  <div>
    <h2 class="title">Recipe List</h2>
    <div v-if="recipes.length > 0" class="recipe-list">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-list__item">
        <h3 class="recipe-list__name">{{ recipe.name }}</h3>
        <time class="recipe-list__time">{{
          recipe.createdAt | formatDate
        }}</time>
        <p class="recipe-list__description">{{ recipe.description }}</p>
        <router-link
          :to="`/recipes/${recipe.id}`"
          class="recipe-list__link recipe-list__link--success"
          ><font-awesome-icon icon="file-alt" /> Show details</router-link
        >
        <button
          @click="deleteRecipe(recipe.id)"
          class="recipe-list__link recipe-list__link--danger"
        >
          <font-awesome-icon icon="trash-alt" /> Delete
        </button>
      </div>
    </div>
    <div v-else class="empty-list">
      <p class="empty-list__text">No recipes yet.</p>
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
  methods: {
    async deleteRecipe(id) {
      const result = await this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        this.$store.dispatch("removeRecipe", id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.title {
  font-size: 24px;
  margin: 0;
}

.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 12px;
  padding: 4px 0;

  &__item {
    border: solid 1px $black;
    border-radius: 4px;
    box-shadow: 4px 4px 4px $black;
    padding: 5px;
  }

  &__name {
    margin: 0;
    font-size: 22px;
  }

  &__time {
    font-size: 14px;
  }

  &__description {
  }

  &__link {
    cursor: pointer;
    color: $white;
    background: $black;
    padding: 8px;
    font-size: 18px;
    text-decoration: none;
    border: none;
    margin: 0 4px;
    font-family: inherit;

    &--success {
      background: $green;
    }

    &--danger {
      background: $red;
    }
  }
}

.empty-list {
  &__text {
    font-size: 18px;
  }
}
</style>
