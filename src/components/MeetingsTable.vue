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
            <tbody>
            <tr v-for="meeting in meetings" :key="meeting.id">
                <td>{{meeting.subject}}</td>
                <td>{{meeting.date}}</td>
                <td>{{meeting.time}}</td>
                <td>
                    <button>Edit</button>
                    <button @click="$emit('delete:meeting', meeting.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'meetings-table',
        props: {
            meetings: Array,
        },
    }
</script>

<style scoped>
    button {
        margin: 0 0.5rem 0 0;
    }
</style>