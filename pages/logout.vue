<script>
export default {
  created () {
    this.onLogout()
  },
  methods: {
    async onLogout () {
      try {
        await this.$store.dispatch('users/logout')
        this.$router.push('/')
      } catch (err) {
        this.$notifier.showMessage({ content: err.message, color: 'error' })
      }
    }
  }
}
</script>
