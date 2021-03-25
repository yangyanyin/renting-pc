<template>
  <img
    :alt="alt"
    v-lazy="{
      src: url,
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
  }
}
</script>
