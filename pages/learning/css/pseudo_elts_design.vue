<template>
  <main>
    <h1 class="intro">Styling with CSS Pseudo Elements.</h1>

    <div class="container">

      <div class="card">
        <img class="card__img" src="https://source.unsplash.com/400x400/?trees" alt="">
        <div class="card__text">
          <h3 class="card__title">Card title</h3>
          <p class="card__body">Description of the card</p>
        </div>
      </div>

      <div class="card">
        <img class="card__img" src="https://source.unsplash.com/400x400/?animals" alt="">
        <div class="card__text">
          <h3 class="card__title">Card title</h3>
          <p class="card__body">Description of the card</p>
        </div>
      </div>

    </div>

  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      articles: [
        {
          title: 'Section Title',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis provident deleniti sapiente magnam. Facere veniam exercitationem corporis tenetur earum autem, quibusdam qui aliquam sed impedit assumenda minus alias consequatur dolorum.',
        },
        {
          title: 'Section Title',
          text: 'Lorem ipsum <a href="https://www.youtube.com/watch?v=xoRbkm8XgfQ">dolor sit amet consectetur adipisicing</a> elit. Nobis provident deleniti sapiente magnam. Facere veniam exercitationem corporis tenetur earum autem, quibusdam qui aliquam sed impedit assumenda minus alias consequatur dolorum.',
        },
        {
          title: 'Third Article',
          text: 'Lorem ipsum <a href="https://www.youtube.com/watch?v=xoRbkm8XgfQ">dolor sit amet consectetur adipisicing</a> elit. Nobis provident deleniti sapiente magnam. Facere veniam exercitationem corporis tenetur earum autem, quibusdam qui aliquam sed impedit assumenda minus alias consequatur dolorum.',
        },
      ],
    }
  }
})
</script>

<style scoped lang="scss">
.intro {
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

.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.card {
  position: relative;
  margin: 1rem;
  background: rgba(71, 71, 71, 0.666);
}

.card__img {
  display: block;
  transition: opacity ease-out 250ms;
  opacity: 1;
}

.card__img::hover {
  opacity: 0.4;
}

.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0;
  transition: opacity ease-out 250ms;
}

.card::hover .card__text {
  opacity: 1;
}

.card__title {
  font-size: 2rem;
  color: white;
  margin-bottom: 0;
}

</style>
