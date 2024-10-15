import { defineStore } from 'pinia'

export const loadingStateStore = defineStore('loadingState', {
  state: () => ({
    isAssetAnalyzeLoadingState: false
  }),
  actions: {
    setIsAssetAnalyzeLoading(value) {
      this.isAssetAnalyzeLoadingState = value
    },
  },
  getters: {
    isAssetAnalyzeLoading: (state) => state.isAssetAnalyzeLoadingState
  }
})