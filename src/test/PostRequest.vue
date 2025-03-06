<template>
    <div>
        <h5 class="text-center text-muted mt-2">Test API</h5>
    </div>

    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div class="d-flex justify-content-center align-item-center">

                    <div class="container">
                        <div class="row">
                            <input type="text" v-model="name" placeholder="Enter Name">
                        </div>
                        <div class="row">
                            <input type="email" v-model="email" placeholder="Enter Email">
                        </div>
                        <div>
                            <button v-on:click="createUser" style="margin-top: 20px;">Create User</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'PostRequest',

    data() {
        return {
            name: '',
            email: '',
        }
    },

    methods: {

        async createUser() {
            let result = await axios.post('http://localhost/sample-project/api/user/store', {
                name: this.name,
                email: this.email,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            if (result == 200) {
                console.log('data inserted')

                this.name = ""
                this.email = ""
            }
        }
    },
}
</script>