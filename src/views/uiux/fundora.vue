<template>
  <div class="fundora">
    <img class="fundora__design" src="@/assets/music/banner.png" />
    <iframe
      class="fundora__video"
      height="315"
      src="https://www.youtube.com/embed/5Yx_2nQWC_c"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <img class="fundora__design" src="@/assets/music/fundoraLarge.png" />
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.fundora {
  padding: 24px;
}
.fundora__design {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
.fundora__video {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
</style>
