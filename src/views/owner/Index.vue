<template>
  <div class="owner">
    <BreadcrumbList :breadcrumb="breadcrumb" />
    <div class="owner-banner w1200px">
      <img src="../../assets/image/owner-banner.jpg" alt="我是业主" />
    </div>
    <div class="w1200px content clearfix">
      <div class="left">
        <div class="tab">
          <button @click="changeType('委托出租')" :class="{active: tabType === '委托出租'}">委托出租</button>
          <button @click="changeType('委托卖房')" :class="{active: tabType === '委托卖房'}">委托卖房</button>
        </div>
        <FormSubmit :tabType="tabType" />
      </div>
      <div class="right">
        <Consultant />
      </div>
    </div>
    <Process></Process>

  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
import Consultant from '../../components/base/Consultant'
import FormSubmit from './base/FormSubmit'
import Process from './base/Process'
export default {
  components: {
    BreadcrumbList,
    Consultant,
    FormSubmit,
    Process
  },
  data () {
    return {
      tabType: '委托出租',
      breadcrumb: [
        {
          name: '我是业主',
          url: '/owner'
        }
      ]
    }
  },
  methods: {
    changeType (type) {
      this.tabType = type
    }
  }
}
</script>
<style scoped lang="less">
.owner {
  .owner-banner {
    padding-top: 20px;
  }
  .content {
    .left {
      width: 710px;
      margin-top: 40px;
    }
    .right {
      width: 444px;
    }
    .tab {
      button {
        display: inline-block;
        position: relative;
        margin-right: 50px;
        padding: 0 0 7px 30px;
        font-size: 20px;
        background: none;
        border-bottom: 3px solid #fff;
        cursor: pointer;
        &.active {
          border-color: #24A10F;
          color: #24A10F;
          &:after {
            background: #24A10F;
          }
        }
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 5px;
          width: 18px;
          height: 18px;
          background: #C9C9C9;
          border-radius: 50%;
        }
        &:before {
          content: '';
          position: absolute;
          z-index: 1;
          left: 4px;
          top: 10px;
          width: 9px;
          height: 4px;
          border-bottom: 1px solid #fff;
          border-left: 1px solid #fff;
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>