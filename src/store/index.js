import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [createPersistedState()],

  state: {
    story: []
  },
  getters: {
    activeChapter: (state) => (id) => {
      return state.story.find(chapter => chapter.chapterId === id)
    },
    checkValidChapter: (state) => (id) => {
      if (state.story.find(chapter => chapter.chapterId === id)) {
        return true
      } else {
        return false
      }
    },
    greatestChapterId: (state) => {
      const greatestId = state.story.reduce((max, chapter) => (chapter.chapterId > max ? chapter.chapterId : max),
        0
      )
      return greatestId
    }
  },
  mutations: {
    updateChapterContent (state, { id, chapterContent }) {
      state.story = state.story.map(chapter => {
        return chapter.chapterId === id
          ? {
            ...chapter,
            chapterContent
          }
          : chapter
      })
    },
    updateChapterTitle (state, { id, chapterTitle }) {
      state.story = state.story.map(chapter => {
        return chapter.chapterId === id
          ? {
            ...chapter,
            chapterTitle
          }
          : chapter
      })
    },
    updateChapterHeader (state, { id, chapterHeader }) {
      state.story = state.story.map(chapter => {
        return chapter.chapterId === id
          ? {
            ...chapter,
            chapterHeader
          }
          : chapter
      })
    },
    updateChapterNotes (state, { id, chapterNotes }) {
      state.story = state.story.map(chapter => {
        return chapter.chapterId === id
          ? {
            ...chapter,
            chapterNotes
          }
          : chapter
      })
    },

    createNewChapter (state, chapter) {
      state.story.push(chapter)
    },
    removeChapter (state, payload) {
      const id = payload.id
      const chapter = state.story.map(chapter => chapter.chapterId).indexOf(id)
      state.story.splice(chapter, 1)
      // state.story.splice(chapter, 1)
    }
  },
  actions: {},
  modules: {}
})
