import Cookies from 'universal-cookie'

export const actions = {
  nuxtClientInit ({ commit }) {
    const cookies = new Cookies()
    commit('authentication/setHeader', { headers: cookies })
  }
}
