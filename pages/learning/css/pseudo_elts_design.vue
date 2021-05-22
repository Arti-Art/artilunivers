<template>
  <main>
    <h1>Styling with CSS Pseudo Elements.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eatus autem quo nostrum dicta amet laborum atque neque.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, saepe.</p>
    <!-- <img src="https://source.unsplash.com/300x300/?nature,snow" alt=""> -->
    <h2 class="selector2">Some Title</h2>
    <h2 class="selector3">Look at super cool tooltip from the link below !!!</h2>
    <p>Lorem ipsum dolor <a href="#" data-tool-tip="This is a cool tooltip! And it's all a clickable anchor tag.">sit amet consectetur</a>, adipisicing elit. Aliquid, nihil!</p>
    
    <div class="decorations">
      <h2>We can decorate sections!</h2>
      <div v-for="art in articles" :key="art.title" >
        <h3 class="section-with-deco">{{ art.title }}</h3>
        <p v-html="art.text"></p>
      </div>
    </div>

    <div class="counters">
      <h2>We can number sections!</h2>
      <div v-for="art in articles" :key="art.title" >
        <h3 class="section">{{ art.title }}</h3>
        <p v-html="art.text"></p>
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

.selector2 {
  content: url(https://source.unsplash.com/300x300/?nature);
}

.selector3::before {
  content: open-quote;
}
.selector3::after {
  content: close-quote;
}

a[data-tool-tip] {
  position: relative;
}

a[data-tool-tip]::after {
  content: attr(data-tool-tip);
  display: block;
  position: absolute;
  background-color: rgba(17, 17, 17, 0.788);
  padding: 1em 2em;
  color: white;
  border-radius: 5px;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  transform: scale(0);
  transition: 
    transform ease-out 150ms,
    bottom ease-out 150ms;
}
a[data-tool-tip]:hover::after {
  transform: scale(1);
  bottom: 100%;
}

.decorations {
  padding: 7em;
}

.section-with-deco::before {
  content: url(https://source.unsplash.com/500x20/?nature);
  display: block;
}

.counters {
  background: lightgray;
  text-align: left;
  padding: 5em 8em;
  margin-top: 7em;

  counter-reset: countername;
  // <<< will reset the counter every time we get to a section with class counters
}

.section {
  position: relative;
}

.section::before {
  counter-increment: countername;
  // <<< Increments our counter
  content: counter(countername);
  position: absolute;
  left: -2.5em;
  top: -.5em;
  background: white;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid gray;
  color: gray;
  // box-sizing: border-box;
}

</style>
