<template>
  <div class="navDropdown">
    <slot></slot>
    <div class="navDropdown__layer">
      <ul class="navDropdown__layer__list">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    router: {
      type: Object,
      required: true
    }
  }
}
</script>