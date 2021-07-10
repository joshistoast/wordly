<template>
  <div class="wordpad" id="wordpad">
    <textarea v-model="content" placeholder="Start Typing..."></textarea>
  </div>
</template>

<script>
export default {
  name: 'Word Pad',

  data () {
    return {
      id: parseInt(this.$route.params.id)
    }
  },

  computed: {
    activeChapter () {
      return this.$store.getters.activeChapter(this.id)
    },
    content: {
      get () {
        return this.activeChapter.chapterContent
      },
      set (chapterContent) {
        this.$store.commit('updateChapterContent', { id: this.id, chapterContent })
      }
    }
  }

}
</script>

<style>

</style>
