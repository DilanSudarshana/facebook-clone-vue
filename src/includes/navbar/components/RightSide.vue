<template>

    <div class="h-100 d-flex justify-content-end align-items-center">

        <MenuBox></MenuBox>

        <ChatBox></ChatBox>

        <NotificationBox></NotificationBox>
        

        <div id="right-item" class="rounded-circle me-1 d-flex shadow-sm justify-content-center align-items-center"
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Account" style="width: 30px; height: 30px;">
            <i class="bi bi-person-circle fs-5"></i>
        </div>

    </div>

</template>

<script>
import ChatBox from './ChatBox.vue';
import NotificationBox from './NotificationBox.vue'
import MenuBox from './MenuBox.vue'


export default {
    name: 'RightSide',
    components: {
        ChatBox,
        NotificationBox,
        MenuBox,
    }

}
</script>

<style>
#right-item {
    transition: background-color 0.3s ease-in-out;
}

#right-item:hover {
    background-color: #efefef;
}
</style>
