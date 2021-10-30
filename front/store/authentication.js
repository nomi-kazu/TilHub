const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => ({
  accessToken: null,
  client: null,
  uid: null,
  id: null,
  isAuthenticated: false
})

export const getters = {
  accessToken: state => state.accessToken,
  client: state => state.client,
  uid: state => state.uid,
  id: state => state.id,
  isAuthenticated: state => state.isAuthenticated
}

export const mutations = {
  clearUser (state) {
    state.accessToken = null
    state.client = null
    state.uid = null
    state.id = null
    state.isAuthenticated = false
  },
  setUser (state, res) {
    state.accessToken = res.headers['access-token']
    state.client = res.headers.client
    state.uid = res.headers.uid
    state.id = res.data.data.id
    state.isAuthenticated = true
  },
  setHeader (state, { header, authFlag }) {
    state.accessToken = header['access-token']
    state.client = header.client
    state.uid = header.uid
    state.isAuthenticated = authFlag
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
      if (Cookie !== undefined) {
        Cookie.set('access-token', getters.access_token)
        Cookie.set('client', getters.client)
        Cookie.set('uid', getters.uid)
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw new Error('Internal Server Error')
    }
  },

  // ログアウト
  async logout ({ commit }) {
    try {
      const accessToken = getters.accessToken
      const client = getters.client
      const uid = getters.uid

      await this.$axios.delete(
        '/api/v1/auth/sign_out',
        {
          headers: {
            'access-token': accessToken,
            client,
            uid
          }
        }
      )

      commit('clearUser')

      if (Cookie !== undefined) {
        Cookie.remove('access-token')
        Cookie.remove('client')
        Cookie.remove('uid')
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw new Error('Internal Server Error')
    }
  }
}