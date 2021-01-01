<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <!-- <logo />
        <vuetify-logo /> -->
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to ePermitting
        </v-card-title>
        <v-card-text>
          <p>
            ePermitting is a NUXT and Firebase boilerplate impelmented with Vuetify UI framework.
          </p>
          <p>
            It supports Firepase Authentication / Authorization and Firestore.
          </p>
        </v-card-text>
        <v-divider v-if="!isLoggedIn" />
        <v-card-actions v-if="!isLoggedIn">
          <v-spacer />
          <!-- <v-btn
            color="primary"
            nuxt
            to="/register"
          >
            Register
          </v-btn> -->
          <v-btn
            color="primary"
            nuxt
            to="/login"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({ isLoggedIn: 'users/isUserLoggedIn' })
  }

}
</script>
