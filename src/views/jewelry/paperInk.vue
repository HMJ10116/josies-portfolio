<template>
  <div class="jewelry">
    <div class="jewelry__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/jewelry/paperInk1.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/jewelry/paperInk2.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/jewelry/paperInk3.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/jewelry/paperInk4.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/jewelry/paperInk5.png" />
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
  mounted() {
    this.glide = new Glide('.jewelry__glide', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
    }).mount()
  }
}
</script>
<style lang="scss" scoped>
.jewelry {
  padding: 24px;
}
.jewelry__glide {
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
.jewelry__textArea {
  font-size: 12px;
  text-align: left;
  color: #979797;
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
  .jewelry__glide {
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
  .jewelry__textArea {
    width: 542px;
    margin: auto;
    font-size: 16px;
  }
}
</style>
