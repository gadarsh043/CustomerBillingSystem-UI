<template>
  <div id="main">
  <div class="fof">
    <h1>This page is quarantined</h1>
    <p>
    <a href="/"><strong>Let's have a coffee and discuss what to do with this issue.</strong></a>
    </p>
  </div>
 </div>
</template>

<script>
export default {
  name: 'errorPage'
}
</script>

<style scoped>

 *{
    transition: all 0.6s;
}

html {
    height: 100%;
}

body{
    font-family: 'Lato', sans-serif;
    color: #888;
    margin: 0;
}

#main{
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.fof{
  display: table-cell;
  vertical-align: middle;
}

.fof h1{
  font-size: 100px;
  display: inline-block;
  padding-right: 12px;
  animation: type .5s alternate infinite;
}

@keyframes type{
  from{box-shadow: inset -3px 0px 0px #888;}
  to{box-shadow: inset -3px 0px 0px transparent;}
}
</style>
