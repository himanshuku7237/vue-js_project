<template>
  <div>
    <img class="logo" src="../assets/restaurant-retro-style-logo-template_758228-168.avif" alt="" srcset="">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button v-on:click="SignUp">Sign Up</button>
        <p>
          <router-link to=/login>Login</router-link>
        </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  data() {
      return {
          name: '',
          email: '',
          password: ''
      }
  },
  methods: {
      async SignUp() {
          console.warn(this.name, this.email, this.password);
          try {
              let response = await axios.post("http://localhost:3000/users", {
                  name: this.name,
                  email: this.email,
                  password: this.password
              });
              console.warn(response);
              if (response.status === 201) {
                  alert("Sign Up Done");
                  localStorage.setItem("user-info", JSON.stringify(response.data))
                  this.$router.push({ name: 'Home' });
              }
          } catch (error) {
              console.error("Error occurred while signing up:", error);
              // Handle error here, e.g., show an error message to the user
          }
      }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(user) {
      this.$router.push({ name: 'Home' });
    }
  }
} 
</script>


