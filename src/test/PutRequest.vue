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
                            <button v-on:click="updateUser(50)" style="margin-top: 20px;">Update User</button>
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
        async updateUser(id) {
            if (!this.name || !this.email) {
                alert("Both name and email are required.");
                return;
            }

            try {
                let result = await axios.put(`http://localhost/crud-api/api/user/update/${id}`, {
                    name: this.name,
                    email: this.email,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (result.status === 200) {
                    console.log('data inserted');
                }
            } catch (error) {
                console.error('Error updating user:', error);
            }
        }
    },
}
</script>
