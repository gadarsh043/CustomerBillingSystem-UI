<template>
  <div class="login-main-div" style="background-image: url('https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg');opacity: 1;">
    <h1 class="main-heading" style="color: ghostwhite;">Please Login to have a "Perfect Coffee"</h1>
    <div class="login-page">
      <form style="margin-left: 15%; margin-right: 125px;opacity:80%">
        <div class="imgcontainer">
          <img src="https://i.pinimg.com/474x/0c/9a/d3/0c9ad3fa8a8de42f9bebac875e636bcc.jpg" alt="Coffee-pic" class="coffee-pic">
        </div>
        <div class="container-login">
          <label for="uname"><b>Username</b></label>
          <input type="text" v-model="username" placeholder="Enter Username">
          <label for="psw"><b>Password</b></label>
          <input type="password" v-model="password" placeholder="Enter Password">
          <div class="form-group">
              <input type="radio" value="adminstrator" @change="onChange($event)" name="user" id="adminstrator" >Adminstrator
              <input type="radio" value="user" @change="onChange($event)" name="user" id="user">User
          </div>
          <button @click="submit">Login</button>
        </div>
      </form>
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
    submit () {
      const info = {
        username: this.username,
        password: this.password
      }
      console.log(info)
      axios.post('http://10.177.68.115:8083/login', info)
        .then(e => {
          console.log(e)
          if (e.status === 200) {
            this.$router.push('/product/adarsh')
          }
        })
        .catch(error => {
          this.errorMessage = error.message
          alert('Invalid UserID or password')
        })
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
form {
  border: 3px solid #f1f1f1;
  background-color: antiquewhite;
  }

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.main-heading{
  text-align: center;
}

button {
  background-color: brown;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  box-shadow: 1px 1px #888888;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 20%;
  border-radius: 50%;
}
.login-page{
  margin-right: 18rem;
  margin-left: 18rem;
}
.login-main-div{
  background-color: antiquewhite;
}
.container-login {
  padding: 16px;
  background-color: antiquewhite;
}

span.psw {
  float: right;
  padding-top: 16px;
}
.form-group{
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: center;
}

</style>
