<template>
  <div class="basic">
    <div class="basic__header">
      <h1 class="header__name">
        JOSIE HO
        <hr class="name__decoration" />
      </h1>
      <h1 class="header__portfolio">PORTFOLIO</h1>
    </div>
    <nav id="navbar" class="navbar navbar-expand-md navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <template v-for="(route,index) in routes">
            <li v-if="route.children" class="nav-item" :key="index">
              <a class="nav-link" @click="openSubMenu(route)">{{route.text}}</a>
              <!-- <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>-->
            </li>
            <li v-else class="nav-item" :key="index">
              <a class="nav-link" @click="routeByName(route.name)">{{route.text}}</a>
              <!-- <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>-->
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <navLightBox v-if="isSubMenuOpen" :isOpen.sync="isSubMenuOpen" :routes="currentSubMenu"></navLightBox>
    <div class="basic__body">
      <router-view />
    </div>
    <!-- <div class="basic__footer">
      <span>TEL: 0939968645</span>
      <span>Email: hmc10116@gamil.com</span>
    </div>-->
  </div>
</template>
<script>
import $ from "jquery";
import navLightBox from '@/components/navLightBox.vue'
export default {
  components: {
    navLightBox
  },
  data: () => ({
    routes: [
      {
        text: '首頁',
        name: 'home'
      },
      {
        text: '關於我',
        name: 'about'
      },
      {
        text: '介面設計',
        children: [
          {
            text: 'FUNDORA MUSIC',
            name: 'fundora'
          },
          {
            text: 'REDESIGN YES123',
            name: 'yes123'
          },
          {
            text: 'CLINIC APP',
            name: 'clinic'
          }
        ]
      },
      {
        text: '視覺設計',
        children: [
          {
            text: '唱片設計',
            name: 'album'
          },
          {
            text: '經典再現-椅展',
            name: 'chair'
          },
          {
            text: '商業專案設計',
            name: 'business'
          }
        ]
      },
      {
        text: '金工珠寶設計',
        children: [
          {
            text: '囀',
            name: 'birdSong'
          },
          {
            text: '花舞',
            name: 'flowerDance'
          },
          {
            text: '百步蛇',
            name: 'snake'
          },
          {
            text: '異',
            name: 'diff'
          },
          {
            text: '珠寶設計繪畫',
            name: 'jewelryDesign'
          },
          {
            text: '紙-墨',
            name: 'paperInk'
          }
        ]
      },
      // {
      //   text: '聯絡方式',
      //   name: 'contact'
      // }
    ],
    isSubMenuOpen: false,
    currentSubMenu: []
  }),
  mounted() {
    document.addEventListener("click", this.detectClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.detectClickOutside);
  },
  methods: {
    openSubMenu(route) {
      this.currentSubMenu = route.children;
      this.isSubMenuOpen = true;
      this.closeMenu();
    },
    detectClickOutside(event) {
      const navbar = document.querySelector("#navbar");
      const isClickInside = navbar.contains(event.target);
      if (!isClickInside) {
        this.closeMenu();
      }
    },
    routeByName(routeName) {
      this.$router.push({
        name: routeName
      })
      this.closeMenu();
    },
    closeMenu() {
      $(".navbar-collapse").collapse("hide");
    }
  }
}
</script>

<style lang="scss" scoped>
.basic__header {
  font-size: 14px;
  margin: 21px auto auto auto;
  letter-spacing: 5px;
  color: #808080;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  text-align: left;
  width: 125px;
  .header__name {
    font-size: 14px;
    display: flex;
    white-space: nowrap;
    .name__decoration {
      width: 28px;
      border-bottom: 3px solid #62c3d3;
    }
  }
  .header__portfolio {
    font-size: 14px;
  }
}
.navbar {
  background-color: #f6f6f6;
  margin-top: 4px;
  // top: 0;
  // width: 100vw;
  // position: fixed;
  .nav-item {
    cursor: pointer;
    min-width: 15%;
  }
}
.basic__body {
  padding-bottom: 50px;
}
@media screen and (min-width: 768px) {
  .navbar-nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
}
</style>

