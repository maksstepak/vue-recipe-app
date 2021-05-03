<template>
  <div class="content">
    <app-header />
    <div>
      <main class="main">
        <div class="main__content"><router-view /></div>
      </main>
    </div>
    <app-footer />
  </div>
</template>

<script>
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import "@/scss/_variables.scss";

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  background: $white;
  color: $black;
}

.content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 8px;
}
</style>
