<template>
    <div id="Announcement">
        <v-card>
                <v-card-title>Announcments

                    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add new Announcement</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add New Announcement</span>
        </v-card-title>
        <v-card-text>
      <v-form @submit="add">
                <v-text-field v-model="title" placeholder="Title">
                    </v-text-field>
                    <v-text-field v-model="description" placeholder="Description">
                    </v-text-field>
                    <v-btn @click="add">Add</v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog> 

                </v-card-title>
                <v-card-text>
        <draggable class="list-group" :list="announcement" group="tasks">
                <div class="list-group-item" v-for="element in announcement" :key="element.name">
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
                        <v-btn @click="deleteAnn(element.id)">del</v-btn>
                                </v-list-item-title>
                                </v-list-item>
                                </v-list>
                                </v-menu>
                        
                        </v-card-title>
                        <v-card-text>{{element.description}}</v-card-text>
                        </v-card>
                    
                    </div>
            </draggable>
                </v-card-text>
                </v-card>
    </div>
</template>

<script>
import draggable from "vuedraggable";
//import uuid from 'uuid';

export default {
    name:'Announcement',
    data() {
        return{
            announcement:[
                {   id: 1,
                    title: "Announcement",
                 description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."   
                },
                {id:2,
                    title: "Announcement-2",
                 description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."   
                }
            ],
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
            
            this.announcement.push({id: this.announcement.length+1, title: this.title, description: this.description, person:this.person})
            this.title="";
            this.description="";
            this.dialog=false;
        },
        //deleteAnn(element) {
            //this.announcement.splice(element.id,1)
            deleteAnn(id){
                this.announcement = this.announcement.filter(element => element.id != id);
            
    }
    }
}
</script>