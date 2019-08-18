<template>
  <div class="home">
    <div class="exhibition__glide glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/music/fundora1.jpg" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/clinic/banner.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/yes123/yes123 1.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/album/1.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/jewelry/birdSong.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/jewelry/flowerDance.png" />
            </div>
          </li>
          <li class="glide__slide">
            <div class="slide__content">
              <img src="@/assets/jewelry/snake.png" />
            </div>
          </li>
        </ul>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <template v-for="number in 6">
          <button class="glide__bullet" :data-glide-dir="`=${number-1}`" :key="number"></button>
        </template>
      </div>
    </div>
    <div class="home___vl"></div>
    <h1 class="home__header">01關於我</h1>
    <div class="home__aboutGroup">
      <img class="home__portrait" src="@/assets/about/minjing.png" />
      <div class="aboutGroup__textArea">
        <div class="home__basicInfo">
          <span class="intro__name">何明璟/Ming-Jing He</span>
          <span class="intro__email">hmc10116@gmail.com</span>
        </div>
        <div class="textArea__skill">
          <span class="skill__title">軟體技術</span>
          <div class="skill__points">
            <span class="skill__point">PS</span>
            <span class="skill__point">AI</span>
            <span class="skill__point">SKETCH</span>
          </div>
        </div>
        <div class="about__education">
          <span class="education__title">學歷背景</span>
          <span class="eduction__college">輔大應用美術系金工產品組</span>
          <span class="education__university">QUEEN MARY UNIVERSITY OF LONDON</span>
          <span class="eudcation__major">MSC MARKETING</span>
        </div>
      </div>
    </div>
    <div class="home__intro">
      <p
        class="intro__part intro__part--1"
      >擁有多元的經歷，學習設計，有厚實的美學繪畫能力，善於處理資訊關係的空間美感，因為從小學藝術長大，國高中皆讀美術，大學學習金工產品設計及視傳設計。</p>
      <p class="intro__part intro__part--1">
        研究所學習行銷，曾做過 商業行銷、營運等專案，曾參與商業專案，包含餐廳數位行銷、飯店營運，涵蓋市場調查、競業分析、產品研究
        <router-link class="intro__link" :to="{name: 'about'}">......了解更多</router-link>
      </p>
    </div>
    <div class="home___vl"></div>
    <h1 class="home__header">02介面設計</h1>
    <div class="home__imageGroup home__imageGroup--1">
      <div class="imageGroup__item">
        <img class="item__image" src="@/assets/music/fundora1.jpg" />
        <div class="item__cover" @click="routeByName('fundora')">
          <span class="cover__imageName">FUNDORA MUSIC APP</span>
        </div>
      </div>
      <div class="imageGroup__item">
        <img class="item__image item__image--mt16" src="@/assets/yes123/yes123 1.png" />
        <div class="item__cover" @click="routeByName('yes123')">
          <span class="cover__imageName">YES123 APP REDESIGN</span>
        </div>
      </div>
      <div class="imageGroup__item">
        <img class="item__image item__image--mt16" src="@/assets/clinic/banner.png" />
        <div class="item__cover" @click="routeByName('clinic')">
          <span class="cover__imageName">CLINIC APP DESIGN CONCEPT</span>
        </div>
      </div>
    </div>
    <div class="home___vl"></div>
    <h1 class="home__header">03視覺設計</h1>
    <div class="home__imageGroup home__imageGroup--2">
      <div class="imageGroup__item">
        <img class="item__image" src="@/assets/album/1.png" />
        <div class="item__cover" @click="routeByName('album')">
          <span class="cover__imageName">唱片設計</span>
        </div>
      </div>
      <div class="imageGroup__item">
        <img class="item__image item__image--mt16" src="@/assets/business/1.png" />
        <div class="item__cover" @click="routeByName('business')">
          <span class="cover__imageName">商業專案設計</span>
        </div>
      </div>
      <div class="imageGroup__item">
        <img class="item__image item__image--mt16" src="@/assets/chair/1.png" />
        <div class="item__cover" @click="routeByName('chair')">
          <span class="cover__imageName">經典再現--椅展</span>
        </div>
      </div>
    </div>
    <div class="home___vl"></div>
    <h1 class="home__header">04金工珠寶設計</h1>
    <div class="home__jewelryGroup">
      <div class="jewelryGroup__item">
        <img
          class="jewelryGroup__jewelry jewelryGroup__jewelry--birdSong"
          src="@/assets/jewelry/birdSong.png"
        />
        <div class="item__cover" @click="routeByName('birdSong')">
          <span class="cover__imageName">囀</span>
        </div>
      </div>
      <div class="jewelryGroup__item">
        <img
          class="jewelryGroup__jewelry jewelryGroup__jewelry--snake"
          src="@/assets/jewelry/snake.png"
        />
        <div class="item__cover" @click="routeByName('snake')">
          <span class="cover__imageName">百步蛇</span>
        </div>
      </div>
      <div class="jewelryGroup__item">
        <img
          class="jewelryGroup__jewelry jewelryGroup__jewelry--jewelryDesign"
          src="@/assets/jewelry/jewelryDesign.png"
        />
        <div class="item__cover" @click="routeByName('jewelryDesign')">
          <span class="cover__imageName">珠寶設計繪畫</span>
        </div>
      </div>
      <div class="jewelryGroup__item">
        <img
          class="jewelryGroup__jewelry jewelryGroup__jewelry--diff"
          src="@/assets/jewelry/diff.png"
        />
        <div class="item__cover" @click="routeByName('diff')">
          <span class="cover__imageName">異</span>
        </div>
      </div>
      <div class="jewelryGroup__item">
        <img
          class="jewelryGroup__jewelry jewelryGroup__jewelry--flowerDance"
          src="@/assets/jewelry/flowerDance.png"
        />
        <div class="item__cover" @click="routeByName('flowerDance')">
          <span class="cover__imageName">花舞</span>
        </div>
      </div>
      <div class="jewelryGroup__item">
        <img
          class="jewelryGroup__jewelry jewelryGroup__jewelry--paperInk"
          src="@/assets/jewelry/paperInk1.png"
        />
        <div class="item__cover" @click="routeByName('paperInk')">
          <span class="cover__imageName">紙-墨</span>
        </div>
      </div>
    </div>
    <div class="home___vl"></div>
    <h1 class="home__header">05聯絡方式</h1>
    <div class="home__footer">
      <span>TEL: 0939968645</span>
      <span>Email: hmc10116@gamil.com</span>
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
    let config = {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
      autoplay: 3000,
    }
    if (window.innerWidth >= 768) {
      config.perView = 2
    }
    this.glide = new Glide('.exhibition__glide', config).mount()
    window.addEventListener('resize', this.handleGlide)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleGlide)
  },
  methods: {
    handleGlide () {
      if (this.glide) {
        if (window.innerWidth >= 768) {
          this.glide.update({ perView: 2 })
        } else {
          this.glide.update({ perView: 1, })
        }
      }

    },
    routeByName (routeName) {
      this.$router.push({
        name: routeName
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  color: rgba(131, 131, 131, 0.85);
  position: relative;
  > * {
    &:not(.glide):not(.home___vl):not(.home__jewelryGroup) {
      padding: 0 24px;
    }
  }
}
.exhibition__glide {
  width: 100vw;
  margin: auto;
  .glide__track {
    z-index: 10;
  }
  .glide__bullets {
    bottom: 3em;
    .glide__bullet {
      background-color: #d8d8d8;
      border: 1px solid white;
    }
    .glide__bullet--active {
      background-color: #80cedb;
    }
  }
  .glide__bullet {
    border: 1px solid black;
  }
  .glide__bullet--active {
    background-color: black;
  }
  .glide__slide {
    .slide__content {
      min-height: 72vw;
      display: flex;
      justify-content: center;
      max-width: 100vw;
      overflow: hidden;
      position: relative;
      > img {
        width: 100%;
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin: auto;
      }
    }
  }
}
.home__imageGroup {
  .imageGroup__item {
    position: relative;
    margin-top: 16px;
    .item__image {
      width: 100%;
      cursor: pointer;
    }
    .item__cover {
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: all 0.38s;
      max-width: 640px;
      transform: translateX(-50%);
      &:hover {
        background-color: rgba(0, 0, 0, 0.34);
        .cover__imageName {
          opacity: 1;
        }
      }
      .cover__imageName {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
    }
  }
}
.home___vl {
  margin: 23px auto auto auto;
  border-right: 2px solid #8e8e8e;
  height: 32px;
  width: 1px;
}
.home__header {
  font-size: 12px;
  color: #656565;
  margin-top: 16px;
}
.home__basicInfo {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #979797;
  margin-top: 34px;
}
.home__portrait {
  width: 100%;
  margin-top: 24px;
}
.textArea__skill {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  font-size: 12px;
  .skill__title {
    color: #979797;
  }
  .skill__points {
    display: flex;
    justify-content: center;
    margin-top: 8px;
    .skill__point {
      margin: 0 4px;
      color: white;
      background-color: #80cedb;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      line-height: 60px;
      font-size: 12px;
    }
  }
}
.about__education {
  font-size: 12px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  .eduction__college {
    margin-top: 32px;
  }
}
.home__intro {
  margin: 32px auto auto auto;
  text-align: left;
  font-size: 12px;
  .intro__link {
    color: #9bd2dc;
  }
}
.home__jewelryGroup {
  padding: 0 24px;
  .jewelryGroup__jewelry {
    width: 100%;
    cursor: pointer;
  }
  .jewelryGroup__jewelry--birdSong {
    grid-area: birdSong;
  }
  .jewelryGroup__jewelry--snake {
    grid-area: snake;
  }
  .jewelryGroup__jewelry--jewelryDesign {
    grid-area: jewelryDesign;
  }
  .jewelryGroup__jewelry--diff {
    grid-area: diff;
  }
  .jewelryGroup__jewelry--flowerDance {
    grid-area: flowerDance;
  }
  .jewelryGroup__jewelry--paperInk {
    grid-area: paperInk;
  }
  .jewelryGroup__item {
    position: relative;
    .item__cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: all 0.38s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.34);
        .cover__imageName {
          opacity: 1;
        }
      }
      .cover__imageName {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
    }
  }
  margin: 32px auto auto auto;
  display: grid;
  width: 100%;
  grid-template-areas:
    "birdSong birdSong"
    "snake  jewelryDesign"
    "diff  flowerDance"
    "paperInk  paperInk";
  grid-column-gap: 8px;
  grid-row-gap: 8px;
}
.home__footer {
  display: flex;
  flex-direction: column;
  height: 120px;
  font-size: 12px;
  margin-top: 32px;
  color: rgba(131, 131, 131, 0.85);
}
@media screen and (min-width: 768px) {
  .exhibition__glide {
    .glide__slide {
      .slide__content {
        min-height: 33vw;
      }
    }
  }
  .item__image {
    max-width: 640px;
  }
  .home__aboutGroup {
    display: flex;
    text-align: left;
    justify-content: center;
    .home__portrait {
      width: 345px;
      height: 235px;
    }
    .aboutGroup__textArea {
      margin-left: 20px;
      .textArea__skill {
        font-size: 16px;
        text-align: left;
        .skill__points {
          text-align: center;
          justify-content: flex-start;
          .skill__point {
            font-size: 12px;
            margin: 0 16px 0 0;
          }
        }
      }
    }
  }
  .home__header {
    font-size: 21px;
  }
  .home__basicInfo {
    font-size: 16px;
    text-align: left;
  }

  .about__education {
    font-size: 16px;
  }
  .home__intro {
    max-width: 640px;
    font-size: 16px;
  }
  .home__jewelryGroup {
    max-width: 640px;
  }
  .home__footer {
    font-size: 16px;
  }
}

@media screen and (min-width: 1210px) {
  .home__imageGroup {
    .imageGroup__item {
      margin: unset;
    }
  }
  .home__aboutGroup {
    display: flex;
    text-align: left;
    justify-content: center;
    width: 783px;
    margin: auto;
    .home__portrait {
      width: 345px;
      height: 235px;
    }
    .aboutGroup__textArea {
      margin-left: 20px;
      position: relative;
      width: 500px;
      .textArea__skill {
        font-size: 16px;
        text-align: left;
        // position: absolute;
        // top: 0;
        // right: 0;
        .skill__points {
          text-align: center;
          justify-content: flex-start;
          .skill__point {
            font-size: 12px;
            margin: 0 16px 0 0;
          }
        }
      }
    }
  }
  .home__header {
    font-size: 21px;
  }
  .home__basicInfo {
    font-size: 16px;
    text-align: left;
  }

  .about__education {
    font-size: 16px;
  }
  .home__intro {
    max-width: 783px;
    font-size: 16px;
  }
  .home__jewelryGroup {
    max-width: 640px;
  }
  .home__footer {
    font-size: 16px;
  }
  .home__imageGroup {
    display: grid;
    grid-column-gap: 15px;
    margin: 75px auto auto auto;
    max-width: 783px;
    .item__image {
      display: block;
    }
  }
  .home__imageGroup--1 {
    grid-template-columns: auto auto auto;
  }
  .home__imageGroup--2 {
    grid-template-columns: 9fr 9fr 5fr;
  }
  .home__jewelryGroup {
    grid-template-areas:
      "birdSong flowerDance snake"
      "paperInk diff jewelryDesign";
    max-width: 783px;
    .jewelryGroup__item {
      position: relative;
      .item__cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: all 0.38s;
        &:hover {
          background-color: rgba(0, 0, 0, 0.34);
          .cover__imageName {
            opacity: 1;
          }
        }
        .cover__imageName {
          color: white;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
        }
      }
    }
  }
}
</style>
