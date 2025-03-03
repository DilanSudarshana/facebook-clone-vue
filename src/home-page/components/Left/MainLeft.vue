<template>
    <div id="main-right" class="col-md-4 col-lg-3 bg-light mt-2  d-none d-lg-block rounded overflow-auto">

        <ListItems></ListItems>

    </div>
</template>

<script>
import ListItems from './ListItems.vue';

export default {
    name: 'MainLeft',

    components: {
        ListItems,
    }
}
</script>

<style>
#main-right {
    height: 100vh;
}

#main-right::-webkit-scrollbar {
    width: 5px;
    height: 8px;
}

#main-right::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 99px;
}

#main-right::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 99px;
    transition: background 0.3s ease-in-out;
}

#main-right:hover::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
}
</style>
