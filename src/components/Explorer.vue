<template>
  <div class="explorer">

    <div class="explorer__actions">
      <!-- TODO: Add menu open/close/add chapter/delete chapter. -->
    </div>

    <div class="explorer__chapters">

      <Card
        v-for="(chapter, i) in story"
        :key="i"
        :id="chapter.chapterId"
        :active="true"
        @click="pushChapter(chapter.chapterId)"
      />

    </div>
    <button @click="createChapter">+ New Chapter</button>

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

<style lang='postcss'>

  .explorer {
    padding-top: 1em;

    &__actions {}

    &__chapters {
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow-x: auto;
      flex-wrap: nowrap;
      align-items: flex-start;
      scrollbar-width: none;
    }
  }

  @media screen and (min-width: 950px) {
    .explorer__chapters {
      flex-direction: column;
    }
  }

</style>
