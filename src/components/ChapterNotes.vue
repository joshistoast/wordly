<template>
  <div class="notes" id="notes">
    <div class="notes__header">
      <span>Chapter Notes</span>
      <div class="font-settings">
        <div @click="changeFontSize('small')" class="small"><Icon icon='Text' /></div>
        <div @click="changeFontSize('large')" class="large"><Icon icon='Text' /></div>
      </div>
    </div>
    <div class="notes__content">
      <textarea
        v-model="notesContent"
        placeholder="Keep your chapter notes here"
        :class="{
          'font-sm': currentFontSize === 'small',
          'font-lg': currentFontSize === 'large' }"></textarea>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Chapter Notes',

  data () {
    return {
      id: parseInt(this.$route.params.id),
      currentFontSize: 'small'
    }
  },
  components: {
    Icon
  },

  methods: {
    changeFontSize (size) {
      this.currentFontSize = size
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

    .font-settings {
      display: flex;
      flex-direction: row;

      & > div {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5em;
        border-radius: calc(var(--global-radius) - 0.35em);
        margin-left: 0.15em;

        &:hover {
          background: var(--light-grey)
        }

        &.small {
          width: 45px;
          svg {
            width: 16px;
            height: 16px;
          }
        }
        &.large {}
      }
    }

    &__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1em 2.25em;
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
      transition: font-size 80ms ease-out;

      &.font-sm {
        font-size: 1rem;
      }
      &.font-lg {
        font-size: 1.25rem;
      }
    }
  }

</style>
