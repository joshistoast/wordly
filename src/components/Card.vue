<template>
  <div
    class="card"
    :class="{ 'active': active }">

    <div class="card__form">
      <input v-if="subTitle != null" type="text" v-model="subTitle">
      <input v-if="title != null" type="text" v-model="title">
    </div>

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
      this.$store.commit('removeChapter', { id: this.id })
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
