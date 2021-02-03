<template>
  <div class="hot-news">
    <h2>热门资讯</h2>
    <div class="list">
      <ul>
        <li v-for="(i, k) in 10" :key="k"> 
          <router-link to="/" >
            <span> {{k + 1}} </span>
            刷新历史纪录！疫情之下加拿大12月份的房屋成交量超过1
          </router-link>
        </li>
      </ul>
      
    </div>
  </div>
</template>
<style lang="less" scoped>
.hot-news {
  h2 {
    border-top: 3px solid #57A291;
    line-height: 46px;
    font-size: 20px;
    padding-left: 20px;
    background: #F5F5F5;
  }
  .list {
    padding: 0 5px;
    li {
      padding: 15px 0 5px;
      &:last-child {
        padding-bottom: 0;
      }
      &:nth-child(1) {
        a span {
          background: #BF3F3F;
        }
      }
      &:nth-child(2) {
        a span {
          background: #F7B964;
        }
      }
      &:nth-child(3) {
        a span {
          background: #24A10F;
        }
      }
      a {
        span {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 10px;
          line-height: 16px;
          text-align: center;
          color: #fff;
          background: #C9C9C9;
          border-radius: 2px;
        }
      }
    }
  }
}

</style>