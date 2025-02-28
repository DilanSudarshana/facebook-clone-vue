<template>

    <div class="col-lg-4 bg-light p-3 d-flex">
        <LeftSide></LeftSide>
    </div>

    <div class="col-lg-4 bg-light p-3 d-flex">
        <Middle></Middle>
    </div>

    <div class="col-lg-4 bg-light p-3 d-flex align-item-end justify-content-end">
        <RightSide></RightSide>
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
