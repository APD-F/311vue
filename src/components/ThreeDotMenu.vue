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
                <v-list-item-title><v-btn outlined small color="success" v-on = "on"><b>Edit</b></v-btn>
                <v-btn outlined small color="success" v-on = "on" @click="$emit('del-task', task.id)"><b>Delete</b></v-btn>
                </v-list-item-title>
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
        { title: 'Edit' }
      ],
    }),
  }
</script>

<style scoped>
    
</style>