<template>
  <div class="navDropdown" ref="dropdown">
    <a class="nav-link" @click="openSubMenu()">{{route.text}}</a>
    <div v-if="isOpen" class="navDropdown__layer">
      <ul class="navDropdown__layer__list" ref="dropdown__layer">
        <template v-for="(route,index) in route.children">
          <li class="list__item" @click="routeByRouteName(route.name)" :key="index">
            <a class="item__link">{{route.text}}</a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    isOpen: false,
  }),
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  mounted () {
    setTimeout(() => {
      window.addEventListener('click', this.detectClickOutside)
      window.addEventListener('scroll', this.closeDropdown)
    }, 100)
  },
  destroyed () {
    window.removeEventListener('click', this.detectClickOutside)
    window.removeEventListener('scroll', this.closeDropdown)
  },
  methods: {
    closeDropdown () {
      this.isOpen = false
    },
    openSubMenu () {
      this.$emit('clickOnLink')
      this.isOpen = !this.isOpen
    },
    detectClickOutside (event) {
      const dropdwonLayer = this.$refs['dropdown']
      const isClickInside = dropdwonLayer.contains(event.target);
      if (!isClickInside) {
        this.isOpen = false;
      }
    },
    routeByRouteName (routeName) {
      console.log({
        routeName
      })
      this.$router.push({
        name: routeName
      })
      this.isOpen = false
    }
  }
}
</script>
<style scoped lang="scss">
.navDropdown {
  position: relative;
  z-index: 30;
  .navDropdown__layer {
    position: absolute;
    min-width: 100%;
    .navDropdown__layer__list {
      .list__item {
        background-color: #80cedb;
        padding: 12px;
        transition: all 0.38s;
        &:hover {
          background-color: white;
          .item__link {
            color: #80cedb;
          }
        }
        .item__link {
          color: white;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>