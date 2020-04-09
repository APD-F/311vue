<template>
    <div id="KanbanBoard">
    <v-container>
    <v-row>
        <v-col :cols="4">
            <v-card hover tile elevation="2" color="blue">
                    <div class="ma-5">



                







                    <v-card-title>Backlog
                        <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add new task</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add New Task</span>
        </v-card-title>
        <v-card-text>
      <v-form @submit="add">
                <v-text-field v-model="title" placeholder="Title">
                    </v-text-field>
                    <v-text-field v-model="description" placeholder="Description">
                    </v-text-field>
                    <v-text-field v-model="person" placeholder="Person">
                    </v-text-field>
                    <v-btn @click="add">Add</v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog> 
                    </v-card-title>
                    <v-card-text>
            <draggable class="list-group" :list="arrBacklog" group="tasks">
                <div class="list-group-item" v-for="element in arrBacklog" :key="element.name">
                    <!--{{element.name}}-->
                    
                        <v-card color="grey" outlined class="mb-2">
                        <v-card-title >{{element.title}}<v-spacer></v-spacer>
                        
                                
                        
                        </v-card-title>
                        <v-card-text>{{element.description}}</v-card-text>
                        <div class="text-center"><v-chip class="ma-2" color="white" outlined>
                        <v-icon left>mdi-account</v-icon> {{element.person}}</v-chip></div>
                        </v-card>
                    
                    </div>
            </draggable>
            </v-card-text>
                    </div>
                    </v-card>    
        </v-col>
        <v-col :cols="4">
            <v-card hover tile elevation="2" color="yellow">
                    <div class="ma-5">
                    <v-card-title>In Progress</v-card-title>
                    <v-card-text>
            <draggable class="list-group" :list="arrInProgress" group="tasks">
                <div class="list-group-item" v-for="element in arrInProgress" :key="element.name">
                    <!--{{element.name}}-->
                    
                        <v-card color="grey" outlined class="mb-2">
                        <v-card-title >{{element.title}}<v-spacer></v-spacer><three-dot-menu></three-dot-menu></v-card-title>
                        <v-card-text>{{element.description}}</v-card-text>
                        <div class="text-center"><v-chip class="ma-2" color="white" outlined>
                        <v-icon left>mdi-account</v-icon> {{element.person}}</v-chip></div>
                        </v-card>
                    
                    </div>
            </draggable>
            </v-card-text>
                    </div>
                    </v-card>    
        </v-col>
        <v-col :cols="4">
            <v-card hover tile elevation="2" color="green">
                    <div class="ma-5">
                    <v-card-title>Completed</v-card-title>
                    <v-card-text>
            <draggable class="list-group" :list="arrDone" group="tasks">
                <div class="list-group-item" v-for="element in arrDone" :key="element.name">
                    <!--{{element.name}}-->
                    
                        <v-card color="grey" outlined class="mb-2">
                        <v-card-title >{{element.title}}<v-spacer></v-spacer>
                        
                        
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
                                <v-list-item-title>
                        <v-btn @click="deleteTask(element.id)">del</v-btn>
                                </v-list-item-title>
                                </v-list-item>
                                </v-list>
                                </v-menu>
                        
                        
                        
                        </v-card-title>
                        <v-card-text>{{element.description}}</v-card-text>
                        <div class="text-center"><v-chip class="ma-2" color="white" outlined>
                        <v-icon left>mdi-account</v-icon> {{element.person}}</v-chip></div>
                        </v-card>
                    
                    </div>
            </draggable>
            </v-card-text>



            

            </div>
            </v-card>
        </v-col>
    </v-row>
    </v-container>
        
            
        
    </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
    name:'KanbanBoard',
    data() {
        return{
            title: "",
            description: "",
            person: "",
            arrBacklog: [
                {
                    id:1,
                    title: "Task1",
                    description: "A very Important task1",
                    person: "Person1"
                },
                {
                    id:2,
                    title: "Task2",
                    description: "A very Important task2",
                    person: "Person2"
                },
                {
                    id:3,
                    title: "Task3",
                    description: "A very Important task3",
                    person: "Person3"
                }
            ],
            arrInProgress:[],
            arrDone:[],
            arrDel:[],
            dialog: false,
            items: [
        { title: 'Delete' }
      ],
        }
    },
    components: {
        draggable
    },
    methods:{
        add() {
            const newTask = {
                id: this.arrBacklog.length+this.arrInProgress.length+this.arrDone.length+1,
                title: this.title,
                description: this.description,
                person: this.person
            }
            this.arrBacklog = [...this.arrBacklog, newTask];
            this.submittask();
            //this.arrBacklog.push({id: this.arrBacklog.length+this.arrInProgress.length+this.arrDone.length+1,title: this.title, description: this.description, person:this.person})
            this.title="";
            this.description="";
            this.person="";
            this.dialog = false;
            
        },
        
        //deleteAnn(element) {
            //this.arrDone.splice(element,1)
            deleteTask(id){
                this.arrDone = this.arrDone.filter(element => element.id != id);
    },
    submittask() {
      this.$http.post('./api/tasks/createTask.php', this.tasks[0])
          .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
    }
    }
}
</script>