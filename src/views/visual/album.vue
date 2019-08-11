<template>
  <div class="exhibition">
    <div class="exhibition__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/1.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/2.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/3.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/4.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/5.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/6.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/7.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/8.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/9.png" />
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
      <span class="exhibition__header">唱片設計</span>
      <p
        class="textArea__description"
      >重新設計 《Coco》，Parov Stelar專輯，該專輯粹取各種樂風中愉悅、不安、壓抑、挑逗等豐富元素，營造婉轉優雅的旋律，典雅帶著抑鬱的鋼琴彈奏，曲調和諧但也有些衝突感。</p>
      <p class="textArea__description">
        因此，用流動的線條代表婉轉優雅的旋律。使用紅色和藍色調，這兩個有些衝突的顏色作為主色調，偏紅的暖色系具有興奮感，而藍色具有沉靜感也給人一種和諧 沉著、安定也能表示抑鬱 。
        用不同層次的紅色及藍色調讓顏色看起來有層次也不會雜亂。也用白色讓所有的色彩構成對比調和關係。
      </p>
      <p class="textArea__description">用不同層次的紅色及藍色調讓顏色看起來有層次也不會雜亂。也用白色讓所有的色彩構成對比調和關係。</p>
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