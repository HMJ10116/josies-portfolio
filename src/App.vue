<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: unset;
  color: unset;
}
button {
  border: none;
}
#app {
  font-family: "Noto Sans TC";
}
@import "./scss/button.scss";
@import "./scss/exhibition.scss";
// Gslide Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";
</style>
