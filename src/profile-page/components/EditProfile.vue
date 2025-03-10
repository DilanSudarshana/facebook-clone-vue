<template>

    <button type="button" class="me-2 btn btn-primary btn-sm fw-bold" data-bs-toggle="modal"
        data-bs-target="#exampleModal">Edit
        Profile</button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="mb-1">
                        <label for="post-text" class="col-form-label">First name</label>
                        <input v-model="first_name" type="text" class="form-control">
                    </div>

                    <div class="mb-1">
                        <label for="post-text" class="col-form-label">Last name</label>
                        <input v-model="last_name" type="text" class="form-control">
                    </div>

                    <div class="mb-1">
                        <label for="post-text" class="col-form-label">University</label>
                        <input v-model="university" type="text" class="form-control">
                    </div>

                    <div class="mb-1">
                        <label for="post-text" class="col-form-label">School</label>
                        <input v-model="school" type="text" class="form-control">
                    </div>

                    <div class="mb-1">
                        <label for="post-text" class="col-form-label">Lives in</label>
                        <input v-model="lives_in" type="text" class="form-control">
                    </div>

                    <div class="mb-1">
                        <label for="post-text" class="col-form-label">Address</label>
                        <input v-model="address" type="text" class="form-control">
                    </div>

                    <div class="mb-1">
                        <label for="post-text" class="col-form-label">Relationship</label>
                        <input v-model="relationship" type="text" class="form-control">
                    </div>

                    <div class="mb-1">
                        <label for="post-text" class="col-form-label">Intro</label>
                        <input v-model="intro" type="textarea" class="form-control">
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button @click="editProfile" type="button" class="btn btn-primary">Upload Image</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>


<script>

import axios from 'axios';
export default {
    name: 'EditProfile',

    data() {
        return {

            first_name: '',
            last_name: '',
            university: '',
            school: '',
            lives_in: '',
            address: '',
            relationship: '',
            intro: ''
        }
    },
    methods: {
        async editProfile() {


            let id = this.$route.params.id

            axios.put(`http://localhost/facebook/profile/update/${id}`, {
                withCredentials: false,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },

                first_name: this.first_name,
                last_name: this.last_name,
                university: this.university,
                school: this.school,
                lives_in: this.lives_in,
                address: this.address,
                relationship: this.relationship,
                intro: this.intro


            })
                .then(response => {
                    console.log(`Updated post with ID ${id}`);
                })
                .catch(error => {
                    console.error(error);
                });
            console.log(id)
        }
    },

}
</script>