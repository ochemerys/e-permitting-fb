<template>
  <v-card width="480" class="mx-auto mt-5">
    <v-card-title>
      My Profile
    </v-card-title>
    <v-card-text>
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="userEmail"
          type="email"
          label="User Email"
          prepend-icon="mdi-email"
          :rules="[rules.required, rules.email]"
          required
        />
        <v-btn
          block
          small
          @click="onChangePasswordRquest"
        >
          Request Password Change
          <v-icon right dark>
            mdi-cloud-upload
          </v-icon>
        </v-btn>
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
      // displayName: '',
      userEmail: '',
      currentDbUser: null,
      rules: {
        required: v => !!v || 'Required.',
        email: (value) => {
          const pattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
          return pattern.test(value) || 'Invalid e-mail'
        }
      }
    }
  },
  computed: {
    isUserChanged () {
      return this.userEmail !== this.currentDbUser.email
    }
  },
  created () {
    const id = this.$store.state.users.user.uid
    this.userEmail = this.$store.state.users.user.email
    this.currentDbUser = {
      uid: id,
      email: this.userEmail
    }
  },
  methods: {
    async onSubmitDetails () {
      const isValid = this.$refs.form.validate()

      if (isValid) {
        const payload = {
          uid: this.currentDbUser.uid,
          email: this.userEmail
        }
        try {
          await this.$store.dispatch('users/updateEmail', payload)
          this.$notifier.showMessage({ content: 'User email updated successfully!', color: 'success' })
          await this.$store.dispatch('users/logout')
          this.$router.push('/login')
        } catch (err) {
          this.$notifier.showMessage({ content: err.message, color: 'error' })
        }
      }
    },
    async onChangePasswordRquest () {
      // let sb
      try {
        await this.$store.dispatch('users/passwordChangeRequest', this.userEmail)
        this.$notifier.showMessage({ content: 'Check your registered email to reset the password!', color: 'primary' })
      } catch (err) {
        this.$notifier.showMessage({ content: err.message, color: 'error' })
      }
    }
  }

}
</script>

<style scoped>

</style>
