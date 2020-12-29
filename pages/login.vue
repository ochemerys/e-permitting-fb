<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent>
      <div>
        <input v-model="account.email" type="email" placeholder="Enter email">
      </div>
      <div>
        <input v-model="account.password" type="password" placeholder="Enter password">
      </div>
      <button @click="onSubmit">
        Submit
      </button>
    </form>
    <div class="error">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    async onSubmit () {
      try {
        // TODO: sanitize email and password values
        await this.$store.dispatch('users/login', this.account)
        this.$router.push('/admin')
      } catch (err) {
        this.error = err
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    color: white;
  }
</style>
