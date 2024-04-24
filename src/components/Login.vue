<template>
<div>
    <img class="logo" src="../assets/restaurant-retro-style-logo-template_758228-168.avif" alt="" srcset="">
    <h1>Login</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button v-on:click="login">Login</button>
        <p>
            <router-link to=/signUp>Sign- Up</router-link> </p> </div> </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                );

                if (result.status === 200 && result.data.length > 0) {
                    // Proceed with whatever you want to do after successful login
                }
            } catch (error) {
                console.error("Error occurred while logging in:", error);
                // Handle error here, e.g., show an error message to the user
            }
        }

    }
}
</script>
