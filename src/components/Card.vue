<template>
  <div
    class="card"
    :class="{ 'active': active }"
  >
    <input v-if="subTitle != null" type="text" v-model="subTitle">
    <input v-if="title != null" type="text" v-model="title">

    <button v-if="!chapterContent">Add New</button>

  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    active: Boolean,
    id: Number
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
        return this.chapterContent.chapterSubTitle
      },
      set (chapterSubTitle) {
        this.$store.commit('updateChapterSubTitle', { id: this.id, chapterSubTitle })
      }
    }
  }
}
</script>

<style>

</style>
