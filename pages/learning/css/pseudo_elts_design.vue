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

    <div class="container2">

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

  .card {
    position: relative;
    margin: 1rem;
    background: rgba(71, 71, 71, 0.666);
    &::before, &::after {
      content: '';
      position: absolute;
      top: 1.25em;
      bottom: 1.25em;
      left: 1.25em;
      right: 1.25em;
    }
    &::before {
      transform: scale(0, 1); // x is at 0%, y is at 100%
      transition: transform ease-out 250ms;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
    }
    &::after {
      transform: scale(1, 0);
      transition: transform ease-out 250ms;
      border-left: 1px solid white;
      border-right: 1px solid white;
    }
    &:hover::before {
      transform: scale(1.05, 1);
    }
    &:hover::after {
      transform: scale(1, 1.05);
    }
  }

  .card__img {
    display: block;
    transition: opacity ease-out 250ms;
    opacity: 1;
  }

  .card:hover .card__img {
    opacity: .4;
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

  .card:hover .card__text {
    opacity: 1;
  }

  .card__title {
    font-size: 2rem;
    color: white;
    margin-bottom: 0;
  }
}

.container2 {
    width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .card {
    position: relative;
    margin: 1rem;
    background: rgba(71, 71, 71, 0.666);
    &::before, &::after {
      content: '';
      position: absolute;
      top: 1.25em;
      bottom: 1.25em;
      left: 1.25em;
      right: 1.25em;
    }
    &::before {
      background: rgba(255, 192, 203, 0.95);
      transform: scale(1, 0); // x is at 100%, y is at 0%
      transition: transform ease-out 250ms;
      border-top: none;
      border-bottom: none;
    }
    &:hover::before {
      transform: scale(1, 1);
    }
  }

  .card__img {
    display: block;
    transition: opacity ease-out 250ms;
    opacity: 1;
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

  .card:hover .card__text {
    opacity: 1;
  }

  .card__title {
    font-size: 2rem;
    color: white;
    margin-bottom: 0;
  }
}

</style>
