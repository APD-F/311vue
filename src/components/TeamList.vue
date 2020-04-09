<template>
    <div id="team-list">

      <div>
      <form>
      <v-text-field text="name"></v-text-field>
      <v-btn small @click="addUser()">add member</v-btn>
    </form>
      <v-spacer></v-spacer>
    </div>
            <v-list disabled>
      <v-list-item-group v-model="item" color="primary">



        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >

          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    </div>
</template>

<script>
    export default {
    data: () => ({
      items: this.fetchUser(),
    }),
    method: {
      addUser(){
        this.submituser()
      }
    },
  }
</script>

<style scoped>

</style>
