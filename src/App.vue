<template>
  <div id="app" class="small-container">
    <h1>Meetings</h1>
    <meeting-form @add:meeting="addMeeting"/>
    <meetings-table :meetings="meetings" @delete:meeting="deleteMeeting" />
  </div>
</template>

<script>
  import MeetingsTable from '@/components/MeetingsTable.vue'
  import MeetingForm from "@/components/MeetingForm.vue";
  export default {
    name: 'app',
    components: {
      MeetingsTable,
      MeetingForm,
    },
    data(){
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