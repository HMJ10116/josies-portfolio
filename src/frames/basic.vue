<template>
  <div class="basic">
    <div class="basic__header">
      <h1 class="header__name">
        JOSIE HO
        <hr class="name__decoration" />
      </h1>
      <h1 class="header__portfolio">PORTFOLIO</h1>
    </div>
    <navbar></navbar>
    <div class="basic__body">
      <router-view />
    </div>
  </div>
</template>
<script>
import navbar from '@/components/navbar.vue'
export default {
  components: {
    navbar
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
.basic__body {
  padding-bottom: 50px;
}
</style>

