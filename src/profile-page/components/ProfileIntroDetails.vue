<template>

    <div v-for="profile in profileDetails" class="bg-light rounded mt-0 p-2 shadow">
        <div class=" d-flex justify-content-start align-items-center ">

            <div class=" d-flex flex-column justify-content-start align-items-start p-1">
                <h5 class="text-muted">Intro</h5>
            </div>
        </div>

        <div class=" d-flex justify-content-center align-items-center pz">

            <div class=" d-flex flex-column justify-content-center align-items-center" style="overflow: hidden;">
                <p class="text-start fs-6 ">{{ profile.intro }}</p>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2">
            <button type="button" class="btn btn-secondary w-100 rounded">Edit Bio</button>
        </div>

        <div class=" d-flex justify-content-center align-items-center px-2 mt-2">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-mortarboard-fill fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">Studied at <strong>{{ profile.university }}</strong></p>
                </div>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2  ">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-book-fill fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">Went To <strong>{{ profile.school }}</strong></p>
                </div>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2  ">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-geo-alt-fill fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">Lives in <strong>{{ profile.lives_in }}</strong></p>
                </div>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2 ">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-geo fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">From <strong>{{ profile.lives_in }}</strong></p>
                </div>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-heart-fill fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">Relationship <strong>{{ profile.relationship }}</strong></p>
                </div>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-newspaper fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">Followed by <strong>{{ profile.followed_by }}</strong></p>
                </div>
            </div>

        </div>


        <div class=" d-flex justify-content-center align-items-center px-2">
            <button type="button" class="btn btn-secondary w-100 rounded">Edit details</button>
        </div>

        <div class=" d-flex justify-content-center align-items-center px-2 mt-2 mb-2">
            <button type="button" class="btn btn-secondary w-100 rounded">Edit Featured</button>
        </div>
    </div>


</template>


<script>
import axios from 'axios';

export default {
    name: 'ProfileIntroDetails',

    data() {
        return {
            profileDetails: [],

        }
    },

    methods: {
        async getProfileDetails() {

            let id = this.$route.params.id;
            let result = await axios.get('http://localhost/facebook/profile/' + id);
            this.profileDetails = result.data;
            console.log(this.profileDetails);
        }
    },

    mounted() {
        this.getProfileDetails();
    }
}
</script>
