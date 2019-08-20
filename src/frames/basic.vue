<template>
  <div class="basic">
    <div class="basic__header">
      <h1 class="header__name">
        JOSIE HO
        <img class="header__logo" src="@/assets/navigation/logo.png">
        PORTFOLIO
      </h1>
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
  width: 280px;
  .header__name {
    font-size: 18px;
    display: flex;
    white-space: nowrap;
    padding-top: 50px;
    padding-bottom: 15px;
  }
  .header__logo {
      width: 36px;
      height: 35px;
      margin-right: 7px;
      margin-top: -15px;
    }
}
.basic__body {
  padding-bottom: 50px;
}
</style>

