<template>

    <div id="main-content">
        <div class="container">

            <div class="row sticky-top">
                <Navbar></Navbar>
            </div>

            <div class="row">
                <MainLeft style="position: sticky;top: 0;"></MainLeft>
                <MainMiddle style="overflow-y: auto;"></MainMiddle>
                <MainRight style="position: sticky;top: 0;"></MainRight>
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
    }

}
</script>

<style>
#main-content {
    background-color: #f0f0f0;
}
</style>