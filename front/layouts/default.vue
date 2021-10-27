<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <nuxt-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>ホーム</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link v-if="!($store.state.isAuthenticated)" to="/user/login">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-arrow-right</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>ログイン</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <v-list-item v-if="!($store.state.isAuthenticated)" link @click="logout">
          <v-list-item-action>
            <v-icon>mdi-account-cancel-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <nuxt-link v-if="!($store.state.isAuthenticated)" to="/user/sign_up">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>新規登録</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link v-if="!($store.state.isAuthenticated)" to="/user/1">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-details</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>マイページ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>

    <v-card class="overflow-hidden header">
      <v-app-bar
        absolute
        elevate-on-scroll
        app
        color="white"
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="100vh"
      >
        <v-main>
          <nuxt />
        </v-main>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  props: {
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('logout',
          {
            accessToken: Cookie.get('access-token'),
            client: Cookie.get('client'),
            uid: Cookie.get('uid')
          })
        Cookie.remove('access-token')
        Cookie.remove('client')
        Cookie.remove('uid')
        this.$router.push('/user/login')
      } catch (e) {
        console.log(this.formError)
      }
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .main {
    margin-top: 10px;
  }
</style>
