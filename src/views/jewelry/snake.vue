<template>
  <div class="jewelry">
    <div class="jewelry__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image" src="@/assets/jewelry/snake1.png" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="jewelry__textArea">
      <p class="jewelry__header">百步蛇</p>
      <p class="textArea__description">聚英福爾摩沙珠寶設計‧藍鵲獎-最佳原民藍鵲獎</p>
      <p class="textArea__description textArea__description--mb0">材質:鑽石、黑鑽石、紅寶石、銀</p>
      <p class="textArea__description">尺寸:2.1*2.5*8cm</p>
      <p class="textArea__description textArea__description--mb0">設計理念:</p>
      <p class="textArea__description">保育類動物百步蛇一直是原住民的主要精神象徵。以百步蛇彎曲、盤捲的姿態做造型，圖騰以菱形為元素。紅色象徵百步蛇強韌的生命力。</p>
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