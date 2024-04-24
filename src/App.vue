<!-- App.vue -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 100px;
}

.register input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px !important;
  margin: auto;
  border: 1px solid skyblue;
}

.register button,
.login button {
  width: 300px;
  height: 40px;
  background-color: skyblue;
  color: white;
  border: none;
  cursor: pointer;
  margin: auto;
  display: block;
  font-size: 16px;
}

.register button:hover,
.login button:hover {
  background-color: #007bff;
}

</style>
