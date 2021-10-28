<template>
  <div>
    <div class="top">
      <h3 class="name">
        {{ data.data.attributes.name }}
      </h3>
      <nuxt-link to="/user/edit/1">
        編集する
      </nuxt-link>
    </div>
    <div class="cards">
      <div class="card">
        <h3>ユーザID： {{ $store.state.id }}</h3>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authenticated',
  asyncData ({ $axios, params }) {
    return $axios.$get(`/api/v1/users/${params.id}`)
      .then((res) => {
        return { data: res }
      })
  }
}
</script>

<style scoped lang="scss">
  .top {
    background: #f9f9f9;
    height: 100px;
    position: relative;

    .name {
        position: absolute;
        left: 40px;
        top: 10px;
    }
  }
  .cards {
    margin: 20px auto;
    width: 80%;
    height: 600px;
    border: 1px solid #b2bec3;
  }
</style>
