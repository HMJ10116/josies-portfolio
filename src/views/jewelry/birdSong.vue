<template>
  <div class="jewelry">
    <div class="jewelry__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/birdSong.png" />
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
      <p class="jewelry__header">囀</p>
      <p class="textArea__description">藍鵲獎─最佳耳飾獎, 第六屆福爾摩沙珠寶設計競賽</p>
      <p class="textArea__description textArea__description--mb0">材質:琺瑯、999銀、鑽石</p>
      <p class="textArea__description">尺寸:5*2.5*2.5cm</p>
      <p class="textArea__description textArea__description--mb0">設計理念:</p>
      <p
        class="textArea__description"
      >以彎曲的螺旋線條，象徵優雅的保育類動物--藍腹鷴。軸心旁的羽翼繞著中心的鑽石旋轉，象徵著快要消失的藍腹鷴，經過復育後，能夠生生不息、代代相傳。</p>
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