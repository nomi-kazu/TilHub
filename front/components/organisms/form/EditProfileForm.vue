<template>
  <v-form>
    <div>
      <p>プロフィール画像</p>
      <div>
        <img src="https://picsum.photos/200/300?random" class="mr-2" />
        <PreviewImageFileInput />
      </div>
    </div>

    <div class="mb-8">
      <p>名前</p>
      <v-text-field v-model="user.name" outlined dense />
    </div>

    <div class="mb-8"> 
      <p>自己紹介</p>
      <v-textarea v-model="user.profile" outlined height="80" />
    </div>

    <div class="mb-8">
      <p>出身</p>
      <v-text-field v-model="user.address" outlined dense />
    </div>

    <div class="d-flex justify-center mt-5">
      <OrangeBtn @click="onClick">保存する</OrangeBtn>
    </div>
  </v-form>
</template>

<script>
class UserInfo {
  constructor () {
    this.name = null
    this.profile = null
    this.address = null
  }

  infoToUserInfo (info) {
    this.name = info && info.attributes && info.attributes.name
    this.profile = info && info.attributes && info.attributes.profile
    this.address = info && info.attributes && info.attributes.address
  }
}

export default {
  props: {
    info: {
      type: Object,
      default: undefined
    }
  },

  data: () => ({
    user: new UserInfo
  }),

  created () {
    this.user.infoToUserInfo(this.info)
  },

  methods: {
    onClick () {
      this.$emit('save', this.user)
    }
  }
}
</script>

<style>
.v-form {
  width: 80%;
  text-align: left;
}
img {
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
