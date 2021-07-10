<template>
  <div
    class="card"
    :class="{ 'active': active }">

    <div class="card__form">
      <input v-if="subTitle != null" type="text" v-model="subTitle" :placeholder="`Chapter ${chapterContent.chapterId}`"><br>
      <input v-if="title != null" type="text" v-model="title" placeholder="Chapter Title">
    </div>

    <div class="card__delete">
      <div @click="deleteChapter(this.id)">X</div>
    </div>

    <hr>

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
    // TODO: re-route to next greatest/lowest chapter ID based on index
    deleteChapter (id) {
      if (confirm('Delete Chapter')) {
        this.$store.commit('removeChapter', { id: this.id })
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

<style>

</style>
