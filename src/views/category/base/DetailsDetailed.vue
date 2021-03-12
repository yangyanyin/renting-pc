<template>
  <div class="detailed">
    <h3 class="other-t">项目详情</h3>
    <ul class="clearfix">
      <li><i>楼盘名称</i> {{ projectDetails.name }}</li>
      <li><i>房产类型 </i> {{ projectDetails.type }} </li>
      <li><i>开发商 </i> {{ projectDetails.developer }} </li>
      <li><i>产权  </i> {{ projectDetails.property }} </li>
      <li><i>开盘日期 </i> {{ projectDetails.start_time }} </li>
      <li><i>预计落成日期 </i> {{ projectDetails.finish }} </li>
      <li><i>公共设施 </i>
        <div>
          <span v-for="(name, k) in projectDetails.facility" :key="k">{{ name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    projectDetails: Object
  }
}
</script>
<style lang="less" scoped>
.detailed {
  ul {
    li {
      float: left;
      width: 50%;
      margin-top: 25px;
      &:last-child {
        width: 100%;
        div {
          display: inline-block;
          width: calc(100% - 130px);
        }
        span {
          display: inline-block;
          position: relative;
          padding: 0 20px;
          margin-bottom: 10px;
          color: #6f6f6f;
          &::before {
            content: '';
            position: absolute;
            z-index: 1;
            left: 4px;
            top: 7px;
            width: 6px;
            height: 3px;
            border-bottom: 1px solid #fff;
            border-left: 1px solid #fff;
            transform: rotate(-45deg);
          }
          &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 15px;
            height: 15px;
            margin-top: -8px;
            background: #24A10F;
            border-radius: 50%;
          }
        }
      }
      i {
        float: left;
        width: 130px;
        padding-right: 40px;
        color: #6f6f6f;
      }
    }
  }
}
</style>