<template>

    <div class=" d-flex justify-content-between align-items-start mt-2">
        <div class="d-flex justify-content-start align-items-start">
            <div>
                <h6 class="text-muted mt-1">Contacts</h6>

            </div>
        </div>
        <div class="d-flex justify-content-start align-items-end">
            <div class="me-3">
                <i class="bi bi-search"></i>
            </div>
            <div>
                <i class="bi bi-three-dots"></i>
            </div>
        </div>
    </div>

    <div style="height: 60vh;" id="contact-list" class="d-flex flex-column justify-content-start align-items-start">


        <div v-for="user in users" :key="user.id"
            class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">

            <router-link :to="'/profile/' + user.id" style="text-decoration: none;color: black;" class="d-flex flex-row">
                <div class="rounded-circle me-3"
                    style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                    <img style="width: 30px; height: 30px;border-radius: 100px;" alt="" :src="user.image">
                </div>
                <div class="fw-bold mt-1">
                    <p class="text-start">{{ user.first_name }}&nbsp;{{ user.last_name }}</p>
                </div>
            </router-link>

        </div>


    </div>

</template>


<script>
import axios from 'axios';


export default {
    name: 'ContactList',

    data() {
        return {
            users: [],
        }
    },

    methods: {
        async getUsers() {
            let result = await axios.get('http://localhost/facebook/user');
            this.users = result.data;
        }
    },
    mounted() {
        this.getUsers();
    }

}
</script>

<style>
#contact-item {
    transition: background-color 0.3s ease-in-out;
}

#contact-item:hover {
    background-color: #efefef;
}
</style>
