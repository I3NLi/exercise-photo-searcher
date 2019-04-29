import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fotos: [] as Object[],
  },
  getters: {
    getFoto: (state) => (index) => {
      if (index == null) { index = state.fotos.length-1; }
      return state.fotos[index];
    }
  },
  mutations: {
    pushFoto(state, foto) {
      state.fotos.push(
        {
          data: foto,
          createAt: new Date(),
          tags: ['math'],
          star: false,
        });
    },
  },
  actions: {}
});
