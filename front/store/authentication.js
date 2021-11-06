import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const state = () => ({
  accessToken: null,
  client: null,
  uid: null,
  id: null
})

export const getters = {
  accessToken: state => state.accessToken,
  client: state => state.client,
  uid: state => state.uid,
  id: state => state.id,
  isAuthenticated: state => !!state.uid
}

export const mutations = {
  clearUser (state) {
    state.accessToken = null
    state.client = null
    state.uid = null
    state.id = null
  },

  setUser (state, res) {
    state.accessToken = res.headers['access-token']
    state.client = res.headers.client
    state.uid = res.headers.uid
    state.id = res.data.data.id
  },

  setHeader (state, { headers }) {
    state.accessToken = headers['access-token']
    state.client = headers.client
    state.uid = headers.uid
  }
}

export const actions = {

  // ログイン
  async login ({ commit, getters }, { email, password }) {
    try {
      const res = await this.$axios.post('/api/v1/auth/sign_in', {
        email,
        password
      })

      commit('setUser', res)

      // Cookieにセット
      cookies.set('access-token', getters.accessToken)
      cookies.set('client', getters.client)
      cookies.set('uid', getters.uid)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw new Error('Internal Server Error')
    }
  },

  // ログアウト
  async logout ({ commit, getters }) {
    try {
      await this.$axios.delete(
        '/api/v1/auth/sign_out',
        {
          headers: {
            'access-token': getters.accessToken,
            client: getters.client,
            uid: getters.uid
          }
        }
      )

      commit('clearUser')

      cookies.remove('access-token')
      cookies.remove('client')
      cookies.remove('uid')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw new Error('Internal Server Error')
    }
  }
}
