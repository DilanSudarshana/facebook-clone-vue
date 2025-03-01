<template>
    <div class="col-md-4 bg-light mt-2  d-none d-lg-block rounded">

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
