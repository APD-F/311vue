<template>
    <div id="team-list">
            <v-list disabled>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </div>
</template>

<script>
    export default {
    data: () => ({
      items: [
        { text: 'Aidan', icon: 'mdi-account' },
        { text: 'Anson', icon: 'mdi-account' },
        { text: 'Marco', icon: 'mdi-account' },
        { text: 'Sahej', icon: 'mdi-account' },
      ],
    }),
  }
</script>

<style scoped>
    
</style>