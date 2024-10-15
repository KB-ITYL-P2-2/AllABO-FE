import { defineStore } from 'pinia'

export const loadingStateStore = defineStore('loadingState', {
  state: () => ({
    isAssetAnalyzeLoadingState: [false, false, false, false]
  }),
  actions: {
    setIsAssetAnalyzeLoading(value, index) {
      this.isAssetAnalyzeLoadingState[index] = value;
    },
  },
  getters: {
    isAssetAnalyzeLoading: (state) => state.isAssetAnalyzeLoadingState
  }
})