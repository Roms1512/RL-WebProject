import { createStore } from 'vuex'

export default createStore({
  state: {
    nom: null,
    email: null,
    sujet: null,
    message: null
  },
  mutations: {
    submitForm () {
      console.log('Form submitted', this.form);
    }
  },
  actions: {
  },
  modules: {
  }
})
