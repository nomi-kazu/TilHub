<template>
  <v-app id="inspire">
    <TheHeader @click="onDrawer()" />
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      clipped
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
        <nuxt-link v-if="!isAuthenticated" to="/user/login">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-arrow-right</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>ログイン</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <v-list-item v-if="isAuthenticated" link @click="logout">
          <v-list-item-action>
            <v-icon>mdi-account-cancel-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <nuxt-link v-if="!isAuthenticated" to="/user/sign_up">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>新規登録</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </nuxt-link>
        <nuxt-link v-if="!isAuthenticated" to="/user/1">
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
export default {
  data: () => ({
    drawer: false
  }),

  computed: {
    isAuthenticated () {
      return this.$store.getters['authentication/isAuthenticated']
    }
  },

  methods: {
    onDrawer () {
      this.drawer = !this.drawer
    },
  
    async logout () {
      try {
        await this.$store.dispatch('authentication/logout')

        this.$router.push('/user/login')
      } catch (e) {
        console.error(e)
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
