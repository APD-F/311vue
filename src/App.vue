<template>
<v-app>
  
  <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link @click="changePage(2)">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Main Page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="changePage(1)">
          <v-list-item-action>
            <v-icon>mdi-calendar-clock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Meeting Page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="changePage(3)">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Personal Page</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="changePage(4)">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        
      <template v-slot:append>
        <div class="pa-2 text-center">
          <v-btn rounded color="red" dark >Logout</v-btn>
        </div>
      </template>  
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
        :color="projectColor"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Group<b>Awesome</b></v-toolbar-title>
      <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
          absolute
          right
          top
        >
          Select Project <v-icon dark right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="0"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>
    <div id="app" class="small-container">
      
    <!--                            The Navigation                    -->
    
    <!--                          The Meetings Page                                -->
    <div v-if="activePage == 1">
    <v-container>
    <v-row>
    <v-col :cols="4">
    <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>Create a Meeting</v-card-title>
            <v-card-text>
                <meeting-form @add:meeting="addMeeting"/>
            </v-card-text>
        </div>
    </v-card>
    </v-col>
    <v-col>
    <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>Meetings</v-card-title>
            <v-card-text>
    <meetings-table
            :meetings="meetings"
            @delete:meeting="deleteMeeting"
            @edit:employee="editMeeting"/> <!--work in progress-->
            </v-card-text>
        </div>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
    </div>
    
    <!--                               The Main Page                                 -->
    <div v-if="activePage == 2">
      <v-container>
    <v-row>
    <!--<v-col :cols="4">
    <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>Backlog<v-layout align-end justify-end><v-btn outlined small color="success"><b>Add Task</b></v-btn></v-layout></v-card-title>
            <v-card-text>
                <tasks v-bind:tasks="tasks" v-on:del-task="deleteTask"/>
                <AddTask v-on:add-task="addTask"/>
            </v-card-text>
        </div>
    </v-card>
    </v-col>
    <v-col :cols="4">
    <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>In Progress</v-card-title>
            <v-card-text>
                <v-card color="purple" outlined class="mb-2">
            <v-card-title >Task3<v-spacer></v-spacer><three-dot-menu></three-dot-menu></v-card-title>
            <v-card-text>Such an important task</v-card-text>
            <div class="text-center"><v-chip class="ma-2" color="white" outlined>
                <v-icon left>mdi-account</v-icon> Person 3</v-chip></div>
        </v-card>
                <v-card color="green" outlined class="mb-2">
            <v-card-title >Task4<v-spacer></v-spacer><three-dot-menu></three-dot-menu></v-card-title>
            <v-card-text>Such an important task</v-card-text>
            <div class="text-center"><v-chip class="ma-2" color="white" outlined>
                <v-icon left>mdi-account</v-icon> Person 1</v-chip></div>
        </v-card>
                
            </v-card-text>
        </div>
    </v-card>
    </v-col>
    <v-col :cols="4">
    <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>Finished</v-card-title>
            <v-card-text>
              <v-card color="grey" outlined class="mb-2">
            <v-card-title >Task5<v-spacer></v-spacer><three-dot-menu></three-dot-menu></v-card-title>
            <v-card-text>Such an important task</v-card-text>
            <div class="text-center"><v-chip class="ma-2" color="white" outlined>
                <v-icon left>mdi-account</v-icon> Person 2</v-chip></div>
        </v-card>
            </v-card-text>
        </div>
    </v-card>
    </v-col>-->
    <v-col :cols="12">
      <button @click="changeMode1()">Click me</button>
      <p>{{users}}</p>
    <KanbanBoard/>
    </v-col>
    </v-row>
    <v-row>
        <v-col :cols="12">
                <Announcement/>
        </v-col>
        <!--<v-col :cols="6">
            <v-card>
                <v-card-title>Progress</v-card-title>
            </v-card>
            
        </v-col>-->
    </v-row>
    </v-container>
    </div> 
        
    <!--                              The Personal Page                                -->
    <div v-if="activePage == 3">
      <v-container>
    <v-row>

    <v-col>
    <v-card hover tile elevation="2">
        <div>
            <v-card-title>Your Tasks</v-card-title>
            <v-card-subtitle>All your tasks in all your projects</v-card-subtitle>
            <v-card-text>
                <div>
                <v-card hover tile elevation="2">
                <v-card-title>CSCI311</v-card-title>
                <personal-notes>
                </personal-notes>
                </v-card>
                </div>
                      
                <div>
                <v-card hover tile elevation="2">
                <v-card-title>CSCI375</v-card-title>
                </v-card>
                </div>
            </v-card-text>
        </div>
    </v-card>
    </v-col>
    
    <v-col>
    <v-card hover tile elevation="2">
        <div>
            <v-card-title>Personal Notes</v-card-title>
            <v-card-subtitle>these are your very own personal Notes</v-card-subtitle>
            <v-card-text>
                <v-textarea auto-grow="true"
                            name="personal-notes"
                            rows=15></v-textarea>
            </v-card-text>
        </div>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
    </div> 
        
    <!--                                  Settings                                  -->
    <div v-if="activePage == 4">
      <v-container>
    <v-row>
    <v-col>
    <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>Select Your Project</v-card-title>
            <v-card-text>
               <settings-project></settings-project>
            </v-card-text>
        </div>
    </v-card>
    </v-col>
    <v-col>
    <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>Visual Settings</v-card-title>
            <v-card-text>
                <visual-settings @changeMode="changeMode('red')"></visual-settings>
            </v-card-text>
        </div>
    </v-card>
        <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>User Settings</v-card-title>
            <v-card-text>
                <visual-settings @changeMode="changeMode('red')"></visual-settings>
            </v-card-text>
        </div>
    </v-card>
    <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>Team Members</v-card-title>
            <v-card-text>
                <team-list/>
            </v-card-text>
        </div>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
    </div> 
      
    </div>
  </v-content>
    
    <!--                                    End of Content                              -->
    
  <v-footer app>
    Credit: Best Group
  </v-footer>
</v-app>
  
</template>

<script>
  //tutorial used for meetings https://www.taniarascia.com/getting-started-with-vue/
  import MeetingsTable from '@/components/MeetingsTable.vue'
  import MeetingForm from "@/components/MeetingForm.vue"
    //import KanbanBoard from "@/components/Kanban.vue"
    import PersonalNotes from "@/components/PersonalNotes.vue"
    import SettingsProject from "@/components/SettingsProject.vue"
    import VisualSettings from "@/components/VisualSettings.vue"
    //import ThreeDotMenu from "@/components/ThreeDotMenu.vue"
    import TeamList from "@/components/TeamList.vue"
    //import Tasks from "@/components/Tasks.vue"
    //import AddTask from "@/components/AddTask.vue"
    import KanbanBoard from "@/components/KanbanBoard.vue"
    import Announcement from "@/components/announcement.vue"
    
  export default {
    name: 'app',
    props: {
      source: String,
    },
    components: {
        MeetingsTable,
        MeetingForm,
        //KanbanBoard,
        PersonalNotes,
        SettingsProject,
        VisualSettings,
        //ThreeDotMenu,
        TeamList,
        //Tasks,
        //AddTask,
        KanbanBoard,
        Announcement,
    },
    data(){
      return {
        items: [
        { title: 'Project CSCI' },
        { title: 'Project ITAS' },
        ],
        activeProject: "",
        meetings: [
        ],
        drawer: null,
        activePage: 2,
        projectColor: "",
        //users needs to be inserted dynamically in the settingspage     A,S
        users: [],
        tasks: [
          {
            id: 1,
            title: "Task1",
            description: "A very Important task1",
            person: "Person1"
          },
          {
            id: 2,
            title: "Task2",
            description: "A very Important task2",
            person: "Person2"
          },
          {
            id: 3,
            title: "Task3",
            description: "A very Important task3",
            person: "Person3"
          }
        ]
      }
    },
  
    created () {
      this.$vuetify.theme.dark = false
    },
    methods: {
      addMeeting(meeting) {
        const lastId =
                this.meetings.length > 0
                        ? this.meetings[this.meetings.length - 1].id
                        : 0;
        const id = lastId + 1;
        const newMeeting = { ...meeting, id };

        this.meetings = [...this.meetings, newMeeting];
        this.submitmeeting(); //maybe change the methode so the latest gets submitted or the latest meeting is on position 0  A,S
      },
      deleteMeeting(id){
        this.meetings = this.meetings.filter(
                meeting => meeting.id !== id     
        )
        this.deleteMeeting(id); //not sure if position is right
      },
      editMeeting(id, updatedMeeting){
        this.meetings = this.meetings.map(meeting =>
             meeting.id === id ? updatedMeeting : meeting)
             this.submitchangemeeting(id); //not sure if position is right

      },
    changePage(a) {
        this.activePage = a;
        return;
    },
    changeMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.deleteTask(id);
    },
    addTask(newTask) {
      this.tasks.push(newTask); // changed task to tasks as variable is called tasks
      this.addTask(); //no argument needed as task on possition 0 is going to be submitted
    },
    

    // connecting to backend methods !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // each task is going to be subbmitted on its own as an object
    //  {emulateJSON: true} may be needed as thired argument
    //  assumtion taken that only the latest task needs to be submitted and the latest will be on position 0
    submittask() {
      this.$http.post('./api/tasks/createTask.php', this.tasks[0])
          .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
    },
    //important fetch all tasks and then select displayed projects through activeProjects
    //maybe safe tasks with projects

    //here all tasks will be fetched into an array of objects
    fetchTasks() {
      this.$http.get('./api/tasks/getTasks.php')
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data){
            resultArray.push(data[key]);
          }
          resultArray.reverse();
          this.tasks = resultArray;
          
        });
        },
      // may have a error in the second argument
      //if you need headers they come after params look at https://github.com/pagekit/vue-resource/blob/develop/docs/http.md

      deleteTask(aTask) {
        this.$http.delete('./api/tasks/deleteTask.php', {params: {taskToDelete: aTask}})
        .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
      },


      //users !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      submituser() {
      this.$http.post('./api/project/addUser.php', this.users[0])
          .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
    },
    //important fetch all tasks and then select displayed projects through activeProjects
    //maybe safe tasks with projects

    //here all tasks will be fetched into an array of objects
    fetchUser() {
      this.$http.get('./api/project/fetchUsers.php', {params: {projectAtm: this.activeProject}})
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data){
            resultArray.push(data[key]);
          }
          resultArray.reverse();
          this.users = resultArray;
          
        });
        },
      // may have a error in the second argument
      //if you need headers they come after params look at https://github.com/pagekit/vue-resource/blob/develop/docs/http.md

      deleteUser(aUser) {
        this.$http.delete('/api/user/deleteUser.php', {params: {taskToDelete: aUser}})
        .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
      },


      // meetings !!!!!!!!!!!!!!!!!!!

      submitmeeting() {
      this.$http.post('./api/meetings/addMeeting.php', this.meetings[0])
          .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
    },
      submitchangemeeting(aMeeting) {
      this.$http.put('./api/meetings/editMeeting', aMeeting)
          .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
    },
    //important fetch all tasks and then select displayed projects through activeProjects
    //maybe safe tasks with projects

    //here all tasks will be fetched into an array of objects
    fetchMeeting() {
      this.$http.get('./api/meetings/getMeetings.php')
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data){
            resultArray.push(data[key]);
          }
          resultArray.reverse();
          this.meetings = resultArray;
          
        });
        },
      // may have a error in the second argument
      //if you need headers they come after params look at https://github.com/pagekit/vue-resource/blob/develop/docs/http.md

      deleteMeeting(aMeeting) {
        this.$http.delete('/api/meetings/deleteMeeting.php', {params: {taskToDelete: aMeeting}})
        .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
      },


      // projects !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      submitproject() {
      this.$http.post('./api/project/createProject.php', this.items[0])
          .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
    },
    //important fetch all tasks and then select displayed projects through activeProjects
    //maybe safe tasks with projects

    //here all tasks will be fetched into an array of objects
    fetchItems() {
      this.$http.get('./api/project/getProjects.php')
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data){
            resultArray.push(data[key]);
          }
          resultArray.reverse();
          this.items = resultArray;
          
        });
        },
      // may have a error in the second argument
      //if you need headers they come after params look at https://github.com/pagekit/vue-resource/blob/develop/docs/http.md

      deleteItem(aItem) {
        this.$http.delete('./api/project/deleteProject.php', {params: {taskToDelete: aItem}})
        .then(response => {
            console.log(response);
          }, error => {
              console.log(error);
          });
      },



  }
  }

</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 99%;
  }
    
</style>