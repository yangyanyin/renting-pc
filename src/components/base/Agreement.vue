<template>
  <div class="agreement">
    <div class="content popup-animat">
      <span class="close" @click="closeSuccess"></span>
      <h1>新加坡看公寓网用户协议</h1> 
      <div class="sc">
        <h2>任何使用新加坡看公寓网服务的用户均应仔细阅读本协议：</h2>
        <h3>1、使用规则</h3> 
        <p>用户在使用新加坡看公寓网网络服务过程中，必须遵循以下原则：</p> 
        <p>(a) 遵守所有的法律和法规；</p> 
        <p>(b) 不得为任何非法目的而使用网络服务系统；</p> 
        <p>(c) 遵守所有与网络服务有关的网络协议、规定和程序；</p> 
        <p>(d) 不得利用新加坡看公寓网网络服务系统进行任何可能对互联网的正常运转造成不利影响的行为；</p> 
        <p>(e) 不得利用新加坡看公寓网网络服务系统传输任何骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；</p> 
        <p>(f) 不得利用新加坡看公寓网网络服务系统进行任何不利于新加坡看公寓网的行为；</p> 
        <p>(g) 如发现任何非法使用用户帐号或帐号出现安全漏洞的情况，应立即通告新加坡看公寓网。</p> 
        <p>(h)用户必须保证其发布信息的真实性，并承担相关责任，该等法律责任与新加坡看公寓网无关。用户应承担任何有可能产生的民事侵权或刑事法律责任，本网站之法律声明的修改权、更新权及最终解释权均属于新加坡看公寓网所有。</p> 

        <h3>2、内容所有权</h3>
        <p>(a)新加坡看公寓网提供的网络服务内容可能包括：文字、图片、图表等。所有这些内容受版权、商标和其它财产所有权法律的保护。</p> 
        <p>(b) 用户只有在获得新加坡看公寓网或其他相关权利人的授权之后才能使用这些内容，而不能擅自复制、再造这些内容、或创造与内容有关的派生产品。</p> 

        <h3>3、隐私保护</h3>
        <p>3.1 保护用户隐私是新加坡看公寓网的一项基本政策，新加坡看公寓网保证不对外公开或向第三方提供用户注册资料及用户在使用网络服务时存储在新加坡看公寓网的非公开内容，但下列情况除外：</p> 
        <p>(a) 事先获得用户的明确授权；</p> 
        <p>(b) 根据有关的法律法规要求；</p> 
        <p>(c) 按照相关政府主管部门的要求；</p> 
        <p>(d) 为维护社会公众的利益；</p> 
        <p>(e) 为维护新加坡看公寓网的合法权益</p> 
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
.agreement {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 700px;
    height: 84%;
    padding: 50px 0 60px 50px;
    margin-left: -350px;
    background: #fff;
    border-radius: 5px;
    transform: translateY(-20%);
    overflow: hidden;
    .sc {
      height: 90%;
      padding-right: 50px;
      overflow: auto;
    }
    h1 {
      position: relative;
      margin-bottom: 30px;
      padding-left: 20px;
      font-size: 20px;
      font-weight: bold;
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
    h2 {
      font-size: 16px;
      font-weight: bold;
    }
    h3 {
      padding: 30px 0 10px;
      font-size: 14px;
      font-weight: bold;
    }
    p {
      padding: 6px 0;
      line-height: 24px;
      opacity: .8;
    }
  }
}
</style>