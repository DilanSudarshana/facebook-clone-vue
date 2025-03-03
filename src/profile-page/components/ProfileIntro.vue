<template>

    <div class="col-lg-4 col-md-12 rounded mb-5">
        <ProfileIntroDetails></ProfileIntroDetails>
        <Photos></Photos>

        <div class=" d-flex  justify-content-between align-items-start p-1 mt-1 ms-4">
            <p class="text-muted fw-bold fs-7">Privacy  · Terms  · Advertising  · Ad choices   · Cookies  ·   · Meta © 2025</p>
        </div>
        
    </div>

    <ProfileSearch></ProfileSearch>



</template>

<script>

import ProfileSearch from './ProfileSearch.vue';
import ProfileIntroDetails from './ProfileIntroDetails.vue';
import Photos from './Photos.vue';

export default {
    name: 'ProfileIntro',
    components: {
        ProfileSearch,
        ProfileIntroDetails,
        Photos,
    }
}
</script>
