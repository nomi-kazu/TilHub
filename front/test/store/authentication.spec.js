import Vuex from 'vuex'
import axios from 'axios'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import * as authentication from '~/store/authentication'

const localVue = createLocalVue()
localVue.use(Vuex)

// axiosのmock
let mockAxiosGetResult // Axiosで発生させる戻り値
let mockAxiosError = false // Errorを発生させるかどうか
jest.mock('axios', () => ({
  post: jest.fn(() => {
    if (mockAxiosError) {
      return Promise.reject(mockAxiosGetResult)
    }
    return Promise.resolve(mockAxiosGetResult)
  }),

  delete: jest.fn(() => {
    if (mockAxiosError) {
      return Promise.reject(mockAxiosGetResult)
    }
    return Promise.resolve(mockAxiosGetResult)
  })
}))

describe('store/authentication.js', () => {
  let store

  // mockのVueインスタンスを生成
  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(authentication))
  })

  describe('mutaions', () => {
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

    it('setUserとclearUserの正常系', () => {
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

  describe('actions', () => {
    beforeEach(() => {
      store.$axios = axios // @nuxtjs/axiosの代わりにaxiosを注入
      mockAxiosError = false // テストをする前に、falseに戻す
    })

    it('loginできる(正常系)', async () => {
      mockAxiosGetResult = {
        headers: {
          'access-token': '5TbbNpg2JGQ-V__bsZW7Tp',
          uid: 'test@example.com',
          client: 'MWwmbOyga_5G0B_a3hxOas'
        },
        data: { data: { id: '1' } }
      }

      await store.dispatch('login', { email: 'test@example.com', password: 'password' })

      expect(store.getters.accessToken).toBe('5TbbNpg2JGQ-V__bsZW7Tp')
      expect(store.getters.client).toBe('MWwmbOyga_5G0B_a3hxOas')
      expect(store.getters.id).toBe('1')
      expect(store.getters.uid).toBe('test@example.com')
      expect(store.getters.isAuthenticated).toBeTruthy()
    })

    it('loginできない(異常系:Internal Server Error)', async () => {
      mockAxiosError = true
      mockAxiosGetResult = {
        reponse: {
          status: 500
        }
      }

      await expect(
        store.dispatch('login', { email: 'test@example.com', password: 'password' })
      ).rejects.toThrow('Internal Server Error')
    })

    it('loginできない(異常系:Bad credentials)', async () => {
      mockAxiosError = true
      mockAxiosGetResult = {
        response: {
          status: 401
        }
      }

      await expect(
        store.dispatch('login', { email: 'test@example.com', password: 'password' })
      ).rejects.toThrow('Bad credentials')
    })

    it('logoutできる(正常系)', async () => {
      const res = {
        headers: {
          'access-token': '5TbbNpg2JGQ-V__bsZW7Tp',
          uid: 'test@example.com',
          client: 'MWwmbOyga_5G0B_a3hxOas'
        },
        data: { data: { id: '1' } }
      }
      store.commit('setUser', res)

      mockAxiosGetResult = {
        success: 'true'
      }

      await store.dispatch('logout')

      expect(store.getters.accessToken).toBeNull()
      expect(store.getters.client).toBeNull()
      expect(store.getters.id).toBeNull()
      expect(store.getters.uid).toBeNull()
      expect(store.getters.isAuthenticated).toBeFalsy()
    })

    it('logoutできない(異常系:Internal Server Error)', async () => {
      mockAxiosError = true
      mockAxiosGetResult = {
        reponse: {
          status: 500
        }
      }

      await expect(
        store.dispatch('logout')
      ).rejects.toThrow('Internal Server Error')
    })

    it('logoutできない(異常系:Bad credentials)', async () => {
      mockAxiosError = true
      mockAxiosGetResult = {
        response: {
          status: 401
        }
      }

      await expect(
        store.dispatch('logout')
      ).rejects.toThrow('Bad credentials')
    })
  })
})
