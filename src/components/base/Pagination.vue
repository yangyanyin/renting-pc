<template>
  <div class="pagination">
    <vue-ads-pagination
      :total-items="200"
      :max-visible-pages="10"
      :page="page"
      :loading="loading"
      @page-change="pageChange"
      @range-change="rangeChange"
    >
      <template slot-scope="props">
        <div class="vue-ads-pr-2 vue-ads-leading-loose">
          {{ props.total }} 条
        </div>
      </template>
      <template slot="buttons" slot-scope="props">
        <vue-ads-page-button
          v-for="(button, key) in props.buttons"
          :key="key"
          :html="title(key, props.buttons)"
          v-bind="button"
          @page-change="page = button.page"
        />
      </template>
    </vue-ads-pagination>
  </div>
</template>

<script>
import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination'
export default {
  components: {
    VueAdsPagination,
    VueAdsPageButton
  },

  data() {
    return {
      loading: false,
      page: 0
    };
  },

  methods: {
    pageChange(page) {
      this.page = page
      console.log(page)
    },

    rangeChange(start, end) {
      console.log(start, end, this.page)
    },
    title(key, pages) {
      if (key === 0) {
        return '上一页'
      }
      if (key === pages.length - 1) {
        return '下一页'
      }
      return pages[key].html
    }
  }
}
</script>
<style lang="less">
.vue-ads-cursor-default {
  cursor: default;
}
.vue-ads-flex {
  display: flex;
  justify-content: center;
}

.vue-ads-ml-1 {
  margin-left: 10px;
  span {
    font-size: 12px;
  }
}
.vue-ads-px-0 {
  padding-left: 0;
  padding-right: 0;
}
.vue-ads-text-white {
  color: #fff;
}
.vue-ads-w-6 {
  height: 24px;
  padding: 0 8px;
  line-height: 24px;
  border: 1px solid #c9c9c9;
  background: #fff;
}
.vue-ads-bg-teal-500 {
  background-color: #24a10f;
}
.vue-ads-pr-2 {
  width: 58px;
  line-height: 22px;
  border: 1px solid #c9c9c9;
  background: #fff;
  font-size: 12px;
  text-align: center;
}
</style>