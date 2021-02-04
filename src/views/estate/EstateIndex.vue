<template>
  <div class="estate">
    <div class="banner">
      <div class="w1200px btn">
        <router-link tag="button" to="/"> <img src="../../assets/image/estate-b-icon1.png" alt="新加坡商业地产"/> 新加坡商业地产</router-link>
        <router-link tag="button" to="/"> <img src="../../assets/image/estate-b-icon2.png" alt="分层地契商业办公大楼"/> 分层地契商业办公大楼</router-link>
        <router-link tag="button" to="/"> <img src="../../assets/image/estate-b-icon3.png" alt="保留性店屋"/> 保留性店屋</router-link>
      </div>
    </div>

    <Introduction v-for="(item, k) in introductionData" :key="k" :introduction="item" />

    <div class="advantage w1200px mt80">
      <h3>投资商业地产的优势</h3>
      <ul class="clearfix">
        <li>
          <img src="../../assets/image/estate-advantage-icon1.png" alt="">
          <p>无购买身份限制 <br /> 外国人可以买 <br /> 无额外印花税</p>
        </li>
        <li>
          <img src="../../assets/image/estate-advantage-icon2.png" alt="">
          <p>随时自由买卖 <br /> 不受私宅卖方印花税条例限制</p>
        </li>
        <li>
          <img src="../../assets/image/estate-advantage-icon3.png" alt="">
          <p>银行给予最高 <br /> 商业贷款可高达80%(附带条件)</p>
        </li>
        <li>
          <img src="../../assets/image/estate-advantage-icon4.png" alt="">
          <p>地理位置极其优越 <br /> 位于寸土寸金的金融中心，保值增值性极高</p>
        </li>
        <li>
          <img src="../../assets/image/estate-advantage-icon5.png" alt="">
          <p>商业的款利率低，租金回报率高，可以以租养贷，没有房贷压力，这类地产租金回报高</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Introduction from './base/Introduction'
export default {
  components: {
    Introduction
  },
  data () {
    return {
      introductionData: [
        {
          title: '新加坡商业地产介绍',
          image: require('../../assets/image/introduction-banner1.png'),
          des: '新加坡大型的甲A级办公楼主要为财团或者基金公司控制，一般不对外出售，市场上在中央商务区(CBD)有分层地契办公楼出售，地理位置在市区的办公楼一般都有比较稳定的租客，该类产业投资金额一般为总额$150万新币起，中长期投资潜力是非常良好的。'
        },
        {
          title: '新加坡商业地产',
          image: require('../../assets/image/introduction-banner2.png'),
          des: '店屋，意即楼下为店，楼上为屋，一般由两层到三层组成，属于新加坡历史悠久并独具特色的房子。主要兴建于1840年到1960年之间，此类店屋为政府保留建筑，不可拆除重建，此类店屋以前一楼用来开店，楼上用来居住，随着经济的发展，现在的楼上一般用于办公室用途啦，而一楼继续保留作为商业用途，比方说开餐厅，酒吧等服务行业。不再作为住宅居住，店屋因为作为历史遗留产物，因其“稀缺，独特和尊贵”性质，而受到众多东南亚富豪和欧美财团的青睐。'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 220px;
  padding-top: 60px;
  background: url('../../assets/image/estate-banner.png') no-repeat top center;
  background-size: auto 100%;
  button {
    width: 360px;
    height: 100px;
    margin-right: 60px;
    font-size: 16px;
    color: #fff;
    border: 1px solid #E8E7E7;
    border-radius: 5px;
    background: no-repeat;
    transition: .3s;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background: #24A10F;
      border-color: #24A10F;
      color: #fff;
      img {
        transform: translateY(-5px) scale(1.1);
      }
    }
    img {
      display: inline-block;
      width: 70px;
      transition: .3s;
    }
  }
}
.advantage {
  text-align: center;
  h3 {
    font-size: 24px;
    color: #24A10F;
  }
  ul {
    padding-top: 50px;
    li {
      float: left;
      width: 224px;
      height: 307px;
      margin-right: 20px;
      padding: 0 30px;
      border: 1px solid #D6D6D6;
      border-radius: 10px;
      &:last-child {
        margin-right: 0;
      }
      p {
        line-height: 24px;
      }
      img {
        width: 120px;
        margin: 40px auto;
      }
    }
  }
}
</style>