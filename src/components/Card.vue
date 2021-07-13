<template>
  <div
    class="card"
    :class="{ 'active': active }">

    <div class="card__form">
      <input v-if="subTitle != null" type="text" v-model="subTitle" :placeholder="`Chapter ${chapterContent.chapterId}`"><br>
      <input v-if="title != null" type="text" v-model="title" placeholder="Chapter Title">
    </div>

    <!-- TODO: Hide delete when mobile -->
    <div class="card__delete">
      <div @click="deleteChapter(this.id)">X</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    active: Boolean,
    id: Number
  },

  methods: {
    deleteChapter (id) {
      if (confirm('Delete Chapter')) {
        this.$store.commit('removeChapter', { id: this.id })
        this.$router.replace({ path: '/app' })
      } else {
        return false
      }
    }
  },

  computed: {
    chapterContent () {
      return this.$store.getters.activeChapter(this.id)
    },
    title: {
      get () {
        return this.chapterContent.chapterTitle
      },
      set (chapterTitle) {
        this.$store.commit('updateChapterTitle', { id: this.id, chapterTitle })
      }
    },
    subTitle: {
      get () {
        return this.chapterContent.chapterHeader
      },
      set (chapterHeader) {
        this.$store.commit('updateChapterHeader', { id: this.id, chapterHeader })
      }
    }
  }
}
</script>

<style lang='postcss'>

  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--dark-grey);
    border: 1px solid rgba(#fff, 0.05);
    padding: 1em;
    border-radius: var(--global-radius);
    margin: 0 0.5em;
    min-width: 200px;
    max-width: 300px;

    &__form {
      input {
        color: inherit;
        font-family: inherit;
        background: transparent;
        border: none;
      }
    }
    &__delete {}
  }

</style>
