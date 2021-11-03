<template>
  <v-app id="inspire">
    <TheHeader @click="onDrawer()" />
    <TheSidebar :drawer="drawer" />

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

  methods: {
    onDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>
