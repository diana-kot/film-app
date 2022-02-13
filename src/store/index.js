import Vue from "vue";
import Vuex from "vuex";
import channel from './channel'
import user from './user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user,
    channel }
})


