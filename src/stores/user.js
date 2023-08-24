import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',  {
  state: () => {
    return { email: 'test@123.com', password: '' }
  },
  actions: {
    getUserDetails() {
      return this.email
    },
  },

})
