<template>
  <v-card width="480" class="mx-auto mt-5">
    <v-card-title>
      Register
    </v-card-title>
    <v-card-text>
      <v-form ref="form" lazy-validation>
        <!-- <v-text-field
          v-model="displayName"
          type="text"
          label="User Name"
          prepend-icon="mdi-account-circle"
          :rules="[rules.required]"
          required
        /> -->
        <v-text-field
          v-model="userEmail"
          type="email"
          label="User Email"
          prepend-icon="mdi-email"
          :rules="[rules.required, rules.email]"
          required
        />
        <v-text-field
          v-model="userPassword"
          :type="showPassword ? 'text': 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[
            rules.required,
            rules.pswdMinLength,
            rules.pswdUpper,
            rules.pswdNumber,
            rules.pswdSpecial
          ]"
          required
          @click:append="showPassword=!showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="info"
        :disabled="!isUserChanged"
        @click="onSubmitDetails"
      >
        Submit
      </v-btn>
      <v-btn to="/">
        Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      displayName: '',
      userPassword: '',
      userEmail: '',
      showPassword: false,
      rules: {
        required: v => !!v || 'Required.',
        pswdMinLength: v => !v || (v && v.length >= 6) || 'Must have 5+ characters',
        pswdUpper: v => !v || /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
        pswdNumber: v => !v || /(?=.*\d)/.test(v) || 'Must have one number',
        pswdSpecial: v => !v || /([!@$%])/.test(v) || 'Must have one special character [!@#$%]',
        email: (value) => {
          const pattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
          return pattern.test(value) || 'Invalid e-mail'
        }
      }
    }
  },
  computed: {
    isUserChanged () {
      // this.displayName !== '' &&
      return this.userEmail !== '' &&
        this.userPassword !== ''
    }
  },
  methods: {
    async onSubmitDetails () {
      const isValid = this.$refs.form.validate()

      if (isValid) {
        const payload = {
          displayName: this.displayName,
          email: this.userEmail,
          password: this.userPassword
        }
        try {
          await this.$store.dispatch('users/create', payload)
        } catch (err) {
          this.$notifier.showMessage({ content: err.message, color: 'error' })
          return
        }
        this.$router.push('/login')
      }
    }
  }

}
</script>

<style scoped>

</style>
