<template>
  <v-card width="400" class="mx-auto mt-5" data-test-id="login-card">
    <v-card-title class="headline">
      Login
    </v-card-title>
    <v-card-text>
      <v-form ref="form" lazy-validation @submit.prevent>
        <v-text-field
          v-model="userEmail"
          data-test-id="login-form-email"
          type="email"
          label="User Email"
          prepend-icon="mdi-account-circle"
          :rules="[rules.required, rules.email]"
          required
        />
        <v-text-field
          v-model="userPassword"
          data-test-id="login-form-password"
          :type="showPassword ? 'text': 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          required
          @click:append="showPassword=!showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn color="info" data-test-id="login-form-submit" @click="onSubmitForm">
        Submit
      </v-btn>
      <v-btn color="default" data-test-id="login-form-cancel" @click="onCancel">
        Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      showPassword: false,
      userEmail: '',
      userPassword: '',
      rules: {
        required: value => !!value || 'Required.',
        email: (value) => {
          const pattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
          return pattern.test(value) || 'Invalid e-mail'
        }
      }
    }
  },
  methods: {
    onCancel () {
      // e.preventDefault();
      this.$router.push('/')
    },
    async onSubmitForm () {
      const isValid = this.$refs.form.validate()
      if (!isValid) { return }

      try {
        const payload = {
          email: this.userEmail,
          password: this.userPassword
        }
        await this.$store.dispatch('users/login', payload)
        this.$router.push('/permitting')
      } catch (err) {
        // TODO: snackbar
        // eslint-disable-next-line no-console
        console.log('ERROR:', err)
      }
    }
  }
}
</script>

<style scoped>

</style>
