<template>
  <main>
    <div class="error-page">
      <h1>Oops, something went wrong!</h1>
      <p>Back to <a href="/">safety</a>!</p>
      <p>
        Error.vue is a reserved name and will load automatically whenever there
        is an error.
      </p>
      <p>Customize this error page in layouts/error.vue</p>
      <p>
        The error page/ layout is special - it basically extends the default
        layout and then just controls the page content. That is why we can still
        see all my headers from the default layout on the error layout.
      </p>
    </div>
  </main>
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
