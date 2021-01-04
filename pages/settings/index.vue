<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1>Settings</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" />
      <v-col cols="8">
        <h3>Available Disciplines</h3>
        <v-list dense>
          <v-list-item-group
            color="primary"
          >
            <v-list-item
              v-for="item in disciplines"
              :key="item.id"
            >
              <v-list-item-icon />
              <v-list-item-content>
                <v-list-item-title v-text="item.text" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="2" />
    </v-row>
    <v-row>
      <v-col cols="2" />
      <v-col cols="8">
        <h3>Available Municipalities</h3>
        <v-list dense>
          <v-list-item-group
            color="primary"
          >
            <v-list-item
              v-for="item in municipalities"
              :key="item.id"
            >
              <v-list-item-icon />
              <v-list-item-content>
                <v-list-item-title v-text="item.text" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="2" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' }
      ],
      disciplines: [
        { id: 1, text: 'Development' },
        { id: 2, text: 'Building' },
        { id: 3, text: 'Electrical' },
        { id: 4, text: 'Gas' },
        { id: 5, text: 'Plumbing' },
        { id: 6, text: 'Private Sewage' }
      ],
      municipalities: [
        { id: 1, text: 'Muni 1' },
        { id: 2, text: 'Muni 2' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
