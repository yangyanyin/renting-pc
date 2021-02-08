<template>
  <div class="form clearfix">
    <div class="input-box">
      <span>物业所在位置</span>
      <input type="text" placeholder="请输入物业所在的位置" v-model="fromInfo.position" />
      <em v-if="fromErr.position">请输入物业所在的位置</em>
    </div>

    <div class="input-box">
      <select v-model="fromInfo.housesType">
        <option value="私人公寓">私人公寓</option>
        <option value="政府组屋（HDB)">政府组屋（HDB)</option>
        <option value="执行共管公寓">执行共管公寓</option>
        <option value="有地私宅">有地私宅</option>
        <option value="商业地产">商业地产</option>
      </select>
      <input type="text" placeholder="请输入物业地址" v-model="fromInfo.address" />
      <em v-if="fromErr.address">请输入物业地址</em>
    </div>

    <div class="clearfix">
      <div class="input-box w50 first">
        <span>大牌 block</span>
        <input type="text" placeholder="请输入大牌" v-model="fromInfo.bigName" />
        <em v-if="fromErr.bigName">请输入大牌</em>
      </div>
      <div class="input-box w50">
        <span>门牌 unit</span>
        <input type="text" placeholder="请输入门牌" v-model="fromInfo.doorplate" />
        <em v-if="fromErr.doorplate">请输入门牌</em>
      </div>
    </div>
    
    <div class="input-box">
      <span>期望售价</span>
      <input type="text" placeholder="请输入您想卖出的价格" v-model="fromInfo.sellingPrice" />
      <i>或者咨询专业经纪人，做免费估价</i>
      <em v-if="fromErr.sellingPrice">请输入您想卖出的价格</em>
    </div>
    <div class="clearfix">
      <div class="input-box w50 first">
        <span>姓名</span>
        <input type="text" placeholder="请输入您的姓名" v-model="fromInfo.name" />
        <em v-if="fromErr.name">请输入您的姓名</em>
      </div>
      <div class="input-box w50">
        <span>联系方式</span>
        <input type="text" placeholder="请输入您的联系方式" v-model="fromInfo.contact" />
        <em v-if="fromErr.contact">请输入您的联系方式</em>
      </div>
    </div>
    <p>
      点击递交之后，房源核验、确认信息无误，我们将与您联系，签订服务合同，新加坡看公寓网仅提供免费房产信息展示和网络技术服务。
    </p>
    <button @click="submitInfo">递交</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fromInfo: {
        position: '',
        address: '',
        housesType: '私人公寓',
        bigName: '',
        doorplate: '',
        sellingPrice: '',
        name: '',
        contact: '',
      },
      fromErr: {
        position: false,
        address: false,
        bigName: false,
        doorplate: false,
        sellingPrice: false,
        name: false,
        contact: false
      }
    }
  },
  methods: {
    submitInfo () {
      for (const info in this.fromInfo) {
        if (this.fromInfo[info] === '') {
          this.fromErr[info] = true
          return false
        } else {
          this.fromErr[info] = false
        }
      }
      console.log(this.fromInfo, 'fromInfo')
    }
  }
}
</script>
<style scoped lang="less">
.form {
  padding-top: 5px;
  p {
    font-size: 12px;
    color: #7C7C7C;
    padding: 30px 0;
  }
  button {
    float: right;
    width: 229px;
    height: 60px;
    margin-top: 20px;
    background: #24A10F;
    border-radius: 5px;
    transition: .3s;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #198407;
    }
  }
  .input-box {
    position: relative;
    display: block;
    width: 100%;
    margin-top: 20px;
    border-radius: 5px;
    &.w50 {
      float: left;
      width: calc(50% - 10px);
      margin-left: 20px;
      &.first {
        margin-left: 0;
      }
    }
    span, select{
      float: left;
      width: 130px;
      padding-left: 20px;
      line-height: 48px;
      border: none;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border: 1px solid #C9C9C9;
      border-right: none;
    }
    input {
      width: calc(100% - 130px);
      height: 50px;
      padding: 15px 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border: 1px solid #C9C9C9;
      border-left: none;
    }
    i {
      position: absolute;
      right: 20px;
      top: 15px;
      color: #24A10F;
      font-size: 12px;
    }
    em {
      display: block;
      margin: 7px 0 0 20px;
      color: #BF3F3F;
      font-size: 12px;
    }
  }
}
</style>