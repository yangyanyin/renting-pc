<template>
  <div class="details-side">
    <h3>{{ recommendType.title }}</h3>
    <div class="recommend">
      <div class="item" v-for="(item, k) in recommendList" :key="k">
        <router-link :to="recommendType.link + item._id"  class="a-img">
          <img :src="item.image" :alt="item.title" />
        </router-link>
        <router-link to="/" tag="strong">{{ item.title }}</router-link>
        <p>2-5室 / 96-116㎡</p>
        <span>{{ item.price }} <em>{{ recommendType.unit }}</em></span>
      </div>
    </div>

    <Consultant />

    <h3>给TA留言<i>提交咨询请求，30分钟内回复</i></h3>
    <div class="message">
      <textarea class="inp text" placeholder="我对这个物业感兴趣，希望得到更多信息" v-model="fromInfo.message"></textarea>
      <input class="inp" type="text" placeholder="您的称呼（必填）" v-model="fromInfo.name">
      <i v-if="fromErr.name">请输入您的称呼</i>
      <input class="inp" type="text" placeholder="您的联系电话（必填）" v-model="fromInfo.tel">
      <i v-if="fromErr.tel">请输入您的联系电话</i>
      <input class="inp" type="text" placeholder="您的邮箱地址（必填）" v-model="fromInfo.email">
      <i v-if="fromErr.email">请输入您的邮箱地址</i>
      <p><span :class="{check: fromInfo.protocol}" @click="protocolClick"></span> 已阅读并同意<router-link to="/">《新加坡看公寓网用户协议》</router-link></p>
      <i class="protocol-err" v-if="fromErr.protocol">请勾选《新加坡看公寓网用户协议》</i>
      <button @click="submitInfo">立即咨询</button>
    </div>
  </div>
</template>
<script>
import Consultant from '../base/Consultant'
export default {
  components: {
    Consultant
  },
  data () {
    return {
      recommendList: [],
      fromInfo: {
        message: '',
        name: '',
        tel: '',
        email: '',
        protocol: ''
      },
      fromErr: {
        name: false,
        tel: false,
        email: false,
        protocol: false
      }
    }
  },
  computed: {
    recommendType () {
      const data =  {
        'second-hand': {
          title: '二手房推荐',
          type: 'second_hand_house',
          link: '/c/second-hand/',
          unit: '万'
        },
        'new-house': {
          title: '新楼盘推荐',
          type: 'new_house',
          link:'/c/new-house/',
          unit: '万起'
        },
        'renting': {
          title: '租房推荐',
          type: 'renting',
          link:'/c/renting/'
        }
      }

      return data[this.$route.params.category] || {
        title: '房产推荐',
        type: 'new_house',
        link:'/c/new-house/',
        unit: '万起'
      }
    }
  },
  methods: {
    protocolClick () {
      this.fromInfo.protocol = !this.fromInfo.protocol
    },
    submitInfo () {
      for (const info in this.fromErr) {
        if (this.fromInfo[info] === '') {
          this.fromErr[info] = true
          return false
        } else {
          this.fromErr[info] = false
        }
      }
      console.log(this.fromInfo, 'fromInfo')
    }
  },
  mounted () {
    const params = {
      type: this.recommendType.type
    }
    this.$httpApi.categoryRecommendApi(params).then(res => {
      if (res.code === 200) {
        this.recommendList = res.data.recommend
      }
    })
  }
}
</script>
<style lang="less" scoped>
.details-side {
  h3 {
    margin-top: 40px;
    font-size: 20px;
    padding-bottom: 12px;
    i {
      display: block;
      padding-top: 5px;
      font-size: 12px;
      color: #7C7C7C;
    }
  }

  .recommend {
    padding: 13px;
    border: 1px solid #C9C9C9;
    .item {
      position: relative;
      height: 100px;
      margin-top: 22px;
      padding-left: 196px;
      &:hover {
        .a-img img {
          transform: scale(1.2);
        }
      }
      &:first-child {
        margin-top: 0;
      }
      .a-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 178px;
        height: 100px;
        overflow: hidden;
        img {
          transition: .3s;
        }
      }
      strong {
        font-weight: normal;
        line-height: 22px;
        cursor: pointer;
        transition: .3s;
        &:hover {
          color: #24A10F;
        }
      }
      p {
        padding: 7px 0;
        font-size: 12px;
        color: #7C7C7C;
      }
      span {
        font-size: 20px;
        color: #BF3F3F;
        em {
          font-size: 14px;
        }
      }
    }
  }

  .message {
    .inp {
      display: block;
      width: 100%;
      height: 50px;
      margin-bottom: 15px;
      padding: 0 15px;
      border: 1px solid #C9C9C9;
      border-radius: 5px;
      &.text {
        height: 100px;
        padding: 13px 15px;
      }
    }
    i {
      display: block;
      margin: -10px 15px 10px;
      font-size: 12px;
      color: #BF3F3F;
      &.protocol-err {
        margin: 5px 25px 0;
      }
    }
    p {
      padding-top: 5px;
      font-size: 12px;
      line-height: 16px;
      color: #1C1C1C;
      span {
        float: left;
        width: 16px;
        height: 16px;
        margin-right: 10px;
        border: 1px solid #1C1C1C;
        border-radius: 5px;
        &.check {
          position: relative;
          border-color: #24A10F;
          background: #24A10F;
          &:after {
            content: '';
            position: absolute;
            left: 3px;
            top: 3px;
            width: 7px;
            height: 4px;
            border-left: 1px solid #ffffff;
            border-bottom: 1px solid #ffffff;
            transform: rotate(-45deg);
          }
        }
      }
      a {
        color: #24A10F;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    button {
      display: block;
      width: 100%;
      margin-top: 30px;
      line-height: 50px;
      text-align: center;
      background: #24A10F;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>