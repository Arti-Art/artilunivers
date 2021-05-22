<template>
  <button class="nice-button" type="button">
    <fa icon="lock" />
    {{ text }}
    <fa icon="envelope" />
    <fa icon="external-link-alt" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NiceButton',
  props: {
    text: {
      type: String,
      default: () => 'Pass text through props HERE'
    }
  }
})
</script>

<style lang="scss" scoped>
.nice-button {
  background-color: #fff;
}
</style>