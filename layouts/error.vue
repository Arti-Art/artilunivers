<template>
  <div class="error-page">
    <!-- the error-page layout is special - it extends the default layout and then just controls the page content. -->
    <h1>Oops, something went wrong!</h1>
    <!-- Use a normal <a> link in the error page because if our JS crashed, nuxt-link might not work -->
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>