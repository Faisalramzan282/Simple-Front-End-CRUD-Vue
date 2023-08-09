<template>
  <div class="gap-2 p-10">
    <router-link class="text-white p-4 bg-slate-600 mr-2 rounded" to="/signUp">SignUp</router-link> 
     <router-link class="text-white p-4 bg-slate-600 rounded"   to="/login">Login</router-link>

  </div>
  
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>
