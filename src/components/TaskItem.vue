<template>
    <div>
        <v-card color="purple" outlined class="mb-2" v-on:del-task="$emit('del-task', task.id)">
            <v-card-title >{{task.title}}<v-spacer></v-spacer>
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
                <v-list-item-title><v-btn outlined small color="success" v-on = "on"><b>Edit</b></v-btn><br>
                <v-btn outlined small color="success" v-on = "on" @click="$emit('del-task', task.id)"><b>Delete</b></v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </div>
            </v-card-title>
            <v-card-text>{{task.description}}</v-card-text>
            <div class="text-center"><v-chip class="ma-2" color="white" outlined>
                <v-icon left>mdi-account</v-icon> {{task.person}}</v-chip></div>
        </v-card>
    </div>
</template>

<script>

export default {
    name: "TaskItem",
    props: ["task"],
    data: () => ({
      items: [
        { title: 'Edit' }
      ],
    })
}
</script>

<style scoped>

</style>