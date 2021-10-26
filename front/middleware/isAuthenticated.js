export default function ({ store, redirect }) {
  // ユーザーが認証されていないとき
  if (!store.state.isAuthenticated) {
    redirect('/user/login')
  }
}
