<template>

    <div class="h-100 d-flex justify-content-end align-items-center">

        <div id="right-item" class="rounded-circle me-1 d-flex shadow-sm justify-content-center align-items-center"
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home"
            style="width: 30px; height: 30px;">
            <i class="bi bi-list fs-5"></i>
        </div>

        <div id="right-item" class="rounded-circle me-1 d-flex shadow-sm justify-content-center align-items-center"
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messenger"
            style="width: 30px; height: 30px;">
            <i class="bi bi-messenger fs-5"></i>
        </div>

        <div id="right-item" class="rounded-circle me-1 d-flex shadow-sm justify-content-center align-items-center"
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Notification"
            style="width: 30px; height: 30px;">
            <i class="bi bi-bell-fill fs-5"></i>
        </div>

        <div id="right-item" class="rounded-circle me-1 d-flex shadow-sm justify-content-center align-items-center"
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Account"
            style="width: 30px; height: 30px;">
            <i class="bi bi-person-circle fs-5"></i>
        </div>

    </div>

</template>

<script>

export default {
    name: 'RightSide',

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
