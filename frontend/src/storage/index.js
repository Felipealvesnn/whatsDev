import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
 // strict: true,
  state: {
    messages: [
      {
        id: 1,
        text: 'Olá, tudo bem?',
        hour: '12:00',
        my: true
      },
      // outras mensagens aqui...
    ]
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    // adicione outras ações aqui, se necessário
  },
  getters: {
    // adicione getters aqui, se necessário
  },
  modules: {
    // adicione módulos aqui, se necessário
  }
});
