<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <!-- passing isAdmin as a prop will set its value to true >>> -->
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostList from '@/components/Posts/PostList.vue'
import AppButton from '@/components/UI/AppButton.vue'

export default Vue.extend({
  layout: 'admin',
  components: {
    PostList,
    AppButton
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  // set html head per page if needed (overwrites values set in nuxt config,js)
  head: {
    title: 'Admin Section',
  }
})
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>