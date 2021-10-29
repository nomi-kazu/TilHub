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

  describe('mutaions', () => {
    it('setUserの正常系', () => {
      expect(store.getters.accessToken).toBeNull()
      expect(store.getters.client).toBeNull()
      expect(store.getters.id).toBeNull()
      expect(store.getters.uid).toBeNull()
      expect(store.getters.isAuthenticated).toBeFalsy()

      const res = {
        headers: {
          'access-token': '5TbbNpg2JGQ-V__bsZW7Tp',
          uid: 'test@example.com',
          client: 'MWwmbOyga_5G0B_a3hxOas'
        },
        data: { data: { id: '1' } }
      }
      store.commit('setUser', res)

      expect(store.getters.accessToken).toBe('5TbbNpg2JGQ-V__bsZW7Tp')
      expect(store.getters.client).toBe('MWwmbOyga_5G0B_a3hxOas')
      expect(store.getters.id).toBe('1')
      expect(store.getters.uid).toBe('test@example.com')
      expect(store.getters.isAuthenticated).toBeTruthy()
    }),

    it('setHeaderの正常系', () => {
      expect(store.getters.accessToken).toBeNull()
      expect(store.getters.client).toBeNull()
      expect(store.getters.uid).toBeNull()
      expect(store.getters.isAuthenticated).toBeFalsy()

      const parsedCookie = {
        'access-token': '5TbbNpg2JGQ-V__bsZW7Tp',
        uid: 'test@example.com',
        client: 'MWwmbOyga_5G0B_a3hxOas'
      }

      store.commit('setHeader', { header: parsedCookie, authFlag: true })

      expect(store.getters.accessToken).toBe('5TbbNpg2JGQ-V__bsZW7Tp')
      expect(store.getters.client).toBe('MWwmbOyga_5G0B_a3hxOas')
      expect(store.getters.uid).toBe('test@example.com')
      expect(store.getters.isAuthenticated).toBeTruthy()
    })

    it('clearUserの正常系', () => {
      expect(store.getters.accessToken).toBeNull()
      expect(store.getters.client).toBeNull()
      expect(store.getters.id).toBeNull()
      expect(store.getters.uid).toBeNull()
      expect(store.getters.isAuthenticated).toBeFalsy()

      const res = {
        headers: {
          'access-token': '5TbbNpg2JGQ-V__bsZW7Tp',
          uid: 'test@example.com',
          client: 'MWwmbOyga_5G0B_a3hxOas'
        },
        data: { data: { id: '1' } }
      }
      store.commit('setUser', res)

      expect(store.getters.accessToken).toBe('5TbbNpg2JGQ-V__bsZW7Tp')
      expect(store.getters.client).toBe('MWwmbOyga_5G0B_a3hxOas')
      expect(store.getters.id).toBe('1')
      expect(store.getters.uid).toBe('test@example.com')
      expect(store.getters.isAuthenticated).toBeTruthy()

      store.commit('clearUser')
      expect(store.getters.accessToken).toBeNull()
      expect(store.getters.client).toBeNull()
      expect(store.getters.id).toBeNull()
      expect(store.getters.uid).toBeNull()
      expect(store.getters.isAuthenticated).toBeFalsy()
    })
  })
})
