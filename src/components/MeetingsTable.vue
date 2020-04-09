<template>
    <div id="meetings-table">
        <p v-if="meetings.length < 1" class="empty-table">
            No meetings
        </p>
        <table v-else>
            <thead>
            <tr>
                <th>Meeting Subject</th>
                <th>Date</th>
                <th>Time</th>
                <th> </th>
            </tr>
            </thead>
            <tbody><!--edit values if they exist -->
            <tr v-for="meeting in meetings" :key="meeting.id">
                <td v-if="editing === meeting.id">
                    <input type="text" v-model="meeting.subject">
                </td>
                <td v-else>{{meeting.subject}}</td>
                <td v-if="editing === meeting.id">
                    <input type="date" v-model="meeting.date">
                </td>
                <td v-else>{{meeting.date}}</td>
                <td v-if="editing === meeting.id">
                    <input type="time" v-model="meeting.time">
                </td>
                <td v-else>{{meeting.time}}</td>
                <td v-if="editing === meeting.id"><!--appear if editing-->
                    <button @click="editMeeting(meeting)">Save</button>
                    <button class="muted-button" @click="cancelEdit(meeting)">Cancel</button>
                </td>
                <td v-else>
                    <button @click="editMode(meeting)">Edit</button>
                    <button @click="$emit('delete:meeting', meeting.id)">Delete</button>
                    <!--<minutes></minutes>-->
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  //  import Minutes from "./Minutes";
    export default {
        name: 'meetings-table',
        //components: {Minutes},
        props: {
            meetings: Array,
        },
        data(){
            return{
                editing: null,
            }
        },
        methods: {
            editMode(meeting){
                this.cachedMeeting = Object.assign({}, meeting)
                this.editing = meeting.id
            },

            editMeeting(meeting){
                if(meeting.subject === ''||meeting.date===''||meeting.time==='') return
                this.$emit('edit:meeting',meeting.id,meeting)
                this.editing = null
            },
            cancelEdit(meeting){
                Object.assign(meeting, this.cachedMeeting)
                this.editing = null;
            }

        }
    }
</script>

<style scoped>
    button {
        margin: 0 0.5rem 0 0;
    }

</style>
