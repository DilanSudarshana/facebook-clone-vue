<template>

    <div id="main-content">
        <div class="container">

            <div class="row sticky-top">
                <Navbar></Navbar>
            </div>

            <div id="hero-section" class="row rounded">
                <ProfileHero></ProfileHero>
                <ProfileDetails></ProfileDetails>
            </div>

        </div>

        <div class="container">
            <div class="row mt-3">
                <ProfileIntro></ProfileIntro>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../includes/navbar/navbar.vue'
import ProfileHero from './components/ProfileHero.vue'
import ProfileDetails from './components/ProfileDetails.vue'
import ProfileIntro from './components/ProfileIntro.vue'

export default {
    name: 'ProfileMain',

    components: {
        Navbar,
        ProfileHero,
        ProfileDetails,
        ProfileIntro,
    }

}
</script>

<style>
#main-content {
    background-color: #f0f0f0;
}

#hero-section {
    background-color: #ffff;
}
</style>