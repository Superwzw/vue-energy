import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	show: true,
    num:0,
  },
  mutations: {
  	changeShow(ctx,arg) {
  		this.state.show = arg.type;
      this.state.num = arg.num;
  	}
  },
  actions: {
  	changeShow(ctx,arg) {
  		ctx.commit('changeShow', arg);
  	}
  }
})
