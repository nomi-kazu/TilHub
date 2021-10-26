<template>
  <section>
    <h1>マイページ</h1>
    <p>{{ data }}</p>
    <hr>
    <h3>名前： {{ data.data.attributes.name }}</h3>
    <h3>ユーザID： {{ $store.state.id }}</h3>
    <nuxt-link to="/">Home</nuxt-link>
  </section>
</template>

<script>
export default {
  asyncData ({ $axios, params }) {
    return $axios.$get(`/api/v1/users/${params.id}`)
      .then((res) => {
        return { data: res }
      })
  }
}
</script>
