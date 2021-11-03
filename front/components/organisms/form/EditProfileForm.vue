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
      <p>ユーザ名</p>
      <v-text-field v-model="userName" outlined dense />
    </div>

    <div class="mb-8"> 
      <p>自己紹介</p>
      <v-textarea v-model="selfIntroduction" outlined height="80" />
    </div>

    <div class="mb-8">
      <p>出身</p>
      <v-text-field v-model="from" outlined dense />
    </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    userName: undefined,
    selfIntroduction: undefined,
    from: undefined
  }),

  created() {
    // フォームに初期値を入れる
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
