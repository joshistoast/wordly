<template>
  <div>
    <h1 v-if="chapter.chapterTitle">{{ chapter.chapterTitle }}</h1>
    <h4 v-if="chapter.chapterHeader">{{ chapter.chapterHeader }}</h4>

    <WordPad />

    <Toolbar />

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

<style>

</style>
