<template>
  <div>
    <nav class="intro">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/learning">Learning</nuxt-link>
      <nuxt-link to="/blog">Blog</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
    </nav>
    <Header />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
export default Vue.extend({
  components: {
    Header,
  },
})
</script>

<style lang="scss">
/* For unscoped application-wide styles, write css/sass here :) */
.intro {
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  text-transform: uppercase;
  line-height: 1.75;
  color: rgb(204, 51, 17);
  margin: 15px 0;
  .nuxt-link-exact-active {
    border-bottom: 2px solid rgb(204, 51, 17);
  }

  position: relative;
  display: inline-block;
  // << inline-block so that ::b&a match the width of the text block. Set to block to make ::b&a span full width.
  &::before,
  &::after {
    content: ''; // set to empty. If no content property, ::before & ::after won't work
    display: block;
    position: absolute;
  }
  &::before {
    background: white;
    z-index: -1;
    height: 101%;
    left: -20px;
    right: -20px;

  }
  &::after {
    background: rgb(255, 108, 108);
    // width: 100%; // will stop at the edge of my text block if block is inline-block
    width: 100vw;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: -2;
    height: 100%;
  }
}
</style>
