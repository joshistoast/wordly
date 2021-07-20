<template>
  <div class="app">
    <div class="app__container">

      <div class="explorer__container">
        <Explorer />
      </div>

      <div class="editor__container">
        <router-view :key="$route.path"></router-view>
      </div>

    </div>
  </div>
</template>

<script>
import Explorer from '@/components/Explorer'

export default {
  name: 'App',
  components: {
    Explorer
  }
}
</script>

<style lang='postcss'>

.app {
  min-height: 100vh;
}

  .app__container {
    display: grid;
  }

  @media screen and (min-width: 1024px) {
    .app__container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .explorer__container {
      height: 100vh;
      grid-column: span 1 / span 1;
      margin: 0 auto;
    }
    .editor__container {
      grid-column: span 2 / span 2;
    }
  }
  @media screen and (min-width: 1536px) {
    .app__container {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .explorer__container {
      grid-column: span 1 / span 1;
    }
    .editor__container {
      grid-column: span 3 / span 3;
    }
  }

</style>
