<template>
  <div class="about">
    <div class="about__josie">
      <img class="josie__portrait" src="@/assets/about/minjing.png" />
      <span class="josie__name">何明璟(MING-JING HE)</span>
    </div>
    <p
      class="about__paragraph"
    >研究所學習行銷，曾做過商業行銷、營運等專案，曾參與商業專案，包含餐廳數位行銷、飯店營運，涵蓋市場調查、競業分析、產品研究、成功案例分析、定位目標市場。透過設計問卷、用樞紐分析來分析問卷結果及訪談分析來設計產品及服務。而行銷和UX設計都是要做使用者調查分析，將用戶體驗研究納入用戶需求和動機背後的思維過程很像在行銷數據集中找到有意義的趨勢背後的思維過程。此外，擁有行銷經驗，讓我能夠在商業和使用者體驗的設計中取得平衡。</p>
    <p
      class="about__paragraph"
    >研究所學習行銷，曾做過 商業行銷、營運等專案，曾參與商業專案，包含餐廳數位行銷、飯店營運，涵蓋市場調查、競業分析、產品研究、成功案例分析、定位目標市場，也透過設計問卷、訪談分析 來設計產品及服務。</p>
    <p
      class="about__paragraph"
    >因為覺得介面設計很有趣，設計三個APP，為了方便和工程師溝通、合作，學習程式，在學習的過程中覺得寫程式、切版覺得很有趣，也和工程師合作架設網站。未來規劃在軟體的領域將設計和商業結合，往介面設計領域發展。</p>
    <h2 class="about__listTitle">學歷</h2>
    <div class="about__list">
      <div class="list__part list__part--left">
        <div class="part__item part__item--2017">
          <p class="item__detail">2017/09 - 2018/09</p>
          <p class="item__detail">Queen Mary University of London</p>
          <p class="item__detail">Marketing MSc</p>
        </div>
        <div class="part__item part__item--2007">
          <p class="item__detail">2007/09 - 2010/06</p>
          <p class="item__detail">新莊高中 美術班</p>
        </div>
      </div>
      <img class="list__bullets" src="@/assets/about/bullets.svg" />
      <div class="list__part list__part--right">
        <div class="part__item part__item--2011">
          <p class="item__detail">2011/09 - 2014/06</p>
          <p class="item__detail">輔仁大學 應用美術系 金工產品組</p>
        </div>
      </div>
    </div>
    <h2 class="about__listTitle">專業技能</h2>
    <div class="about__skillGroup">
      <div class="skillGroup__skill">
        <img class="skill__image" src="@/assets/about/visual effect.svg" />
        <div class="skill__textGroup">
          <p>視覺傳達 設計活動網頁、社群素材、 平面文宣、海報、DM、商品包裝</p>
          <p>技術：PHOTOSHOP、ILLUSTRATOR</p>
        </div>
      </div>
      <div class="skillGroup__skill">
        <img class="skill__image" src="@/assets/about/ui.svg" />
        <div class="skill__textGroup">
          <p>
            介面
            設計ＡＰＰ及網頁介面
          </p>
          <p>技術：SKETCH、ZEPLIN、INVISION</p>
        </div>
      </div>
      <div class="skillGroup__skill">
        <img class="skill__image" src="@/assets/about/jewelry.svg" />
        <div class="skill__textGroup">
          <p>
            金工產品
            立體造型設計、珠寶設計
          </p>
          <p>技術： Rhino、 蠟雕、 琺瑯、鍛敲</p>
        </div>
      </div>
    </div>
    <h2 class="about__listTitle">工作經歷</h2>
    <div class="about__list">
      <div class="list__part list__part--left">
        <div class="part__item part__item--2015">
          <p class="item__detail">2015/03 - 2016/06</p>
          <p class="item__detail">緣創流 專案實作</p>
          <p class="item__detail">該社會企業受企業之委託，接受諮詢或為企業做診斷，經營分析，提供改善方案，專案包含餐廳數位行銷、飯店營運。</p>
          <p
            class="item__detail"
          >專案過程中做訪談、問卷調查、搜集和分析使用者經驗，找到現有產品及服務不滿意的地方，也觀察巿場並進行Experience Mapping，找出能幫助銷售且最低成本的管道。了解目標客群的習性，根據使用者的行為模式，找到行銷管道和使用者互動， 設計行銷方案</p>
        </div>
      </div>
      <img class="list__bullets" src="@/assets/about/bullets2.svg" />
      <div class="list__part list__part--right">
        <div class="part__item part__item--2019">
          <p class="item__detail">2019/01 - 2019/07</p>
          <p class="item__detail">聚英寶石學會 教學助理</p>
          <p class="item__detail">寶石學助教、平面設計 、主管交代事項</p>
        </div>
        <div class="part__item part__item--2014">
          <p class="item__detail">2014/09 - 2015/03</p>
          <p class="item__detail">台灣天然有機 網路管理</p>
          <p class="item__detail">網站管理維護，經營社群媒體，平面設計，銷售產品</p>
        </div>
      </div>
    </div>
    <div class="about__contact">
      <span>TEL: 0939968645</span>
      <span>Email: hmc10116@gamil.com</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about {
  padding: 24px 24px 24px 24px;
  color: rgba(131, 131, 131, 0.85);
}
.about__josie {
  display: flex;
  flex-direction: column;
  text-align: center;
  .josie__portrait {
    width: 170px;
    display: block;
    margin: auto;
  }
  .josie__name {
    font-size: 12px;
    margin-top: 22px;
  }
}
.about__paragraph {
  text-align: justify;
  font-size: 12px;
  margin: 24px auto auto auto;
}
.about__listTitle {
  font-size: 21px;
  color: #80cedb;
  margin-top: 54px;
}
.about__list {
  display: flex;
  position: relative;
  margin: 26px auto auto auto;
  justify-content: center;
  max-width: calc(100vw - 48px);
  .list__part {
    width: 50%;
    .part__item {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      .item__detail {
        margin: 0;
      }
    }
    .part__item--2017 {
      margin-top: 10px;
      text-align: right;
    }
    .part__item--2007 {
      margin-top: 64px;
      text-align: right;
    }
    .part__item--2011 {
      margin-top: 88px;
    }
    .part__item--2015 {
      margin-top: 140px;
    }
    .part__item--2019 {
      margin-top: 12px;
    }
    .part__item--2014 {
      margin-top: 328px;
    }
  }
  .list__part--left {
    margin-right: 13px;
    text-align: justify;
  }
  .list__part--right {
    margin-left: 13px;
    text-align: justify;
  }
}
.about__skillGroup {
  margin: auto;
  .skillGroup__skill {
    font-size: 12px;
    margin-top: 40px;
    .skill__image {
      margin-bottom: 24px;
    }
  }
}
.about__contact {
  display: flex;
  flex-direction: column;
  height: 120px;
  font-size: 12px;
  margin-top: 32px;
  color: rgba(131, 131, 131, 0.85);
}

@media screen and (min-width: 768px) {
  .about {
    padding: 24px 48px;
  }
  .about__josie {
    .josie__portrait {
      width: 360px;
    }
    .josie__name {
      font-size: 16px;
    }
  }
  .about__paragraph {
    font-size: 16px;
  }
  .about__skillGroup {
    display: flex;
    justify-content: space-around;
    .skillGroup__skill {
      max-width: 160px;
      font-size: 16px;
    }
  }
  .about__list {
    .list__part {
      .part__item {
        font-size: 16px;
      }
    }
  }
  .about__contact {
    font-size: 16px;
  }
}

@media screen and (min-width: 1210px) {
  .about__paragraph {
    width: 839px;
  }
  .about__list {
    max-width: 839px;
  }
  .about__skillGroup {
    // width: 839px;
    justify-content: space-around;
    .skillGroup__skill {
      display: flex;
      max-width: 32%;
      text-align: left;
      .skill__textGroup {
        display: flex;
        flex-direction: column;
        margin-left: 8px;
      }
    }
  }
}
</style>
