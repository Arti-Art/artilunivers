<template>
  <header class="header">
    <h1>This is the Header</h1>
    <ul class="nav-items">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
}
.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}
</style>