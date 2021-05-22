<template>
  <div class="container">
    <Header />
    <BaseButton />
    <main>
      <h1>Home Page</h1>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import BaseButton from '~/components/base/button.vue'

export default Vue.extend({
  components: {
    Header,
    BaseButton
  },
})
</script>

<style>
/*  */
</style>
