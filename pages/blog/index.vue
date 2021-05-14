<template>
  <div class="main">
    <h1>Blog Page</h1>
    <input v-model="postId" type="text" placeholder="enter a post ID" />
    <button @click="onLoadPost">Load Post</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
