<template>
  <div>

    <div v-if="notesOpen">
      <ChapterNotes />
    </div>

    <div class="toolbar">
      <div class="toolbar__group"></div>
      <div class="toolbar__group">
        <button @click="toggleNotes()">Notes</button>
      </div>
    </div>

  </div>
</template>

<script>
import ChapterNotes from '@/components/ChapterNotes'

export default {
  name: 'Toolbar',

  data () {
    return {
      notesOpen: false
    }
  },

  components: {
    ChapterNotes
  },

  methods: {
    toggleNotes () {
      this.notesOpen = !this.notesOpen
    }
  }
}
</script>

<style>

</style>
