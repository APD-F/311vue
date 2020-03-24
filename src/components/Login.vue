<template>
    <div id="login">
      <form>
        <lable>username</lable>
        <input
          v-model="username"
          name="username"
          :rules="[rules.required]"
          @focus="clearStatus"
          @keypress="clearStatus"
        >

        <lable>password</lable>
        <input
          v-model="password"
          name="username"
          :rules="[rules.required]"
          :type="show ? 'text': ' '"
          name="password"
        >


        <button>Log in</button>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data(){
          return{
            show: false,
          }
        },
      }
</script>

<style scoped>

</style>
