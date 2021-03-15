<template>
  <div class="other">
    <BreadcrumbList :breadcrumb="breadcrumb" />
    <div class="clearfix w1200px mt40">
      <div class="left menu">
        <router-link to="/about">关于我们</router-link>
        <router-link to="/contact-us">联系我们</router-link>
        <router-link to="/copyright">版权声明</router-link>
      </div>
      <div class="right content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
export default {
  components: {
    BreadcrumbList
  },
  computed: {
    breadcrumb () {
      const data = {
        about: {
          name: '关于我们',
          url: '/about'
        },
        'contact-us': {
          name: '联系我们',
          url: '/contact-us'
        },
        copyright: {
          name: '版权声明',
          url: '/copyright'
        }
      }
      return [data[this.$route.name]]
    }
  }
}
</script>
<style scoped lang="less">
.menu {
  width: 260px;
  padding: 5px 0 32px;
  border: 1px solid #F5F5F5;
  a {
    display: block;
    height: 20px;
    margin-top: 25px;
    padding-left: 30px;
    font-size: 16px;
    line-height: 20px;
    border-left: 4px solid #fff;
    &:hover {
      color: #24A10F;
    }
    &.router-link-active {
      color: #24A10F;
      border-color: #24A10F;
    }
  }
}
.content {
  width: 910px;
  padding: 30px;
  background: #F5F5F5;
}
</style>

<style lang="less">
.other-title {
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
}
</style>