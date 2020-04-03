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
          <v-btn rounded color="red" dark @click="changePage(5)">Logout</v-btn>
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
            @edit:employee="editEmployee"/> <!--work in progress-->
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
    <v-col :cols="4">
    <v-card hover tile elevation="2">
        <div class="ma-5">
            <v-card-title>Backlog<v-layout align-end justify-end><v-btn outlined small color="success"><b>Add Task</b></v-btn></v-layout></v-card-title>
            <v-card-text>
              <v-card color="blue" outlined class="mb-2">
            <v-card-title>Task1<v-spacer></v-spacer><three-dot-menu></three-dot-menu></v-card-title>
            <v-card-text>Such an important task</v-card-text>
            <div class="text-center"><v-chip class="ma-2" color="white" outlined>
                <v-icon left>mdi-account</v-icon> Person 1</v-chip></div>
        </v-card>
                <v-card color="red" outlined class="mb-2">
            <v-card-title >Task2<v-spacer></v-spacer><three-dot-menu></three-dot-menu></v-card-title>
            <v-card-text>Such an important task</v-card-text>
            <div class="text-center"><v-chip class="ma-2" color="white" outlined>
                <v-icon left>mdi-account</v-icon> Person 2</v-chip></div>
        </v-card>
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
    </v-col>
    </v-row>
    <v-row>
        <v-col :cols="6">
            <v-card>
                <v-card-title>Announcments</v-card-title>
            </v-card>
        </v-col>
        <v-col :cols="6">
            <v-card>
                <v-card-title>Progress</v-card-title>
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

  <!--                          The login Page                                -->
  <div v-if="activePage == 5">
  <v-container>
  <v-row>
  <v-col>
  <v-card hover tile elevation="2">
      <div class="ma-10">
          <v-card-title>Login</v-card-title>
          <v-card-text>
              username
              <v-text-field
                v-model="username"
                :rules="[rules.required]"
                required
              ></v-text-field>

              password
              <v-text-field
                v-model="password"
                :rules="[rules.required]"
                :type="false ? 'text' : 'password'"
                required
              ></v-text-field>

              <v-btn small @click="changePage(2)">login</v-btn>
              <v-spacer></v-spacer>
              <v-btn  small @click="changePage(6)">register</v-btn>
          </v-card-text>
      </div>
  </v-card>
  </v-col>
  <v-col>
  </v-col>
  </v-row>
  </v-container>
  </div>

  <!--                          The register Page                                -->
  <div v-if="activePage == 6">
  <v-container>
  <v-row>
  <v-col>
  <v-card hover tile elevation="2">
      <div class="ma-10">
          <v-card-title>Register</v-card-title>
          <v-card-text>
              username
              <v-text-field
                v-model="username"
                :rules="[rules.required]"
                required
              ></v-text-field>

              password
              <v-text-field
                v-model="password"
                :rules="[rules.required]"
                :type="false ? 'text' : 'password'"
                required
              ></v-text-field>

              comfirmed password
              <v-text-field
                v-model="cpassword"
                :rules="[rules.required]"
                :type="false ? 'text' : 'password'"
                required
              ></v-text-field>

              email
              <v-text-field
                v-model="email"
                :rules="[rules.required]"
                required
              ></v-text-field>

              name
              <v-text-field
                v-model="name"
                :rules="[rules.required]"
                required
              ></v-text-field>

              <v-btn small @click="changePage(5)">register</v-btn>

          </v-card-text>
      </div>
  </v-card>
  </v-col>
  <v-col>
  </v-col>
  </v-row>
  </v-container>
  </div>

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
    import ThreeDotMenu from "@/components/ThreeDotMenu.vue"
    import TeamList from "@/components/TeamList.vue"

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
        ThreeDotMenu,
        TeamList,
    },
    data(){
      return {
        items: [
        { title: 'Project CSCI' },
        { title: 'Project ITAS' },
        ],
        meetings: [
        ],
        drawer: null,
        activePage: 2,
        projectColor: "",
        rules:{
          required: value => !!value || 'Required.',
        },
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
      editMeeting(id, updatedMeeting){
        this.meetings = this.meetings.map(meeting =>
             meeting.id === id ? updatedMeeting : meeting)
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
