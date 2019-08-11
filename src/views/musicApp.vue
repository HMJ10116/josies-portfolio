<template>
  <div class="musicApp">
    <img class="musicApp__image" src="@/assets/music/fundora1.jpg" />
    <iframe
      class="musicApp__image"
      width="685"
      height="380"
      src="https://www.youtube.com/embed/5Yx_2nQWC_c"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <img class="musicApp__image" src="@/assets/music/wireframe.jpg" />
    <img class="musicApp__image" src="@/assets/music/fundora2.jpg" />
    <img class="musicApp__image" src="@/assets/music/fundora3.jpg" />
    <button class="musicApp__btn wix-btn">BACK</button>
  </div>
</template>
<style lang="scss" scoped>
.musicApp {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
}
.musicApp__image {
  width: 685px;
  margin: auto;
}
.musicApp__btn {
  margin: auto;
  margin-top: 32px;
}
</style>
