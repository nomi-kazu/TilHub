const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    accessToken: '',
    uid: '',
    client: '',
    id: '',
    isAuthenticated: false
  }
}
export const mutations = {
  setUser (state, res) {
    state.accessToken = res.headers['access-token']
    state.uid = res.headers.uid
    state.client = res.headers.client
    state.id = res.data.data.id
    state.isAuthenticated = true
  },
  setHeader (state, header) {
    state.accessToken = header['access-token']
    state.uid = header.uid
    state.client = header.client
    state.isAuthenticated = true
  },
  clearUser (state) {
    state.accessToken = null
    state.isAuthenticated = null
    state.uid = null
    state.client = null
    state.id = null
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    try {
      await this.$axios.post('/api/v1/auth/sign_in', { email, password }
      ).then((res) => {
        console.log(res.data.data.uid)
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
      console.log(parsed)
      commit('setHeader', parsed)
    } catch (err) {
      // No valid cookie found
    }
  }
}
