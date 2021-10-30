import Cookies from 'universal-cookie'

export const actions = {
  nuxtClientInit ({ commit, authFlag }) {
    const cookies = new Cookies()
    authFlag = false
    if (cookies.cookies.uid) {
      authFlag = true
    }
    commit('authentication/setHeader', { headers: cookies.cookies, authFlag })
  }
}
