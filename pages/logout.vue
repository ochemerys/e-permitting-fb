<script>
export default {
  async mounted () {
    try {
      await this.$store.dispatch('users/logout')
      this.$router.push('/')
    } catch (err) {
      this.$notifier.showMessage({ content: err.message, color: 'error' })
    }
  }
}
</script>

<template>
  <div />
</template>
