<template>
  <div class="main">
    <h1>Blog Page</h1>
    <input v-model="postId" type="text" placeholder="enter a post ID" />
    <button @click="onLoadPost">Load Post</button>
    <nuxt-child />
    <!-- Nuxt child will output the subroutes content. Allows some content to stay the same (here) and the rest to change (/blog changes to /blog/id) -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // This file, at the root of my pages will be a wrapper for everything inside the blog folder
  layout: 'blog',
  data() {
    return {
      postId: '',
    }
  },
  methods: {
    onLoadPost() {
      this.$router.push(`/blog/${this.postId}`)
    },
  },
})
</script>