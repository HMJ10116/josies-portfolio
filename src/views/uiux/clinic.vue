<template>
  <div class="clinic">
    <img class="clinic__design" src="@/assets/clinic/banner.png" />
    <iframe
      class="clinic__video"
      height="315"
      src="https://www.youtube.com/embed/GzVEh7dactI"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <img class="clinic__design" src="@/assets/clinic/details.png" />
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.clinic {
  padding: 24px;
}
.clinic__design {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
.clinic__video {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
</style>
