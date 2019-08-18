<template>
  <div class="jewelry">
    <div class="jewelry__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image content__image--adaptWidth" src="@/assets/jewelry/paperInk1.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/paperInk2.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/paperInk3.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/paperInk4.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/paperInk5.png" />
            </div>
          </li>
        </ul>
      </div>
      <div class="glide__control" data-glide-el="controls">
        <button class="control__button control__button--left" data-glide-dir="<">&#60;</button>
        <button class="control__button control__button--right" data-glide-dir=">">&#62;</button>
      </div>
    </div>
    <div class="jewelry__textArea">
      <p class="jewelry__header">紙-墨</p>
      <p class="textArea__description textArea__description--mb0">材質:紅銅</p>
      <p class="textArea__description">尺寸:壺:11*11*15cm 杯子:6*6*8cm</p>
      <p class="textArea__description textArea__description--mb0">設計理念:</p>
      <p
        class="textArea__description"
      >紙為創作藝術的媒介，用於書法與繪畫的乘載之物。水墨是中國繪畫的代表，黑白調子的水墨畫早期都是以山水畫的形式來表現的，近處寫實，遠處抽象，雖然色彩僅有黑與白，但是意境豐富。</p>
    </div>
  </div>
</template>
<script>
import Glide from '@glidejs/glide'
export default {
  data: () => ({
    glide: null,
  }),
  mounted () {
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