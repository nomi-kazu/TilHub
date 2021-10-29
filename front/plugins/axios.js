export default ({ $axios, store }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    console.log(config)
    $axios.setHeader('access-token', store.getters['authentication/accessToken'])
    $axios.setHeader('uid', store.getters['authentication/uid'])
    $axios.setHeader('client', store.getters['authentication/client'])
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    console.log(config)
  })
  // エラーログ
  $axios.onError((e) => {
    console.log(e.response)
  })
}
