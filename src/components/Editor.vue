<template>
  <div class="editor">
    <div class="heading">
      <h1>
        <template v-if="!chapter.chapterTitle">{{ chapter.chapterHeader }}</template>
        <template v-else-if="chapter.chapterTitle">{{ chapter.chapterTitle }}</template>
      </h1>
      <h4 v-if="chapter.chapterHeader && chapter.chapterTitle">{{ chapter.chapterHeader }}</h4>
    </div>

    <WordPad id="wordpad" />

    <Toolbar id="toolbar" />

  </div>
</template>

<script>
import WordPad from '@/components/WordPad'
import Toolbar from '@/components/Toolbar'

export default {
  name: 'Editor',

  data () {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  components: {
    WordPad,
    Toolbar
  },
  computed: {
    chapter () {
      return this.$store.getters.activeChapter(this.id)
    }
  }
}
</script>

<style lang='postcss' scoped>

  .editor {
    position: relative;
    height: calc(100% - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    margin: 2em auto 0 auto;
    max-width: 1250px;
  }

  .heading {
    width: 100%;
    text-align: center;
  }

  h1 {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 900;
    color: #fff;
  }
  h4 {
    font-family: var(--font-sans-serif);
    font-weight: bold;
    color: rgba(#fff, 0.65);
    margin: 0;
  }

  #toolbar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

</style>
