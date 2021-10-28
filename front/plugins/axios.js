export default ({ $axios, store }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    console.log(config)
    $axios.setHeader('access-token', store.state.access_token)
    $axios.setHeader('uid', store.state.uid)
    $axios.setHeader('client', store.state.client)
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
