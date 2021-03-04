<template>
  <div>
    <div class="login">
      <div class="form">
        <div class="input-text">
          <div>
          </div><label for="UserEmailAddress">Email Address: </label>
          <input type="text" v-model="username" id="textbox1" placeholder="Enter your username">
        </div>
        <div class="input-text">
          <label for="UserPassword">Password: </label>
          <input type="text" v-model="password" id="textbox2" placeholder="Enter your Password">
        </div>
        <div class="form-group">
          <input type="radio" value="adminstrator" @change="onChange($event)" name="user" id="adminstrator" >Adminstrator
          <input type="radio" value="user" @change="onChange($event)" name="user" id="user">User
        </div>
        <button @click="login">Login</button>

      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onChange (event) {
      var choice = event.target.value
      console.log(choice)
    },
    login () {
      const info = {
        username: this.username,
        password: this.password
      }
      console.log(info)
      axios.post('/login', info)
        .then(e => {

        })
        .catch(error => {
          this.errorMessage = error.message
          console.error('There was an error!', error)
        })
    }
  }
}
</script>

<style>
.login {
  display: flex;

}
</style>
