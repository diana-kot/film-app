export default {
  namespaced: true,
  state: {
    user: null,
    signIn:false
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getSignIn(state) {
      return state.signIn;
    },
  },
  mutations: {
    SET_SIGN(state, payload) {
      state.signIn = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;

      // localStorage.setItem('user', JSON.stringify(state.user))
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
    setSign({ commit }, payload) {
      commit("SET_SIGN", payload);
    },
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
