<template>
  <div class="photo">
    <h3 class="other-t">房源相册</h3>
    <div class="list">
      <strong>效果图</strong>
      <HousePhoto />
      <strong>样板间</strong>
      <HousePhoto />
      <strong>周边配套</strong>
      <HousePhoto />
    </div>
  </div>
</template>
<script>
import HousePhoto from './HousePhoto'
export default {
  components: {
    HousePhoto
  }
}
</script>
<style scoped lang="less">
.photo {
  strong {
    display: block;
    padding: 30px 0 10px;
    font-weight: normal;
  }
}
</style>