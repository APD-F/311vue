<template>
    <div id="kanban-board">
        <v-card color="blue" outlined>
            <v-card-title >{{title[0]}}</v-card-title>
            <v-card-text>{{description[0]}}</v-card-text>
            <div class="text-center"><v-chip class="ma-2" color="success" outlined>
                <v-icon left>mdi-account</v-icon> Person1</v-chip></div>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'kanban-board',
        props: {
            
        },
        
        data(){
            return{
                title: ["task1", "task2"],
                description: ["This is a important Task"]
            }
        },
        
    }
</script>

<style scoped>
    
</style>