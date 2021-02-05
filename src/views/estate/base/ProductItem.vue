<template>
  <div class="item left">
    <router-link to="/" class="a-img">
      <img src="https://cms.aicassets.com/images/default/6013780af0d6d.jpeg" alt="商业地产" />
    </router-link>
    <router-link to="/" tag="strong">Asia Square | 亚洲广场</router-link>
    <p>12 Marina View Singapore 018961</p>
  </div>
</template>
<style lang="less" scoped>
.item {
  width: 386px;
  margin: 30px 20px 0 0;
  text-align: center;
  &:nth-child(3n+1) {
    margin-right: 0;
  }
  .a-img {
    display: block;
    border-radius: 5px;
    overflow: hidden;
    img {
      transition: .3s;
    }
  }
  strong {
    display: block;
    font-size: 20px;
    padding: 20px 0 10px;
    transition: .3s;
    cursor: pointer;
    &:hover {
      color: #24A10F;
    }
  }
  p {
    font-size: 14px;
    color: #7C7C7C;
  }
  &:hover {
    .a-img img {
      transform: scale(1.2);
    }
  }
}
</style>