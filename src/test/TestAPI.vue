<template>
    <div>
        <h5 class="text-center text-muted mt-2">Test API</h5>
    </div>

    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div class="d-flex justify-content-center align-item-center">

                    <table class="table w-50">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="item in users" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.email }}</td>
                                <td>
                                    <div class="d-flex">
                                        <router-link :to="'/update-user/' + item.id"><button
                                                class="btn btn-warning me-2">Update</button></router-link>
                                        <button class="btn btn-primary" v-on:click="deleteUser(item.id)">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'TestAPI',

    data() {
        return {
            users: [],
        }
    },
    methods: {

        async deleteUser(id) {

            axios.delete(`http://localhost/sample-project/api/user/delete/${id}`, {
                withCredentials: false,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
                .then(response => {
                    console.log(`Deleted post with ID ${id}`);
                })
                .catch(error => {
                    console.error(error);
                });
            console.log(id)

        }
    },

    async mounted() {
        let result = await axios.get('http://localhost/sample-project/api/user');
        this.users = result.data;
        // console.log(result)
    }
}
</script>