<template>
  <header class="header">
    <h1 class="header__title">Recipe App</h1>
    <nav class="header__navigation navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link to="/" class="navigation__link">My recipes</router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/recipes/new" class="navigation__link"
            >Add new recipe</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables";

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: $red;
  padding: 4px 8px;

  &__title {
    text-align: center;
    margin: 8px 0;
  }
}

@media (min-width: $breakpoint-medium) {
  .header {
    flex-direction: row;
  }
}

.navigation {
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  &__item {
  }

  &__link {
    color: $blue-dark;
    text-decoration: none;
  }

  .router-link-exact-active {
    color: $blue-light;
  }
}

@media (min-width: $breakpoint-medium) {
  .navigation {
    &__list {
      display: flex;
      gap: 10px;
    }
  }
}
</style>
