<template>
  <div class="return-top">
    <ul>
      <li>Whats App</li>
      <li>咨询</li>
      <li>微信</li>
      <li>返回顶部</li>
    </ul>
  </div>
</template>
<style scoped lang="less">
.return-top {
  position: fixed;
  z-index: 99;
  right: 20px;
  bottom: 100px;
  width: 60px;
  height: 305px;
  background: #FFFFFF;
  border: 1px solid #C9C9C9;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  color: #7C7C7C;
  li {
    position: relative;
    padding: 20px 0;
    cursor: pointer;
    &:last-child {
      &::after {
        display: none;
      }
    }
    &:after {
      content: '';
      position: absolute;
      width: 18px;
      height: 1px;
      bottom: 0;
      left: 21px;
      background: #7C7C7C;
    }
    &:hover {
      color: #19191D;
    }
  }
}
</style>