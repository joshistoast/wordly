<template>
  <div class="notes" id="notes">
    <div class="notes__header">
      Author's Notes
    </div>
    <div class="notes__content">
      <textarea v-model="notesContent" placeholder="Keep your chapter notes here"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter Notes',

  data () {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  computed: {
    activeChapter () {
      return this.$store.getters.activeChapter(this.id)
    },
    notesContent: {
      get () {
        return this.activeChapter.chapterNotes
      },
      set (chapterNotes) {
        this.$store.commit('updateChapterNotes', { id: this.id, chapterNotes })
      }
    }
  }

}
</script>

<style>

</style>
