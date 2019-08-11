<template>
  <div class="exhibition">
    <div class="exhibition__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image content__image--1" src="@/assets/business/1.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image content__image--2" src="@/assets/business/2.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image content__image--3" src="@/assets/business/3.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image content__image--4" src="@/assets/business/4.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img class="content__image content__image--5" src="@/assets/business/5.png" />
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
      <span class="exhibition__header">商業專案設計</span>
      <p class="textArea__description">YEF模擬實務學習，是一個跨領域、跨國際、跨自我的學習計畫。</p>
      <p class="textArea__description textArea__description--mb0">團隊名稱: HUSH</p>
      <p class="textArea__description">("H"APPIENESS、"U"NIQUE、"S"HARE、"H"OPE)</p>
      <p class="textArea__description textArea__description--mb0">團隊理念: 智慧生活用科技讓生活更美好</p>
      <p
        class="textArea__description"
      >提供「一站到位」服務。提供客製化「達客箱(TakeBox)」。 在旅行過程中，手機預載旅人所需APP的套裝軟體及客服，提供旅人最即時資訊。也設有Call Center 遠端協助，以解決旅程中不可預期臨時的問題，增加產品機動性。</p>
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
  .content__image {
    width: 100%;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
  }
}
.exhibition__textArea {
  font-size: 12px;
  text-align: left;
  color: #979797;
  .textArea__description--mb0 {
    margin-bottom: 0;
  }
  .textArea__subTitle {
  }
}
@media screen and (min-width: 768px) {
  .slide__content {
    height: 480px;
    .content__image {
      width: 100%;
      height: unset;
      margin: auto;
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