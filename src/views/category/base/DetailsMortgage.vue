<template>
  <div class="mortgage clearfix">
    <h3 class="other-t">房贷计算</h3>
    <div class="left count clearfix">
      <div class="input-box">
        房产价格（$)
        <input class="inp" type="text" placeholder="输入价格" v-model="roomTotalPrice" />
      </div>
      <div class="input-box">
        贷款比例
        <select class="inp" v-model="loanScale">
          <option value="25">25%</option>
          <option value="30">30%</option>
          <option value="40">40%</option>
          <option value="50">50%</option>
          <option value="70">70%</option>
        </select>
      </div>
      <div class="input-box">
        贷款总额（$)
        <input class="inp ban" type="text" v-model="countLoanPrice" disabled="disabled" />
      </div>
      <div class="input-box">
        贷款年利率
        <select class="inp" v-model="interestRate">
          <option value="2.5">2.5%</option>
          <option value="3">3%</option>
          <option value="4">4%</option>
        </select>
      </div>
      <div class="input-box">
        偿还年限
        <select class="inp" v-model="years">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <button @click="startCount">开始计算</button>
    </div>
    <div class="right result">
      <h3>计算结果</h3>
      <ul>
        <li>首付合计<span>{{ countResult.down_payment }}</span></li>
        <li>贷款金额<span>{{ countResult.loan_price }}</span></li>
        <li>支付利息<span>{{ countResult.interest }}</span></li>
        <li>月均还款<span>{{ countResult.repayment }}</span></li>
      </ul>
      <p>本次计算仅作为购房参考，不能作为最终的购房依据。了解更准确的方案，建议<a>咨询置业顾问</a></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      roomTotalPrice: '',
      loanScale: '25',
      interestRate: '2.5',
      years: 10,
      countResult: {
        down_payment: '',
        loan_price: '',
        interest: '',
        repayment: ''
      }
    }
  },
  computed: {
    countLoanPrice () {
      if (this.roomTotalPrice > 0) {
        return (this.roomTotalPrice * 1) * (this.loanScale / 100).toFixed(2)
      }
      return ''
    },
    //月供
    monthlyPayment () {
      const interestRate = this.interestRate / 100  // 利率
      const month = this.years * 12 // 月数
      return this.countLoanPrice * (interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -month))
    }
  },
  methods: {
    startCount () {
      this.countResult = {
        down_payment: `$${(this.roomTotalPrice * 1 - this.countLoanPrice).toFixed(2)}`,
        loan_price: `$${this.countLoanPrice.toFixed(2)}`,
        interest: `$${(this.monthlyPayment * this.years * 12 - this.countLoanPrice).toFixed(2)}`,
        repayment: `$${this.monthlyPayment.toFixed(2)}`
      }
    }
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.count {
  width: 350px;
  margin-top: 20px;
  .input-box {
    height: 50px;
    margin-bottom: 20px;
    line-height: 50px;
    .inp {
      float: right;
      width: 237px;
      height: 50px;
      padding: 0 15px;
      background-color: #FFFFFF;
      border: 1px solid #C9C9C9;
      border-radius: 5px;
      &.ban {
        background: #f5f5f5;
      }
    }
  }
  button {
    float: right;
    width: 237px;
    line-height: 50px;
    background: #24A10F;
    border-radius: 5px;
    color: #fff;
    &:hover {
      background: #198407;
    }
  }
  
}
.result {
  width: 335px;
  margin-top: 20px;
  padding: 20px 25px;
  background: #FFFFFF;
  border: 1px solid #C9C9C9;
  border-radius: 5px;
  h3 {
    padding-bottom: 20px;
    font-size: 14px;
    color: #6f6f6f;
    border-bottom: 1px solid #C9C9C9;
  }
  ul {
    padding: 20px 0;
    li {
      margin-bottom: 26px;
      &:last-child {
        margin: 0;
      }
      span {
        float: right;
        color: #BF3F3F;
      }
    }
  }
  p {
    font-size: 12px;
    color: #7C7C7C;
    line-height: 24px;
    a {
      color: #24A10F;
      cursor: pointer;
    }
  }

}
</style>