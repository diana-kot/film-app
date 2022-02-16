export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;

      localStorage.setItem('userNew', JSON.stringify(state.user))
    },
    DELETE_USER(state) {
      state.user = null;
      // localStorage.setItem('user', JSON.stringify(state.user))
    },

    UPDATE_USER(state, {name}){
      let user = state.user.concat
      user = {...user, name}
      state.user = user
      // localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
    setUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
    deleteUser({ commit }) {
      commit("DELETE_USER");
    },
    updateUser({commit}, payload){
      commit("UPDATE_USER", payload)
    }
  },
};
