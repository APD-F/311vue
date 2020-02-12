<template>
    <div id="minutes">
        <v-app id="inspire">
            <v-row justify="center">
                <v-btn @click="dialog = true">
                    Minutes
                </v-btn>
                <v-dialog v-model="dialog" persistent max-width="1200px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Meeting Minutes</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field label="" hint="Attendees" persistent-hint="true" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea label="" hint="Agenda" persistent-hint="true" auto-grow></v-textarea>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea label="" hint="Contents" persistent-hint="true" auto-grow></v-textarea>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea label="" hint="Action Items" persistent-hint="true" auto-grow></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-app>
    </div>
</template>
<script>
    export default {
        name: 'minutes',
        data: () => ({
            dialog: false,
        }),
    }
</script>

<style scoped>

</style>