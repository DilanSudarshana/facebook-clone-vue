<template>

    <div class="col-lg-4 col-md-12 rounded mb-5 p-2 bg-light">

        <div class=" d-flex justify-content-start align-items-center ">

            <div class=" d-flex flex-column justify-content-start align-items-start p-1">
                <h5 class="text-muted">Intro</h5>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center pz">

            <div class=" d-flex flex-column justify-content-center align-items-center">
                <p class="text-center fs-6 "> Life is a journey that has a lot of different paths, but any path you
                    choose use
                    it as your destiny.</p>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2">
            <button type="button" class="btn btn-secondary w-100 rounded">Edit Bio</button>
        </div>

        <div class=" d-flex justify-content-center align-items-center px-2 mt-2">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-newspaper fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">Studied at BIT UOM</p>
                </div>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2  ">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-newspaper fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">Studied at BIT UOM</p>
                </div>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2  ">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-newspaper fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">Studied at BIT UOM</p>
                </div>
            </div>

        </div>

        <div class=" d-flex justify-content-center align-items-center px-2 ">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div id="center-div" class="rounded d-flex align-items-center justify-content-center me-2"
                    style="width: 30px; height: 30px;">
                    <i class="bi bi-newspaper fs-4"></i>
                </div>
                <div class="mt-1">
                    <p class="text-start fs-6">Studied at BIT UOM</p>
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
                    <p class="text-start fs-6">Studied at BIT UOM</p>
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

    <ProfileSearch></ProfileSearch>



</template>

<script>

import ProfileSearch from './ProfileSearch.vue';

export default {
    name: 'ProfileIntro',
    components: {
        ProfileSearch,
    }
}
</script>
