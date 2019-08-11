<template>
  <div class="home">
    <img class="home__banner" src="@/assets/music/banner.png" />
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
        <!-- <div class="home___about"> -->
        <div class="about__education">
          <span class="education__title">學歷背景</span>
          <span class="eduction__college">輔大應用美術系金工產品組</span>
          <span class="education__university">QUEEN MARY UNIVERSITY OF LONDON</span>
          <span class="eudcation__major">MSC MARKETING</span>
        </div>
        <!-- </div> -->
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
    <div class="home__bannerGroup home__bannerGroup--1">
      <img class="home__banner home__banner--mt16" src="@/assets/music/fundora1.jpg" />
      <img class="home__banner home__banner--mt16" src="@/assets/yes123/yes123 1.png" />
      <img class="home__banner home__banner--mt16" src="@/assets/clinic/banner.png" />
    </div>
    <div class="home___vl"></div>
    <h1 class="home__header">03視覺設計</h1>
    <div class="home__bannerGroup home__bannerGroup--2">
      <img class="home__banner home__banner--mt16" src="@/assets/album/1.png" />
      <img class="home__banner home__banner--mt16" src="@/assets/business/1.png" />
      <img class="home__banner home__banner--chair home__banner--mt16" src="@/assets/chair/1.png" />
    </div>
    <div class="home___vl"></div>
    <h1 class="home__header">04金工珠寶設計</h1>
    <div class="home__jewelryGroup">
      <img
        class="jewelryGroup__jewelry jewelryGroup__jewelry--birdSong"
        src="@/assets/jewelry/birdSong.png"
      />
      <img
        class="jewelryGroup__jewelry jewelryGroup__jewelry--snake"
        src="@/assets/jewelry/snake.png"
      />
      <img
        class="jewelryGroup__jewelry jewelryGroup__jewelry--jewelryDesign"
        src="@/assets/jewelry/jewelryDesign.png"
      />
      <img
        class="jewelryGroup__jewelry jewelryGroup__jewelry--diff"
        src="@/assets/jewelry/diff.png"
      />
      <img
        class="jewelryGroup__jewelry jewelryGroup__jewelry--flowerDance"
        src="@/assets/jewelry/flowerDance.png"
      />
      <img
        class="jewelryGroup__jewelry jewelryGroup__jewelry--paperInk"
        src="@/assets/jewelry/paperInk1.png"
      />
    </div>
    <div class="home___vl"></div>
    <h1 class="home__header">05聯絡方式</h1>
    <div class="home__footer">
      <span>TEL: 0939968645</span>
      <span>Email: hmc10116@gamil.com</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  padding: 24px 24px 24px 24px;
  color: rgba(131, 131, 131, 0.85);
  position: relative;
}
.home__banner {
  width: 100%;
}
.home__banner--mt16 {
  margin-top: 16px;
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
  .jewelryGroup__jewelry {
    width: 100%;
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
  .home__banner {
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
  .home__banner {
    // max-width: 783px;
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
        position: absolute;
        top: 0;
        right: 0;
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
  .home__bannerGroup {
    display: grid;
    // grid-template-columns: 9fr 9fr 5fr;
    // justify-content: center;
    grid-column-gap: 15px;
    margin-top: 75px;
    .home__banner {
      // width: 360px;
      margin: 0 5px;
      display: block;
    }
    .home__banner--chair {
      // max-height: 247px;
      height: 100%;
    }
  }
  .home__bannerGroup--1 {
    grid-template-columns: auto auto auto;
  }
  .home__bannerGroup--2 {
    grid-template-columns: 9fr 9fr 5fr;
  }
  .home__jewelryGroup {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: unset;
    // grid-template-areas:
      // "birdSong  snake jewelryDesign"
      // "diff  flowerDance paperInk";
    // grid-column-gap: 32px;
    .jewelryGroup__jewelry{
      margin-top: 22px;
    }
    .jewelryGroup__jewelry--birdSong{
      width: 48%;
    }
    .jewelryGroup__jewelry--snake{
      width: 20%;
    }
    .jewelryGroup__jewelry--jewelryDesign{
      width: 24%;
    }
     .jewelryGroup__jewelry--diff{
      width: 23%;
    }
     .jewelryGroup__jewelry--flowerDance{
      width: 23%;
    }
     .jewelryGroup__jewelry--paperInk{
      width: 46%;
    }
  }
}
</style>
