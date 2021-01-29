<template>
  <div class="home-title">
    {{title}}
    <div class="more" v-if="more.length > 0">
      <router-link v-for="(item, key) in more" :to="item.url" :key="key">{{item.text}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    more: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>