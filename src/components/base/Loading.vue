<template>
  <div class="loading">
    <div class="ball-pulse" :class="{'btn-box': btnLogin}">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    btnLogin: Boolean
  }
}
</script>
<style scoped lang="less">
.ball-pulse {
  padding: 200px 0;
  text-align: center;
  &.btn-box {
    padding: 0;
  }
}
.ball-pulse > div:nth-child(1) {
  -webkit-animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
          animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div:nth-child(2) {
  -webkit-animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
          animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div:nth-child(3) {
  -webkit-animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
          animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div {
  background-color: #24A10F;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  display: inline-block; 
}
.btn-box > div {
  background: #fff;
  width: 10px;
  height: 10px;
  margin: 2px 4px;
}
@-webkit-keyframes scale {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; }
  45% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 0.7; }
  80% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; } }
@keyframes scale {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; }
  45% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 0.7; }
  80% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; } }
</style>