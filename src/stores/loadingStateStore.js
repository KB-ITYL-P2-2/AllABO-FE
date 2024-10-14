import { defineStore } from 'pinia'

export const loadingStateStore = defineStore('loadingState', {
  state: () => ({
    isAssetAnalyzeLoading: false
  }),
  actions: {
    setIsAssetAnalyzeLoading(value) {
      this.isAssetAnalyzeLoading = value
    },
  },
  getters: {
    isAssetAnalyzeLoading: (state) => state.isAssetAnalyzeLoading
  }
})