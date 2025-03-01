<template>

    <div class=" d-flex justify-content-between align-items-start mt-2">
        <div class="d-flex justify-content-start align-items-start">
            <div>
                <h6 class="text-muted mt-1">Group Chats</h6>

            </div>
        </div>
    </div>

    <div class="d-flex flex-column justify-content-start align-items-start overflow-auto">

        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-3"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Group 01</p>
            </div>
        </div>

        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-3"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Group 02</p>
            </div>
        </div>

        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-3"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Group 03</p>
            </div>
        </div>

        <div class="d-flex flex-row justify-content-center align-items-center">
            <div class="rounded-circle me-3 justify-content-center align-items-center d-flex"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                <i class="bi bi-plus-lg"></i>
            </div>
            <div class="mt-2 fw-bold">
                <p class="text-muted mt-2" style="font-size: small;">Create Group Chat</p>
            </div>
        </div>

    </div>

</template>


<script>
export default {
    name: 'GroupChat'
}
</script>

<style>
#contact-item {
    transition: background-color 0.3s ease-in-out;
}

#contact-item:hover {
    background-color: #efefef;
}
</style>