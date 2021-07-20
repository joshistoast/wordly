<template>
  <div class="explorer">

    <div class="explorer__actions">
      <Icon class="action" v-if="!menuOpen" icon='Menu' @click="toggleMenu"/> <!-- Menu Toggle -->
      <Icon class="action" v-if="menuOpen" icon='Close' @click="toggleMenu"/> <!-- Menu Toggle -->
      <Icon class="action" v-if="menuOpen" icon='New' @click="createChapter"/> <!-- Add Chapter -->
      <Icon class="action" v-if="menuOpen" icon='Trash' @click="deleteChapter(this.id)"/> <!-- Add Chapter -->
      <!-- TODO: Add menu open/close/add chapter/delete chapter. -->
    </div>

    <div
      class="explorer__chapters"
      :class="{ 'chapters-visible': menuOpen || window.width >= 1024, 'chapters-hidden': !menuOpen && window.width < 1024 }">

      <Card
        v-for="(chapter, i) in story"
        :key="i"
        :id="chapter.chapterId"
        class="explorer__chapters__chapter"
        @click="pushChapter(chapter.chapterId)"
      />
      <span class="explorer__new-chapter" @click="createChapter">+ New Chapter</span>

    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Icon from '@/components/Icon'

export default {
  name: 'Explorer',

  data () {
    return {
      window: {
        width: 0,
        height: 0
      },
      id: this.$route.params.id,
      menuOpen: true
    }
  },

  computed: {
    story () {
      return this.$store.state.story
    },
    greatestChapterId () {
      return this.$store.getters.greatestChapterId
    }
  },
  components: {
    Card,
    Icon
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerheight
    },
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    },
    pushChapter (id) {
      this.$router.push({ name: 'Chapter', params: { id } })
    },
    createChapter () {
      const id = this.greatestChapterId + 1
      this.$store.commit('createNewChapter', {
        chapterHeader: 'Chapter ' + id,
        chapterTitle: '',
        chapterId: id,
        chapterContent: '',
        chapterNotes: ''
      })

      this.$router.push({ name: 'Chapter', params: { id } })
    },
    deleteChapter (id) {
      if (confirm('Delete Chapter')) {
        this.$store.commit('removeChapter', { id: this.id })
        this.$router.replace({ path: '/app' })
      } else {
        return false
      }
    }
  }
}

</script>

<style lang='postcss'>
  :root {
    --explorer-width: 300px;
  }

  @media screen and (max-width: 1023px) {
    .explorer {
      padding-top: 2em;
      width: 100vw;
      overflow: hidden;

      &__actions {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
      }
      &__actions > .action {
        padding: 0.35em 1em;

        svg {
          width: 32px;
          height: 32px;
        }
      }

      &__chapters {
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 6.5em;
        left: 0;
        align-items: center;
        overflow-x: scroll;
        flex-wrap: nowrap;
        align-items: flex-start;
        scrollbar-width: none;
        width: 100%;
        height: 150px;
        transition: all 100ms ease-out;
      }

      &__chapters.chapters-hidden {
        opacity: 0;
        transform: translateY(-2em);
        pointer-events: none;
      }
      &__chapters.chapters-visible {
        opacity: 1;
        transform: translateY(0);
      }
    }

  }

  /* Desktop Styles */
  @media screen and (min-width: 1024px) {
    .explorer {
      height: calc(100% - 100px);

      &__actions {
        display: none;
      }
    }

    .explorer__chapters {
      display: block;
      position: relative;
      width: var(--explorer-width);
      height: 100%;
      background: var(--dark-grey);
      border: 1px solid var(--light-grey);
      flex-direction: column;
      padding: 0.5em;
      border-radius: calc(var(--global-radius) + 0.35em);
      box-shadow: 0px 10px 20px rgba(#000,0.15);
      transition: all 100ms ease;
      overflow-y: scroll;
      scrollbar-width: none;
      margin-top: 2em;

      &:hover {
        box-shadow: 0px 20px 35px rgba(#000,0.15);
      }
    }
    .explorer__new-chapter {
      display: block;
      background: transparent;
      padding: 1em;
      border-radius: var(--global-radius);
      margin: 1em 0 0 0;
      min-width: 200px;
      max-width: 300px;
      font-family: var(--font-sans-serif);
      color: rgba(#fff, 0.35);
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: rgba(#fff, 0.65)
      }
    }
  }

</style>
