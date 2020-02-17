<template>
    <div id="three-dot-menu">
        <v-menu right offset-x>
            <template v-slot:activator="{ on }">
              <v-spacer></v-spacer>
              <v-btn
                dark
                icon
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="0"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </div>
</template>

<script>
    export default {
        name:'three-dot-menu',
    data: () => ({
      items: [
        { title: 'Edit' },
        { title: 'Delete' },
      ],
    }),
  }
</script>

<style scoped>
    
</style>