<template>
  <div class="details">
    <BreadcrumbList />
    <div class="content clearfix w1200px">
      <div class="left">
        <div class="title">
          <h3>重磅！美国公布H-1B签证新规，取消抽签制度将优先考虑薪资较高的申请者</h3>
          <p>发布时间：2020-11-23 11:17:46 阅读次数：1887次</p>
        </div>
        <div class="new-html" v-html="newHtml"></div>
        <div class="context mt80">
          <p>上一篇：<router-link to="/">重磅！美国公布H-1B签证新规，取消抽签制度将优先考虑薪资较高的申请者</router-link></p>
          <p>下一篇：<router-link to="/">重磅！美国公布H-1B签证新规，取消抽签制度将优先考虑薪资较高的申请者</router-link></p>
        </div>
        <div class="related">
          <h2>相关推荐</h2>
          <NewsItem v-for="(i, k) in 10" :key="k" />
        </div>

      </div>
      <div class="right">
        <HotNews />
        <DetailsRecommend />
      </div>
    </div>
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
import DetailsRecommend from '../../components/base/DetailsRecommend'
import HotNews from './base/HotNews'
import NewsItem from './base/NewsItem'

export default {
  components: {
    BreadcrumbList,
    DetailsRecommend,
    HotNews,
    NewsItem
  },
  data () {
    return {
      newHtml: '美国当地时间1月8日，美国公民和移民服务局修正了H-1B工作签证的申请制度，新规将取消现有的抽签制度，以优先考量候选人的薪资水平和技能，而不是现行的抽签制度来选择希望在美国工作的候选人。<br /><br />H-1B工作签证是美国最主要的工作签证类别，允许外籍专业的技术人员受雇在美国境内工作。新规将在2021年3月9日正式生效。<br /><img src="https://cms.aicassets.com/images/default/60125a51c7bd8.png" alt="" /><br /><br />新政的主要目的就是要吸引真正优秀的人才，来填补美国国内劳动力市场所不能弥补的空白。<br />按照新规，美国政府将以入职的年限和工作经验为标准，划分出4档薪资水平用以分配H-1B签证。在每年85000份的签证配额不变的情况下，优先考虑向各档中薪资较高的申请者发放签证。<br /><p>	所有在线登记的申请者的信息将按照 OES (Occupational Employment Statistics)薪酬调查数据进行排序，然后按Level4、Level3、Level2和Level1的顺序向下依次分配签证。官方给出的信息，Level确定条件会涉及到工资、工作经验、学历等综合方面，对于H-1B申请者在多个工作地点工作的情况，移民局将选择该申请者达到或超过的较低工资水平来分配准证名额。</p><p>	<br /></p><img src="https://cms.aicassets.com/images/default/60125a6c020be.png" alt="" /><br /><br />新加坡侨水资本认为，由于美国每年的H-1B申请数量均超限额，此项改革将有效地鼓励H1B雇主向外国雇员提供更高的工资，或申请要求更高技能和更专业的职位，从而起到遏制雇主滥用H1B职位来雇用低工资、低技能的外国雇员的作用，最终达到保护美国人的就业机会。<br /><div>	<br /></div>'

    }
  }
}
</script>
<style lang="less" scoped>
.details {
  .content {
    margin-top: 30px;
  }
  .left {
    width: 710px;
    .title {
      padding: 20px 0;
      border-bottom: 1px solid #f7f7f7;
      h3 {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 15px;
      }
      p {
        font-size: 12px;
        color: #7C7C7C;
      }
    }
    .new-html {
      padding: 20px 0;
      img {
        max-width: 100%;
      }
    }
    .context {
      height: 80px;
      padding: 13px 20px;
      border-left: 3px solid #35A590;
      background: #F5F5F5;
      p {
        padding: 5px 0;
        color: #35A590;
      }
    }
    .related {
      margin-top: 50px;
      h2 {
        border-top: 3px solid #57A291;
        line-height: 46px;
        font-size: 20px;
        padding-left: 20px;
        background: #F5F5F5;
      }
    }
  }
  .right {
    width: 450px;
  }
}
</style>