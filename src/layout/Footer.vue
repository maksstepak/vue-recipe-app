<template>
  <footer class="footer">
    <p class="footer__text">Copyright &copy; 2021 Foo Bar</p>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.footer {
  margin-top: auto;
  background: $blue-light;

  &__text {
    text-align: center;
  }
}
</style>
