<template>

    <div class="col-lg-4 col-md-12 rounded mb-5">
        <ProfileIntroDetails></ProfileIntroDetails>
        <Photos></Photos>
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
