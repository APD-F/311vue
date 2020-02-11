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
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
        :color="projectColor"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Group<b>Awesome</b></v-toolbar-title>
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
                <meetings-table :meetings="meetings" @delete:meeting="deleteMeeting" />
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
    <v-col>
    <v-card hover tile elevation="2">
        <div>
            <v-card-title>Task Tracking (Kanban)</v-card-title>
            <v-card-text>
               <kanban-board></kanban-board>
            </v-card-text>
        </div>
    </v-card>
    </v-col>
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
            <v-card-title>Personal Notes</v-card-title>
            <v-card-subtitle>these are your very own personal Notes</v-card-subtitle>
            <v-card-text>
               <personal-notes></personal-notes>
            </v-card-text>
        </div>
    </v-card>
    </v-col>
    <v-col>
    <v-card hover tile elevation="2">
        <div>
            <v-card-title>Your Tasks</v-card-title>
            <v-card-subtitle>All your tasks in all your projects</v-card-subtitle>
            <v-card-text>
               <personal-notes></personal-notes>
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
  import MeetingsTable from '@/components/MeetingsTable.vue'
  import MeetingForm from "@/components/MeetingForm.vue"
    import KanbanBoard from "@/components/Kanban.vue"
    import PersonalNotes from "@/components/PersonalNotes.vue"
    import SettingsProject from "@/components/SettingsProject.vue"
    import VisualSettings from "@/components/VisualSettings.vue"
    
  export default {
    name: 'app',
    props: {
      source: String,
    },
    components: {
        MeetingsTable,
        MeetingForm,
        KanbanBoard,
        PersonalNotes,
        SettingsProject,
        VisualSettings,
    },
    data(){
      return {
        meetings: [
        ],
        drawer: null,
        activePage: 2,
        projectColor: "",
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
      },
      deleteMeeting(id){
        this.meetings = this.meetings.filter(
                meeting => meeting.id !== id
        )
      },
    changePage(a) {
        this.activePage = a;
        return;
    },
    changeMode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
   
    },
    events: {
        
       
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