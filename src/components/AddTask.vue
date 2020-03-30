<!--<template>
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
           <form @submit="addTask">
               <input type="text" v-model="title" name="title" placeholder="Title">
               <input type="text" v-model="description" name="description" placeholder="Description">
                <input type="text" v-model="person" name="person" placeholder="Person">
                <input type="submit" value="Submit" class="btn">
            </form> 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit" value ="submit" color="blue darken-1" text v-on:click="addTask">Add</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template> -->

<template>
<form @submit="addTask">
               <input type="text" v-model="title" name="title" placeholder="Title">
               <input type="text" v-model="description" name="description" placeholder="Description">
                <input type="text" v-model="person" name="person" placeholder="Person">
                <input type="submit" value="Submit" class="btn">
            </form> 
</template>


<script>
//import uuid from 'uuid';
  export default {
      name: 'AddTask',
    data() {
        return{
            title: "",
            description: "",
            person: "",
            dialog: false
        }
    },
    methods:{
        addTask(e) {
            e.preventDefault();
            const newTask = {
                id: 4,
                title: this.title,
                description: this.description,
                person: this.person,
            }
            this.$emit('add-task', newTask);
            this.task.push(newTask);
        }
    }
  }
</script>