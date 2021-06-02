<template>
  <div class="container">
    <BaseButton />
    <main>
      <h1>Home Page</h1>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/button.vue'

export default Vue.extend({
  components: {
    BaseButton
  },
})
</script>

<style>
/*  */
</style>
