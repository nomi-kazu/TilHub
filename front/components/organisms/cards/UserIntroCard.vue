<template>
  <v-card max-width="355px" class="text-center pt-4">
    <div>
      <div>
        <v-img src="https://picsum.photos/510/300?random" class="user-icon" />
      </div>

      <p class="name">{{ getName }}</p>

      <p class="profile">{{ getProfile }}</p>

      <div class="mt-3">
        <p>FROM: {{ getAddress }}</p>

        <UserSnsBtnGroup />
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: undefined
    }
  },

  computed: {
    getName () {
      return this.userInfo.attributes && this.userInfo.attributes.name
    },

    getProfile () {
      return this.userInfo.attributes && this.userInfo.attributes.profile
    },

    getAddress () {
      return this.userInfo.attributes && this.userInfo.attributes.address
    }
  }
}
</script>

<style lang="scss" scoped>
.user-icon {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
}

.name {
  font-size: 28px;
  font-weight: bold;
}

.profile {
  width: 80%;
  margin: 0 auto;
}
</style>