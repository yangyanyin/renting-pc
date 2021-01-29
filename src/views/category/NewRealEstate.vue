<!-- 新楼盘 -->
<template>
  <div class="category">
    <SearchBox />

    <Filters />
  </div>
</template>
<script>
import SearchBox from './base/SearchBox'
import Filters from './base/Filters'
export default {
  components: {
    SearchBox,
    Filters
  }
}
</script>