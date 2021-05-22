<template>
  <h1>A single Post with ID {{ $route.params.id }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  validate(data) {
    // validate is a special method Nuxt executes before entering a route
    // console.log(data)
    return /^\d+$/.test(data.params.id) // REGEX to check for numbers. If returns true, no error.
  },
})
</script>
