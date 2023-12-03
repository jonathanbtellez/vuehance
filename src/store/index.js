import { createStore } from 'vuex'
import discoverStore from './discover'

export default createStore({
  modules: {
    discoverStore
  }
})
