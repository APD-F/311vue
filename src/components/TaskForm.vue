<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-layout align-end justify-end><v-btn outlined small color="success" v-on = "on"><b>Add Task</b></v-btn></v-layout>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create New Task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Title*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Description*" required></v-textarea>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Anson', 'Sahej', 'Marco', 'Aidan']"
                  label="Team Member*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Red', 'Green', 'Purple', 'Yellow']"
                  label="Colour"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Add</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  export default {
      name: 'addTask',
    data: () => ({
      dialog: false,
    }),
  }
</script>