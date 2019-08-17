<template>
  <div class="navDropdown">
    <slot></slot>
    <div v-if="isOpen" class="navDropdown__layer">
      <ul class="navDropdown__layer__list" ref="dropdown__layer">
        <template v-for="(route,index) in routes">
          <li class="list__item" :key="index">
            <router-link class="item__link" :to="{name:route.name}">{{route.text}}</router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isOpen: false
  }),
  props: {
    routes: {
      type: Array,
      required: true
    }
  },
  methods: {
    detectClickOutside (event) {
      const dropdwonLayer = this.$refs['dropdown__layer']
      const isClickInside = dropdwonLayer.contains(event.target);
      if (!isClickInside) {
        this.isOpen = false;
      }
    },
  }
}
</script>
<style scoped lang="scss">
.navDropdown {
  position: relative;
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