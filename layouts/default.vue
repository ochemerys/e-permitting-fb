<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in availableMainMenuItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <span class="hidden-sm-and-down">
        <v-btn v-if="isLoggedIn" plain to="/profile">
          {{ loggedUser }}
        </v-btn>
        <v-btn v-if="!isLoggedIn" plain to="/login">
          Login
        </v-btn>
        <v-btn v-else plain to="/logout">
          Logout
        </v-btn>
      </span>
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="hidden-md-and-up"
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list flat>
          <v-list-item
            v-for="(item, i) in availableSubMenuItems"
            :key="i"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} - <strong>ePermitting </strong></span>
    </v-footer>
    <app-snackbar />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import AppSnackbar from '@/components/app-snackbar.vue'

export default {
  components: {
    AppSnackbar
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      mainMenuItems: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
          requiresAuth: false,
          requiresAdmin: false
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'My Permits',
          to: '/permitting',
          requiresAuth: true,
          requiresAdmin: false
        },
        {
          icon: 'mdi-cog-outline',
          title: 'Settings',
          to: '/settings',
          requiresAuth: true,
          requiresAdmin: true
        }
      ],
      miniVariant: false,
      right: true,
      title: 'ePermit',
      subMenuItems: [
        { icon: 'mdi-account-edit', title: 'My Profile', to: '/profile', requiresAuth: true },
        { icon: 'mdi-account-check', title: 'Register', to: '/register', requiresAuth: false },
        { icon: 'mdi-lock-open-variant', title: 'Login', to: '/login', requiresAuth: false },
        { icon: 'mdi-lock', title: 'Logout', to: '/logout', requiresAuth: true }
      ]
    }
  },
  computed: {
    ...mapGetters(
      {
        isLoggedIn: 'users/isUserLoggedIn',
        isAdmin: 'users/isUserAdmin',
        loggedUser: 'users/loggedUserName'
      }
    ),
    availableMainMenuItems () {
      const isAuthed = this.isLoggedIn
      const isAdmin = this.isAdmin
      return this.mainMenuItems.filter((item) => {
        const authValid = !item.requiresAuth || (item.requiresAuth && isAuthed)
        const adminValid = !item.requiresAdmin || (item.requiresAdmin && isAdmin)
        return authValid && adminValid
      })
    },
    availableSubMenuItems () {
      const isAuthed = this.isLoggedIn
      return this.subMenuItems.filter((item) => {
        return item.requiresAuth === isAuthed
      })
    }
  }
}
</script>
