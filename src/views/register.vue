<template>
  <div class='layout'>
    <div class='header'>
    </div>
    <div class='page-view'>
      <div class='content-page'>
        <div class='form'>
          <div class='input text'>
            <div class='row'>
            <div class='div-text'>Full Name
            </div>
            <input name="name" class='field' type="text" maxlength="50" value="" id="name" v-model="name">
            </div>
            <div class='row'>
            <div class='div-text'>Phone Number
            </div>
            <input name="number" class='field' type="text" value="" id="number" v-model="number">
            </div>
            <div class='row'>
            <div class='div-text'>E-mail Address
            </div>
            <input name="email" class='field' type="text" maxlength="50" value="" id="email" v-model="email">
            </div>
            <div class='row'>
            <div class='div-text'>Address
            </div>
            <input name="address" class='field' type="text" maxlength="150" value="" id="address" v-model="address">
            </div>
            <div class='row'>
            <div class='div-text'>Password
            </div>
            <input type="text" class='field' minlength="6" value="" id="password" v-model="password">
          </div>
          </div>
      </div>
      <router-link to='/login'>
       <button type="submit" >
        <span class="default-btn" v-on:click="submitDetails"> Create Account</span>
       </button>
      </router-link>
    </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'register',
  components: {
  },
  data () {
    return {
      name: '',
      number: '',
      email: '',
      address: '',
      password: ''
    }
  },
  methods: {
    validate: function () {
      if (this.name === '') {
        alert('Name can\'t be Empty')
        return 0
      }
      if (this.email === '') {
        alert('Email can\'t be Empty')
        return 0
      }
      if (isNaN(this.number) || this.number === '' || this.number.length !== 10) {
        alert('Invalid Phone number, must be 10 digits')
        return 0
      }
      if (this.password === '' || (this.password.length < 6 || this.password.length > 10)) {
        alert('Invalid password, must be between 6 and 10 characters')
        return 0
      }
      return 1
    },
    submitDetails: function () {
      const user = {
        username: this.name,
        // address: this.address,
        // phone: this.phone,
        // email: this.email,
        password: this.password
      }
      axios.post('http://10.177.68.56:8083/users/sign-up', user)
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>
<style>
.input div span {
    font-weight: 700;
    color: red;
    padding: 20px;
    border:1px black;
    align-content: space-between;
}
div {
  flex: auto;
  box-sizing: border-box;
  display: block;
}
#password {
  -webkit-text-security:disc
}
* {
  margin: 0;
  padding: 0;
}
.field {
  width: 18rem;
}
.input {
  border-radius: 5px;
  padding: 20px;
}
  .div-text {
      width: -webkit-fill-available;
      padding-bottom: 10px;
      float: right;
  }
body {
  background-color: #f1f1f1;
}
.content-page {
  padding: 3.5rem;
}
button {
  background-color: darkgreen;
  border-radius: 2px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 18px;
  margin: auto;
}
form {
  border: 1px black;
}
</style>
