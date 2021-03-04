<template>
  <div>
    <navbar />
    <div>
      <form>
          <h3>Login Page</h3>
          <div class="form-group">
            <input type="radio" value="adminstrator" @change="onChange($event)" name="user" id="adminstrator" >Adminstrator
            <input type="radio" value="user" @change="onChange($event)" name="user" id="user">User
          </div>
          <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control" />
          </div>

          <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" />
          </div>
          <button @click="login">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from '../components/navbar.vue'
export default {
  name: 'login',
  components: { navbar },
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
<style >

</style>
