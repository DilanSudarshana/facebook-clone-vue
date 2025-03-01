<template>

    <div class="h-100 d-flex flex-column justify-content-start align-items-start mt-1">

        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded mt-2 p-1" id="contact-item">
            <div class="rounded-circle me-2"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold">
                <p class="text-start fs-6">Dilan Sudarshana</p>
            </div>
        </div>

        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-2"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Friends</p>
            </div>
        </div>


        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-2"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Memories</p>
            </div>
        </div>

        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-2"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Saved</p>
            </div>
        </div>


        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-2"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Groups</p>
            </div>
        </div>


        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-2"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Video</p>
            </div>
        </div>


        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-2"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Marketplace</p>
            </div>
        </div>

        <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
            <div class="rounded-circle me-2"
                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
            </div>
            <div class="fw-bold mt-1">
                <p class="text-start">Feeds</p>
            </div>
        </div>

        <hr style="color: red;border: 1px solid black;width: 100%;">

        <div class="d-flex flex-row justify-content-center align-items-center">
            <button style="width: 30px; height: 30px;background-color: #f0f0f0;" class="btn rounded-circle me-3"
                type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
                aria-controls="collapseExample">
                <div class="d-flex justify-content-center align-items-center mb-2">
                    <p style="font-size: 12px;"><i class="bi bi-chevron-compact-down"></i></p>
                </div>
            </button>
            <div class="mt-2 fw-bold mt-3">
                <p class="text-start">See more</p>
            </div>
        </div>

        <div class="collapse w-100" id="collapseExample">

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div class="rounded-circle me-2"
                    style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                </div>
                <div class="mt-1">
                    <p class="text-start">Page 01</p>
                </div>
            </div>

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div class="rounded-circle me-2"
                    style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                </div>
                <div class="mt-1">
                    <p class="text-start">Page 02</p>
                </div>
            </div>

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div class="rounded-circle me-2"
                    style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                </div>
                <div class="mt-1">
                    <p class="text-start">Page 03</p>
                </div>
            </div>

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div class="rounded-circle me-2"
                    style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                </div>
                <div class="mt-1">
                    <p class="text-start">Page 03</p>
                </div>
            </div>

            <div class="d-flex flex-row justify-content-start align-items-start w-100 rounded p-1" id="contact-item">
                <div class="rounded-circle me-2"
                    style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                </div>
                <div class="mt-1">
                    <p class="text-start">Page 03</p>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
export default {
    name: 'ListItems'
}
</script>

<style>
p {
    font-size: 12px;
}

#contact-item {
    transition: background-color 0.3s ease-in-out;
}

#contact-item:hover {
    background-color: #efefef;
}
</style>
