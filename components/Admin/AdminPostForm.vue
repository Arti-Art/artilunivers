<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.previewText">Preview Text</AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import AppControlInput from '@/components/UI/AppControlInput.vue';
import AppButton from '@/components/UI/AppButton.vue';
export default Vue.extend({
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false,
    }
  },
  data() {
    // if we have a post from props, spread the post, otherwise initialize empty >>>
    return {
      editedPost: this.post ? { ...this.post } : {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
        previewText: '',
      }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost);
    },
    onCancel() {
      this.$router.push('/admin');
    },
  },
})
</script>