<template>
  <div class="advisory-pop">
    <div class="content">
      <h3>咨询方向</h3>
      <div class="close" @click="closePopup"></div>
      <div class="type">
        <span v-for="(name, k) in typeList" :key="k" @click="selectType(name)" :class="{active: name === fromInfo.advisoryType}">{{ name }}</span>
      </div>
      <i v-if="fromError.advisoryType">请选择咨询方向。</i>
      <p>留下您的联系方式，我们会及时对您的问题进行一对一的解答！</p>
      <input type="text" v-model="fromInfo.advisoryName" placeholder="您的称呼（必填）" />
      <i v-if="fromError.advisoryName">请输入您的称呼。</i>

      <input type="text" v-model="fromInfo.advisoryContact" placeholder="您的联系方式（必填）" />
      <i v-if="fromError.advisoryContact">请输入您的联系方式。</i>

      <input type="text" v-model="fromInfo.advisoryEmail" placeholder="您的邮箱地址（必填）" />
      <i v-if="fromError.advisoryEmail">请输入您的邮箱地址。</i>
      <button @click="submitForm">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      typeList: [
        '购买新楼盘',
        '二手公寓',
        '出售房源',
        '租房',
        '商业地产买卖',
        '银行借贷',
        '其他'
      ],
      fromInfo: {
        advisoryType: '购买新楼盘',
        advisoryName: '',
        advisoryContact: '',
        advisoryEmail: ''
      },
      fromError: {
        advisoryType: '',
        advisoryName: '',
        advisoryContact: '',
        advisoryEmail: ''
      }
    }
  },
  methods: {
    closePopup () {
      this.$emit('closePopuo')
    },
    selectType (type) {
      this.fromInfo.advisoryType = type
    },
    submitForm () {
      for (const info in this.fromInfo) {
        if (this.fromInfo[info] === '') {
          this.fromError[info] = true
          return false
        } else {
          this.fromError[info] = false
        }
      }
      console.log(this.fromInfo, 'fromInfo')
    }
  }
}
</script>
<style scoped lang="less">
.advisory-pop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 640px;
    padding: 50px 90px 60px;
    margin-left: -320px;
    background: #fff;
    border-radius: 5px;
    transform: translateY(-50%);
    h3 {
      position: relative;
      padding: 0 0 15px 18px;
      font-size: 20px;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 4px;
        width: 4px;
        height: 20px;
        background: #24A10F;
      }
    }
    span {
      position: relative;
      display: inline-block;
      width: 25%;
      margin-top: 12px;
      padding-left: 23px;
      font-size: 12px;
      color: #1C1C1C;
      cursor: pointer;
      &:hover {
        color: #24A10F;
      }
      &.active {
        color: #24A10F;
        &:after {
          border-color: #24A10F;
          background: #24A10F;
        }
        &:before {
          content: '';
          position: absolute;
          z-index: 1;
          left: 3px;
          top: 5px;
          width: 7px;
          height: 3px;
          border-left: 1px solid #ffffff;
          border-bottom: 1px solid #ffffff;
          transform: rotate(-45deg);
        }
      }
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 1px;
        width: 12px;
        height: 12px;
        border: 1px solid #1C1C1C;
        border-radius: 5px;
      }
    }
  }
  p {
    margin: 25px 0;
    color: #24A10F;
  }
  i {
    position: relative;
    top: -10px;
    display: block;
    margin: 10px 0 10px 15px;
    color: #BF3F3F;
    font-size: 12px;
  }
  input {
    display: block;
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    padding: 0 15px;
    line-height: 48px;
    border: 1px solid #C9C9C9;
    border-radius: 5px;
  }
  button {
    display: block;
    width: 100%;
    height: 60px;
    margin-top: 5px;
    font-size: 16px;
    line-height: 60px;
    color: #fff;
    background: #24A10F;
    border-radius: 5px;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
      &::after,&::before {
        background: #106f00;
      }
    }
    &:after {
      content: '';
      position: absolute;
      left: 14px;
      top: 2px;
      width: 3px;
      height: 26px;
      background: #24A10F;
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
      background: #24A10F;
      transition: .3s;
      transform: rotate(45deg);
    }
  }
}
</style>