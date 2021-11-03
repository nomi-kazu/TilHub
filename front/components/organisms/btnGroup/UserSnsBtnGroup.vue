<template>
  <div>
    <TwitterBtn v-if="twitterLinkIsExists" fab />
    <GithubBtn v-if="githubLinkIsExists" fab />
  </div>
</template>

<script>
export default {
  computed: {
    twitterLinkIsExists () {
      // Twitterリンクが存在したらtrueを返す
      return false
    },

    githubLinkIsExists () {
      // Githubリンクが存在したらtrueを返す
      return false
    }
  }
}
</script>
