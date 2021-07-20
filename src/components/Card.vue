<template>
  <div
    class="card"
    :class="{ 'active': activeChapter }">

    <div class="card__content">
      <template v-if="!activeChapter">
        <span class="chapter-subtitle" v-if="subTitle != null" type="text">{{ subTitle }}</span>
        <span class="chapter-title" v-if="title != null" type="text">{{ title }}</span>
      </template>
      <template v-else>
        <input autocomplete="off" class="chapter-subtitle" v-if="subTitle != null" type="text" v-model="subTitle" :placeholder="`Chapter ${chapterContent.chapterId}`"><br>
        <input autocomplete="off" class="chapter-title" v-if="title != null" type="text" v-model="title" placeholder="Chapter Title">
      </template>
    </div>

    <!-- TODO: Hide delete when mobile -->
    <div class="card__actions">
      <div class="card__actions__list">
        <div class="action">
          <Icon
            icon='Trash'
            @click="deleteChapter(this.id)"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Card',

  props: {
    id: Number
  },

  components: {
    Icon
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
    activeChapter () {
      const id = parseInt(this.$route.params.id)

      if (id === this.id) {
        return true
      } else {
        return false
      }
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

  /* Mobile and Global Styles */
  .chapter-title,.chapter-subtitle {
    background: transparent;
    border: none;
    font-family: var(--font-sans-serif);
  }
  .chapter-title {
    font-family: var(--font-serif);
    color: white;
    font-size: 1.2rem;
    font-weight: 900;
  }
  .chapter-subtitle {
    color: rgba(#fff, 0.35);
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  .card {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    background: var(--dark-grey);
    border: 1px solid rgba(#fff, 0.05);
    padding: 1em;
    border-radius: var(--global-radius);
    margin: 0 0.5em;
    width: 100%;
    min-width: 265px;
    overflow: hidden;
    transition: box-shadow 200ms linear, background 50ms linear;

    &::after { display: none }

    &.active {
      box-shadow: 0px 17px 30px rgba(#335EEA, 30%);
      background: var(--primary);
    }

    &__content {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    &__actions { display: none }
    &__delete {}
  }

  /* Desktop Styles */
  @media screen and (min-width: 1024px) {
    .card {
      position: relative;
      width: 100%;
      margin: 0;
      border-color: transparent;
      background: transparent;
      z-index: 1;
      cursor: pointer;

      &__content {
        z-index: 1;
        pointer-events: none;
      }

      &__actions {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        margin-right: 10px;
        width: 50%;
        height: 100%;
        z-index: 999;
        opacity: 0;
        transform: scale(0.8);
        transition: all 100ms ease-out;
        background: linear-gradient(270deg, #373740 0%, #373740 24.33%, rgba(55, 55, 64, 0.719681) 66.71%, rgba(55, 55, 64, 0) 100%);
      }
      &__actions__list {
        display: flex;
        align-items: center;
        margin-left: auto;
      }
      .action {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        z-index: 999;
      }
      .action::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(#fff, 0.1);
        transform: scale(0.8);
        opacity: 0;
        border-radius: 100%;
        z-index: -1;
        transition: all 100ms linear;
      }
      .action:hover::before {
        transform: scale(1);
        opacity: 1;
      }
      &.active > &__content {
        pointer-events: auto;
      }
      &.active > &__actions {
        background: linear-gradient(270deg, #335EEA 0%, #335EEA 25%, rgba(#335EEA, 0.0.75) 66.71%, rgba(#335EEA, 0%) 100%);
      }

      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: scale(0.7);
        transform-origin: center;
        background: var(--light-grey);
        opacity: 0;
        z-index: 0;
        transition: transform 100ms ease, opacity 70ms linea, background 100ms linear;
      }

      &:hover::after {
        opacity: 1;
        transform: scale(1)
      }

      &:hover &__actions {
        opacity: 1;
        transform: scale(1)
      }
      &.active::after {
        background: var(--primary);
        transform: scale(1);
        opacity: 1;
        z-index: 0;
      }

    }
  }

</style>
