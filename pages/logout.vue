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
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('ERROR:', error)
      }
    }
  }
}
</script>
