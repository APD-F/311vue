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
          name="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="show ? 'text': ' '"
          counter
          @click:append="show = !show"
        >

        <lable>confirm password</lable>
        <input
          v-model="cpassword"
          name="cpassword"
          :rules="[rules.required, rules.sameWithP]"
          :type="show ? 'text': ' '"
        >

        <lable>email</lable>
        <input
          v-model="email"
          name="email"
          :rules="[rules.required, rules.email]"
        >

        <lable>first name</lable>
        <input
          v-model="fname"
          name="fname"
          :rules="[rules.required]"
        >

        <lable>last name</lable>
        <input
          v-model="lname"
          name="lname"
          :rules="[rules.required]"
        >



        <button>Log in</button>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data(){
          return{
            fname: '',
            lname: '',
            email: '',
            username: '',
            password:'',
            cpassword:'',
            show: false,
            rules: {
              required: value => !!value || 'Required.',
              sameWithP: value=> value!=password.value || 'not matching password',
              email: v => /.+@.+/.test(v) || 'E-mail must be valid',
          }
        }
      }
    }
</script>

<style scoped>

</style>
