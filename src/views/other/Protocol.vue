<template>
  <div>
    <BreadcrumbList :breadcrumb="breadcrumb" />
    <div class="w1200px"> 
      <h3>新加坡看公寓网用户协议</h3>
      <p>更新中...</p>
    </div>
  </div>
</template>
<script>
import BreadcrumbList from '../../components/base/BreadcrumbList'
export default {
  components: {
    BreadcrumbList
  },
  data () {
    return {
      breadcrumb: [
        {
          name: '新加坡看公寓网用户协议',
          url: '/protocol'
        }
      ]
    }
  }
  
}
</script>