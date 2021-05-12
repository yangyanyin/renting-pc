<template>
  <img
    :alt="alt"
    v-lazy="{
      src: nUrl,
      loading: require('../../assets/image/lazyload-image.jpg'),
      error: require('../../assets/image/lazyload-image.jpg'),
    }"
  />
</template>
<script>
export default {
  name: 'rentImg',
  props: {
    url: String,
    alt: String
  },
  computed: {
    nUrl () {
      return this.url.replace('http://web.aicassets.com', 'https://cms.kangongyu.cn')
    }
  }
}
</script>
