const cookieparser = process.server ? require('cookieparser') : undefined

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
  async login ({ commit }, { email, password }) {
    try {
      await this.$axios.post('/api/v1/auth/sign_in', {
        email,
        password
      })
        .then((res) => {
          commit('setUser', res)
        })
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout ({ commit }, { accessToken, client, uid }) {
    try {
      await this.$axios.delete('/api/v1/auth/sign_out', {
        headers: {
          'access-token': accessToken,
          client,
          uid
        }
      })
      commit('clearUser')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  nuxtClientInit ({ commit }) {
    const parsed = cookieparser
    try {
      const authFlag = parsed.uid
      commit('setHeader', { header: parsed, authFlag })
    } catch (err) {
      // No valid cookie found
    }
  }
}
