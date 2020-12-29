<template>
  <div>
    <h1>Admin</h1>
    <a @click="onLogout">Logout</a>
    <div class="error">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: ''
    }
  },
  methods: {
    async onLogout () {
      try {
        // TODO: sanitize email and password values
        await this.$store.dispatch('users/logout')
        this.$router.push('/')
      } catch (err) {
        this.error = err
      }
    }
  }
}
</script>

<style scoped>

</style>
