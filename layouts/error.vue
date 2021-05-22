<template>
  <main>
    <h1>An error occured</h1>
    <p>Error.vue is a reserved name and will load automatically whenever there is an error.</p>
    <p>Customize this error page in layouts/error.vue</p>
    <img src="https://source.unsplash.com/300x300/?nature,snow" alt="">
  </main>
</template>

<style scoped lang="scss">
h1::before {
  // Before pseudo element
  content: 'Hello ';
  display: block;
  background: red;
  font-size: 20px;
  color: white;
  height: 30px;
}

h1::after {
  // Before pseudo element
  content: ' test';
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  background: red;
  color: white;
  // width: 30px;
  height: 30px;
}

// You can't put pseudo elements on images

</style>
