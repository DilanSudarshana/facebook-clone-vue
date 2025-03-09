<template>

    <div id="main-content">
        <div class="container">

            <div class="row sticky-top">
                <Navbar class="shadow"></Navbar>
            </div>

            <div class="row">
                <MainLeft style="position: sticky;top: 0;" class="shadow"></MainLeft>
                <MainMiddle style="overflow-y: auto;"></MainMiddle>
                <MainRight style="position: sticky;top: 0;" class="shadow"></MainRight>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../includes/navbar/navbar.vue'
import MainLeft from './components/Left/MainLeft.vue';
import MainMiddle from './components/Middle/MainMiddle.vue';
import MainRight from './components/Right/MainRight.vue';

export default {
    name: 'Index',

    components: {
        Navbar,
        MainLeft,
        MainMiddle,
        MainRight,
    },

}
</script>

<style>
#main-content {
    background-color: #f0f0f0;
}
</style>