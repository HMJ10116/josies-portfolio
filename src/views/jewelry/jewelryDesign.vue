<template>
  <div class="jewelry">
    <div class="jewelry__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/jewelryDesign.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/jewelryDesign2.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/jewelryDesign3.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/jewelryDesign4.png" />
            </div>
          </li>
        </ul>
      </div>
      <div class="glide__control" data-glide-el="controls">
        <button class="control__button control__button--left" data-glide-dir="<">&#60;</button>
        <button class="control__button control__button--right" data-glide-dir=">">&#62;</button>
      </div>
    </div>
  </div>
</template>
<script>
import Glide from '@glidejs/glide'
export default {
  data: () => ({
    glide: null,
  }),
  mounted() {
    this.glide = new Glide('.jewelry__glide', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
    }).mount()
  }
}
</script>
<style lang="scss" scoped src='./_jewelry.scss'>
</style>
