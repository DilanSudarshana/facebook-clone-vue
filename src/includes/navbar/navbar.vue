<template>

    <div class="bg-light p-2 d-flex flex-wrap align-items-center justify-content-between px-5 shadow-sm">
        <LeftSide></LeftSide>
        <Middle></Middle>
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
