import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'


const discoverStore = {
  namespace: true,
  state,
  getters,
  mutations,
}

export default discoverStore
