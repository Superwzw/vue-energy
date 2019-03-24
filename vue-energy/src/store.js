import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	show: true,
  },
  mutations: {
  	changeShow(ctx,type) {
  		this.state.show = type;
  	}
  },
  actions: {
  	changeShow(ctx,type) {
  		ctx.commit('changeShow', type);
  	}
  }
})
