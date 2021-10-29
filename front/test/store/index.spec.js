import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as index from '~/store/index'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/index.js', () => {
  let store

  // mockのVueインスタンスを生成
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(index))
  })

  describe('actions', () => {
    it('nuxtClientInit(正常系)', () => {
      store.dispatch('nuxtClientInit')
    })
  })
})
