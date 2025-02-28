<template>

    <div class="container p-2 bg-light shadow-sm fixed-top">
        <div class="row gx-3 d-flex flex-wrap">

            <div class="col-6 col-md-6 col-lg-4">
                <LeftSide></LeftSide>
            </div>

            <div class="col-lg-4 d-none d-lg-block">
                <Middle></Middle>
            </div>

            <div class="col-6 col-md-6 col-lg-4">
                <RightSide></RightSide>
            </div>

        </div>
    </div>



</template>

<script>
import LeftSide from './components/LeftSide.vue';
import Middle from './components/Middle.vue';
import RightSide from './components/RightSide.vue';


export default {
    name: 'Navbar',

    components: {
        LeftSide,
        RightSide,
        Middle,
    },
}
</script>
