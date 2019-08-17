<template>
  <div>
    <navLightBox v-if="isSubMenuOpen" :isOpen.sync="isSubMenuOpen" :routes="currentSubMenu"></navLightBox>
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
            </li>
            <li v-else class="nav-item" :key="index">
              <a class="nav-link" @click="routeByName(route.name)">{{route.text}}</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <nav
      v-if="isShowFixedMenu"
      id="navbar"
      class="navbar navbar-expand-md navbar-light navbar--fixed"
    >
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
            </li>
            <li v-else class="nav-item" :key="index">
              <a class="nav-link" @click="routeByName(route.name)">{{route.text}}</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
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
    ],
    isSubMenuOpen: false,
    currentSubMenu: [],
    // fixed menu
    isShowFixedMenu: false,
  }),
  mounted () {
    document.addEventListener("click", this.detectClickOutside);
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener("click", this.detectClickOutside)
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    openSubMenu (route) {
      this.currentSubMenu = route.children;
      this.isSubMenuOpen = true;
      this.closeMenu();
    },
    detectClickOutside (event) {
      const navbar = document.querySelector("#navbar");
      const isClickInside = navbar.contains(event.target);
      if (!isClickInside) {
        this.closeMenu();
      }
    },
    routeByName (routeName) {
      this.$router.push({
        name: routeName
      })
      this.closeMenu();
    },
    handleScroll () {
      this.closeMenu()
      if (window.scrollY >= 95) {
        this.isShowFixedMenu = true
      } else {
        this.isShowFixedMenu = false
      }
    },
    closeMenu () {
      $(".navbar-collapse").collapse("hide");
    }
  }
}
</script>
<style scoped lang="scss">
.navbar {
  background-color: #f6f6f6;
  margin-top: 4px;
  .nav-item {
    cursor: pointer;
    min-width: 15%;
  }
}
.navbar--fixed {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  margin: 0;
  z-index: 20;
}
@media screen and (min-width: 768px) {
  .navbar-nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
}
</style>