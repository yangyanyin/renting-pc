<template>
  <div class="mortgage clearfix">
    <h3 class="other-t">房贷计算</h3>
    <div class="left count clearfix">
      <div class="input-box">
        房产价格（$)
        <input class="inp" type="text" placeholder="输入价格">
      </div>
      <div class="input-box">
        贷款比例
        <select class="inp">
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
      </div>
      <div class="input-box">
        贷款总额（$)
        <input class="inp" type="text" placeholder="输入总额">
      </div>
      <div class="input-box">
        偿还年限
        <select class="inp">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <div class="input-box">
        每月月供
        <input class="inp" type="text" placeholder="输入总额">
      </div>
      <button> 开始计算</button>
    </div>
    <div class="right result">
      <h3>计算结果</h3>
      <ul>
        <li>首付合计<span>$560,000</span></li>
        <li>贷款金额<span>$200,000</span></li>
        <li>支付利息<span>$560,000</span></li>
        <li>月均还款<span>$3,000</span></li>
      </ul>
      <p>本次计算仅作为购房参考，不能作为最终的购房依据。了解更准确的方案，建议<a>咨询置业顾问</a></p>
    </div>
  </div>
</template>
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
      background: #FFFFFF;
      border: 1px solid #C9C9C9;
      border-radius: 5px;
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