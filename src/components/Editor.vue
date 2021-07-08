<template>
  <div>
    <h1>{{ chapter.chapterTitle }}</h1>
    <h4>{{ chapter.chapterSubTitle }}</h4>

    <WordPad />

  </div>
</template>

<script>
import WordPad from '@/components/WordPad'
export default {
  name: 'Editor',

  data () {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  components: {
    WordPad
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
