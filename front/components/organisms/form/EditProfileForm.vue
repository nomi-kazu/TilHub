<template>
  <v-form>
    <div>
      <p>プロフィール画像</p>
      <div>
        <v-img  src="https://picsum.photos/200/300?random" class="mr-2" />
        <PreviewImageFileInput />
      </div>
    </div>

    <div class="mb-8">
      <p>名前</p>
      <v-text-field v-model="name" outlined dense />
    </div>

    <div class="mb-8"> 
      <p>自己紹介</p>
      <v-textarea v-model="profile" outlined height="80" />
    </div>

    <div class="mb-8">
      <p>出身</p>
      <v-text-field v-model="address" outlined dense />
    </div>

    <div class="d-flex justify-center mt-5">
      <OrangeBtn @click="save">保存する</OrangeBtn>
    </div>
  </v-form>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: undefined
    }
  },

  data: () => ({
    name: undefined,
    profile: undefined,
    address: undefined
  }),

  created () {
    this.name = this.info.attributes.name
    this.profile = this.info.attributes.profile
    this.address = this.info.attributes.address
    console.log(this.info)
  },

  methods: {
    async save () {
      try {
        await this.$axios.put('/api/v1/auth', {
          name: this.name,
          profile: this.profile,
          address: this.address
        })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style>
.v-form {
  width: 80%;
  text-align: left;
}
.v-img {
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
