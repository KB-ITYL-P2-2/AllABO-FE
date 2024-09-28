import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({
    isForceScrolled: false
  }),
  actions: {
    setForceScrolled(value) {
      this.isForceScrolled = value
    }
  }
})