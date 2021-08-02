<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://source.unsplash.com/640x480/?computer"
      title="Hello There"
      previewText="Some lorem ipsum"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://source.unsplash.com/640x480/?technology"
      title="Second post"
      previewText="Some lorem ipsum"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://source.unsplash.com/640x480/?painting"
      title="Third post"
      previewText="Some lorem ipsum"
    />
  </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview.vue'

export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
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