<template>
  <v-card>
    <div>
      <v-img src="https://picsum.photos/510/300?random" class="user-icon" />
    </div>

    <p class="name">{{ userInfo.attributes.name }}</p>

    <p class="profile">{{ userInfo.attributes.profile }}</p>

    <div>
      <p>FROM: {{ userInfo.attributes.address }}</p>

      <UserSnsBtnGroup />
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
  }
}
</script>

<style scoped>
.user-icon {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
}

.name {
  font-size: 28px;
  font-weight: bold;
}

.profile {
  width: 80%;
}
</style>