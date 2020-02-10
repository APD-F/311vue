<template>
  <div id="app" class="small-container">
    <h1>Meetings</h1>
    <meeting-form @add:meeting="addMeeting"/>
    <meetings-table
            :meetings="meetings"
            @delete:meeting="deleteMeeting"
            @edit:employee="editEmployee"/> <!--work in progress-->
  </div>
</template>

<script>
  //tutorial used for meetings https://www.taniarascia.com/getting-started-with-vue/
  import MeetingsTable from '@/components/MeetingsTable.vue'
  import MeetingForm from "@/components/MeetingForm.vue";
  export default {
    name: 'app',
    components: {
      MeetingsTable,
      MeetingForm,
    },
    data(){https://www.taniarascia.com/getting-started-with-vue/
      return {
        meetings: [
        ],
      }
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
      }
    },
  }

</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }
</style>