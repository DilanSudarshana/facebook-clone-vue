<template>
    <div>
        <h5 class="text-center text-muted mt-2">Test API/Update User</h5>
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
                            <button class="btn btn-success" v-on:click="updateUser()" style="margin-top: 20px;">Update User</button>
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
    name: 'PutRequest',

    data() {
        return {
            name: '',
            email: '',
        };
    },

    methods: {

        async updateUser() {

            //get url id as id
            let id = this.$route.params.id

            axios.put(`http://localhost/sample-project/api/user/update/${id}`, {
                withCredentials: false,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },

                name: this.name,
                email: this.email,
            })
                .then(response => {
                    console.log(`Updated post with ID ${id}`);

                    this.name = ""
                    this.email = ""
                })
                .catch(error => {
                    console.error(error);

                    this.name = ""
                    this.email = ""
                });
            console.log(id)

        }

    },
}
</script>
