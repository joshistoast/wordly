<template>
  <div class="wordpad" id="wordpad">
    <textarea class="wordpad__textarea" v-model="content" placeholder="Start Typing..."></textarea>
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

<style lang='postcss'>

 @media screen and (max-width: 1023px) {
    .wordpad {
      margin-top: 1em;
    }
  }

  @media screen and (min-width: 1024px) {
    .wordpad {
      margin-top: 75px;
    }
  }

  .wordpad {
    width: 100%;
    height: 100%;

    &__textarea {
      background: transparent;
      color: white;
      width: 100%;
      outline: none;
      border: none;
      height: calc(100% - 70px);
      line-height: 2;

      font-family: var(--font-serif);
      font-size: 1.1rem;
    }
  }

</style>
