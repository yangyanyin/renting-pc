<template>
  <div class="layout">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>