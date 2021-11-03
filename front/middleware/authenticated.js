export default function ({ store, redirect }) {
  // ユーザーが認証されていないとき
  if (!store.getters['authentication/isAuthenticated']) {
    redirect('/signin')
  }
}
