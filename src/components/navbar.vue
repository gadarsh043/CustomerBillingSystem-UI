<template>
<div class="topnav">
  <router-link to="/login"><span >Login</span></router-link>
  <router-link to="/register"> <span >Register</span> </router-link>
  <router-link to="/"> <span >Home</span> </router-link>
</div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style scoped>
.topnav {
  width: 100%;
  overflow: hidden;
  background-color: rgb(201, 128, 65);
}
.topnav span {
  float: right;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  cursor: pointer;
}
.topnav span:hover {
  background-color: #85603f;
  color: white;
}
.topnav span.active {
  background-color: #fde8cd;
}
</style>
