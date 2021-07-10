<template>
  <div class="explorer" id="explorer">

    <div class="explorer__chapters">

      <Card
        v-for="(chapter, i) in story"
        :key="i"
        :id="chapter.chapterId"
        :active="true"
        @click="pushChapter(chapter.chapterId)"
      />
      <button @click="createChapter">+ New Chapter</button>

    </div>

    <div class="explorer__backdrop"></div>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Explorer',

  computed: {
    story () {
      return this.$store.state.story
    },
    greatestChapterId () {
      return this.$store.getters.greatestChapterId
    }
  },
  components: {
    Card
  },
  methods: {
    pushChapter (id) {
      this.$router.push({ name: 'Chapter', params: { id } })
    },
    createChapter () {
      const id = this.greatestChapterId + 1
      this.$store.commit('createNewChapter', {
        chapterHeader: 'Chapter ' + id,
        chapterTitle: '',
        chapterId: id,
        chapterContent: '',
        chapterNotes: ''
      })

      this.$router.push({ name: 'Chapter', params: { id } })
    }
  }
}

</script>

<style>

</style>
