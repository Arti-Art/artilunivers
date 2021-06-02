<template>
  <div>
    <h1>BLOG LAYOUT</h1>
    <Header />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
export default Vue.extend({
  components: {
    Header,
  },
})
</script>

<style>
/* For unscoped application-wide styles, write css/sass here :) */

</style>
