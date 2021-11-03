<template>
  <div>
    <TwitterBtn fab :v-if="twitterLinkIsExists" />
    <GithubBtn fab :v-if="githubLinkIsExists" />
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
