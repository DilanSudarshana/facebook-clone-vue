<template>

    <div class="d-flex flex-column justify-content-center align-items-center">

        <div id="login-form" class="p-3 rounded shadow bg-light">

            <div class="form-outline mb-2">
                <input type="email" v-model="email" class="form-control" placeholder="Enter Email" />
            </div>

            <div class="form-outline mb-2">
                <input type="password" v-model="password" class="form-control" placeholder="Enter Password" />
            </div>

            <button v-on:click="login" class="btn btn-primary btn-block w-100 mt-4">
                <h5 class="text-light fw-bold">Log in</h5>
            </button>

            <div class="row mb-4 mt-3">
                <div class="col text-center mt-2">
                    <a href="#!">Forgot password?</a>
                </div>
            </div>

            <hr>

            <div class="d-flex justify-content-center align-items-center pb-3 pt-3">
                <button id="create-button" data-mdb-ripple-init type="submit" class="btn btn-success btn-block w-50">
                    <router-link to="/sign-up" style="text-decoration: none;color: black;">
                        <h6 class="text-light fw-bold">Create new account</h6>
                    </router-link>
                </button>
            </div>

        </div>

        <p style="font-size: small;" class="text-center mt-3"><strong>Create a Page</strong> for a celebrity, brand or
            business.</p>

    </div>




</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginRight',

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {

        async login() {

            let result = await axios.post('http://localhost/facebook/login', {
                email: this.email,
                password: this.password,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )

            if (result.data.status === true) {

                console.log('Login successful');
                this.email = "";
                this.password = "";
                localStorage.setItem("user-info", JSON.stringify(result.data.user));
                this.$router.push({ name: 'Index' });

            } else {
                console.log('Login failed. Invalid credentials.');
            }
        }

    }

}
</script>

<style>
#login-form {
    background-color: white;
    width: 60vh;
    margin-top: 15vh;
}

#create-button {
    background-color: #30c116;
    border: none;
}
</style>
