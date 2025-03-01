<template>

    <div class="col-md-4 bg-light mt-2  d-none d-lg-block rounded">
        <ContactList></ContactList>
    </div>
</template>


<script>
import ContactList from './ContactList.vue';

export default {
    name: 'MainRight',
    components: {
        ContactList,
    }
}
</script>
