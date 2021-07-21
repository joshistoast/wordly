<template>
  <div class="notes" id="notes">
    <div class="notes__header">
      Chapter Notes
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

<style lang='postcss'>

  .notes {
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    background: var(--dark-grey);
    border-radius: calc(var(--global-radius) + 0.35em);
    border: 1px solid var(--light-grey);
    overflow: hidden;

    &__header {
      padding: 1.35em 2.25em;
      width: 100%;
      border-bottom: 1px solid var(--light-grey);
      margin: 0;

      font-family: var(--font-sans-serif);
      font-weight: bold;
      color: white;
      font-size: 1.2rem;
    }
    &__content {
      width: 100%;
      padding: 1.35em 2.25em;
      height: 300px;
    }
    textarea {
      width: 100%;
      height: 100%;
      color: white;
      font-family: var(--font-serif);
      background: transparent;
      border: none;
      outline: none;
      resize: none;
    }
  }

</style>
