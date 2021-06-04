<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://source.unsplash.com/1600x900/?technology"
      title="This is the title"
      previewText="the preview text"
    />
    <PostPreview
      id="2"
      thumbnail="https://source.unsplash.com/1600x900/?animals"
      title="This is the title"
      previewText="the preview text"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PostPreview from '@/components/Posts/PostPreview.vue'

export default Vue.extend({
  components: {
    PostPreview
  },
})
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>