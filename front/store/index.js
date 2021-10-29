const cookieparser = process.server ? require('cookieparser') : undefined

export const actions = {
  nuxtClientInit ({ commit }) {
    if (cookieparser !== undefined) {
      const parsed = cookieparser
      try {
        const authFlag = parsed.uid
        commit('authentication/setHeader', { header: parsed, authFlag })
      } catch (err) {
        // No valid cookie found
      }
    }
  }
}
