<template>
  <div class="jewelry">
    <div class="jewelry__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/jewelry/flowerDance.png" />
            </div>
          </li>
        </ul>
      </div>
      <!-- <div class="glide__control" data-glide-el="controls">
        <button class="control__button control__button--left" data-glide-dir="<">&#60;</button>
        <button class="control__button control__button--right" data-glide-dir=">">&#62;</button>
      </div>-->
    </div>
    <div class="jewelry__textArea">
      <p class="jewelry__header">花舞</p>
      <p class="textArea__description textArea__description--mb0">材質:18K、鑽石、拓帕石、丹泉石、藍寶石</p>
      <p class="textArea__description">尺寸:2.5*2.5*4.5cm</p>
      <p class="textArea__description textArea__description--mb0">設計理念:</p>
      <p
        class="textArea__description"
      >色調清新的桔梗花是東方特有的花卉。結梗花抗乾旱、耐嚴寒的特質，就像東方的女性，氣質高雅、柔順、堅忍不拔的精神。而蝴蝶在東方的世界象徵福氣及蛻變，將兩者結合，期許東方人帶著福氣，並摒持著堅毅不拔的信念，不斷成長、蛻變。</p>
    </div>
  </div>
</template>
<script>
// import Glide from '@glidejs/glide'
export default {
  data: () => ({
    glide: null,
  }),
  mounted() {
    // this.glide = new Glide('.jewelry__glide', {
    //   type: 'carousel',
    //   perView: 1,
    //   focusAt: 'center',
    // }).mount()
  }
}
</script>
<style lang="scss" scoped src='./_jewelry.scss'>
</style>