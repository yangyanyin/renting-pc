<template>
  <div class="success">
    <div class="content">
      <div class="close" @click="closeSuccess"></div>
      <div class="t">
        <h3>提交成功</h3>
        <p>请耐心等待，我们稍后将会有工作人员与您取得联系！</p>
      </div>
      <div class="c">
        <p>您也可以拨打我们的服务热线，直接与我们取得联系</p>
        <span>客服热线 <strong>+65 8813 9139</strong> </span>
        <button @click="closeSuccess">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeSuccess () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped lang="less">
.success {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    margin-left: -300px;
    background: #fff;
    border-radius: 5px;
    transform: translateY(-50%);
    text-align: center;
    overflow: hidden;
    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      &:hover {
        &::after,&::before {
          opacity: 1;
        }
      }
      &:after {
        content: '';
        position: absolute;
        left: 14px;
        top: 2px;
        width: 3px;
        height: 26px;
        opacity: .8;
        background: #fff;
        transition: .3s;
        transform: rotate(-45deg);
      }
      &:before {
        content: '';
        position: absolute;
        left: 14px;
        top: 2px;
        width: 3px;
        height: 26px;
        background: #fff;
        opacity: .8;
        transition: .3s;
        transform: rotate(45deg);
      }
    }
    .t {
      padding: 60px 0;
      background: #24A10F;
      color: #fff;
      h3 {
        display: inline-block;
        padding-bottom: 15px;
        font-size: 32px;
      }
      p {
        font-size: 16px;
      }
    }
    .c {
      padding-bottom: 40px;
      p {
        padding: 40px 0 20px;
        font-size: 18px;
        opacity: .8;
      }
      span {
        font-size: 18px;
        strong {
          position: relative;
          top: 2px;
          font-size: 22px;
          color: #24A10F;
        }
      }
      button {
        display: block;
        width: 200px;
        height: 50px;
        margin: 50px auto 0;
        line-height: 50px;
        color: #fff;
        background: #24A10F;
        border-radius: 5px;
        font-size: 16px;
        transition: .3s;
        cursor: pointer;
        &:hover {
          background: #168603;
        }
      }
    }
  }
}
</style>