<template>
  <div>

    <template v-if="notesOpen" class="author-notes">
      <ChapterNotes />
    </template>

    <div class="toolbar">

      <div class="toolbar__group">
        <div
          v-if="!isFirstChapter"
          @click="prevChapter()"
          class="toolbar__group__action">
          <Icon icon='Arrow Left'/>
        </div>
      </div>

      <div class="toolbar__group">
        <div
          @click="toggleNotes()"
          class="toolbar__group__action"
          :class="{ active: notesOpen }">
          <Icon icon='Notepad'/>
          <span>Notes</span>
        </div>
      </div>

      <div class="toolbar__group">
        <div
          v-if="!isLastChapter"
          @click="nextChapter()"
          class="toolbar__group__action">
          <Icon icon='Arrow Right'/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ChapterNotes from '@/components/ChapterNotes'
import Icon from '@/components/Icon'

export default {
  name: 'Toolbar',

  data () {
    return {
      notesOpen: false,
      currentChapterID: parseInt(this.$route.params.id)
    }
  },

  components: {
    ChapterNotes,
    Icon
  },

  computed: {
    isFirstChapter () {
      if (this.currentChapterID === 1) {
        return true
      } else {
        return false
      }
    },
    isLastChapter () {
      if (this.currentChapterID === this.$store.getters.greatestChapterId) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
    toggleNotes () {
      this.notesOpen = !this.notesOpen
      this.searchOpen = false
    },

    nextChapter () {
      if (!this.isLastChapter) {
        this.$router.push({ name: 'Chapter', params: { id: this.currentChapterID + 1 } })
      } else {
        return false
      }
    },
    prevChapter () {
      if (!this.isFirstChapter) {
        this.$router.push({ name: 'Chapter', params: { id: this.currentChapterID - 1 } })
      } else {
        return false
      }
    }
  }
}
</script>

<style lang='postcss'>

  .toolbar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1em;
    background: linear-gradient(180deg, rgba(37, 37, 48, 0) 0%, rgba(37, 37, 48, 0.5) 31.77%, #252530 100%);

    &__group {
      display: flex;
      background: var(--dark-grey);
      padding: 0.5em;
      border-radius: calc(var(--global-radius) + 0.35em);
      border: 1px solid var(--light-grey);

      &:only-child {
        margin: 0;
      }
      &:first-child {
        margin-right: 1em;
      }
      &:last-child {
        margin-left: 1em;
      }
    }
    &__group__action {
      display: flex;
      align-items: center;
      padding: 0.65em;
      border-radius: var(--global-radius);
      cursor: pointer;

      span {
        margin: 0 0.35em 0 0.5em;
        font-family: var(--font-sans-serif);
        font-weight: bold;
        font-size: 1.1rem;
        color: white;
      }

      &:first-child {
        margin-right: 0.5em;
      }
      &:only-child {
        margin: 0;
      }

      &:hover {
        background: var(--light-grey)
      }

      svg {
        width: 32px;
        height: 32px;
      }
    }
    &__group__action.active {
      background: var(--primary)
    }
  }

</style>
