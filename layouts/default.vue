<template>
  <div>
    <nav class="intro">
      <nuxt-link to="/" class="navlink">Home</nuxt-link>
      <nuxt-link to="/learning" class="navlink">Learning</nuxt-link>
      <nuxt-link to="/blog" class="navlink">Blog</nuxt-link>
      <nuxt-link to="/contact" class="navlink">Contact</nuxt-link>
      <nuxt-link to="/portfolio" class="navlink">Portfolio</nuxt-link>
    </nav>
    <Header />
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import TheHeader from '~/components/Navigation/TheHeader.vue'
import TheSidenav from '~/components/Navigation/TheSidenav.vue'
export default {
  components: {
    Header,
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
    }
  },
}
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
  .navlink:hover {
    color: rgb(110, 26, 8);
  }
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
