const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    access_token: '',
    uid: '',
    client: '',
    id: ''
  }
}
export const mutations = {
  setUser (state, res) {
    state.access_token = res.headers['access-token']
    state.uid = res.headers.uid
    state.client = res.headers.client
    state.id = res.data.data.id
  },
  setHeader (state, header) {
    state.access_token = header['access-token']
    state.uid = header.uid
    state.client = header.client
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
