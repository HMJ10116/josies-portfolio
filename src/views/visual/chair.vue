<template>
  <div class="exhibition">
    <div class="exhibition__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/chair/1.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/chair/2.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/chair/3.png" />
            </div>
          </li>
        </ul>
      </div>
      <div class="glide__control" data-glide-el="controls">
        <button class="control__button control__button--left" data-glide-dir="<">&#60;</button>
        <button class="control__button control__button--right" data-glide-dir=">">&#62;</button>
      </div>
    </div>
    <div class="exhibition__textArea">
      <span class="exhibition__header">經典再現-椅展</span>
      <p
        class="textArea__description"
      >經典再現向設計大師致敬，這個展覽海報設計概念是因為灰色是明度較低的中色調，所以以灰色椅子的剪影為底，再放上參與者向大師致敬的作品，代表參與者轉化大師作品成為一張椅子。</p>
      <p
        class="textArea__description"
      >邀請卡也延伸同樣的設計理念，參與者是用厚瓦楞紙來製作椅子，因此邀請卡外層則是用接近瓦楞紙顏色的牛皮紙作為材質，剪出椅子的圖樣，讓簍空的外頁能部分能隱隱約約地 看到大師的作品。而內頁是用以水平、垂直線條與色塊作為元素，各種大小經典大師作品來構成畫面，讓視覺上較井然有序。</p>
      <p class="textArea__description">而“經典再現“字體設計則是因為這是椅子設計展，所以刪減這四個字的一些筆畫，讓讀文字有傢俱的感覺。</p>
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
    this.glide = new Glide('.exhibition__glide', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
    }).mount()
  }
}
</script>
<style lang="scss" scoped>
.exhibition {
  padding: 24px;
}
.exhibition__glide {
  width: 273px;
  margin: auto;
  .glide__track {
    z-index: 10;
  }
  .glide__control {
    position: absolute;
    top: calc(50% - 46px);
    display: flex;
    justify-content: space-between;
    width: 100%;
    .control__button {
      height: 75px;
      font-size: 12px;
      
      background-color: #606060;
      color: white;
      position: absolute;
      &:focus {
        outline: none;
      }
    }
    .control__button--left {
    }
    .control__button--right {
      right: 0px;
    }
  }
  .glide__bullet {
    border: 1px solid black;
  }
  .glide__bullet--active {
    background-color: black;
  }
}
.slide__content {
  min-height: 200px;
  display: flex;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  > img {
    height: 100%;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
.exhibition__textArea {
  font-size: 12px;
  text-align: left;
  color: #979797;
  margin: auto;
  width: 273px;
  .textArea__description {
    // margin: 0px;
  }
  .textArea__description--mb0 {
    margin-bottom: 0;
  }
  .textArea__subTitle {
  }
}
@media screen and (min-width: 768px) {
  .slide__content {
    height: 480px;
    > img {
      height: 100%;
    }
  }
  .exhibition__glide {
    position: relative;
    width: 542px;
    margin: auto;
    .glide__control {
      top: calc(50% - 75px);
      width: 542px;
      transform: translateX(-50%);
      position: absolute;
      left: 50%;
      .control__button {
        width: 25px;
        font-size: 25px;
        height: 150px;
      }
      .control__button--right {
        right: 0px;
      }
    }
  }
  .exhibition__textArea {
    width: 542px;
    margin: auto;
    font-size: 16px;
  }
}
</style>