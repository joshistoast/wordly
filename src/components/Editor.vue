<template>
  <div>
    <h1 v-if="chapter.chapterTitle">{{ chapter.chapterTitle }}</h1>
    <h4 v-if="chapter.chapterSubTitle">{{ chapter.chapterSubTitle }}</h4>

    <WordPad />

    <ChapterNotes />

  </div>
</template>

<script>
import WordPad from '@/components/WordPad'
import ChapterNotes from '@/components/ChapterNotes'
export default {
  name: 'Editor',

  data () {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  components: {
    WordPad,
    ChapterNotes
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
