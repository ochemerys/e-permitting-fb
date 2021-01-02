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
          <p>
            ePermitting is Progressive Web Application which supports offline mode and can be installed on mobile devices.
          </p>
          <ul>
            <li>
              Android: open Chrome browser and navigate to ePermitting.
              Tap the three-dot overflow menu in the top-right corner and then select "Add to home screen."
              Chrome will prompt you to enter a name for the app before adding it to your home screen.
            </li>
            <li>
              iOS: open Safary browser and navigate to ePermitting website.
              Tap the "Share" button and then tap "Add to Home Screen". Enter the name for the app and then tap add.
            </li>
          </ul>
        </v-card-text>
        <v-divider v-if="!isLoggedIn" />
        <v-card-actions v-if="!isLoggedIn">
          <v-spacer />
          <v-btn
            v-if="!isProduction"
            color="primary"
            nuxt
            to="/register"
          >
            Register
          </v-btn>
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
      isProduction: false
    }
  },
  computed: {
    ...mapGetters({ isLoggedIn: 'users/isUserLoggedIn' })
  }

}
</script>
