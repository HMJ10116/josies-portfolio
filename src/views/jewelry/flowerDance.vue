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