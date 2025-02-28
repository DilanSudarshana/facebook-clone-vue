<template>
    <div class="container bg-light p-2 rounded shadow-sm">

        <div class="row p-3">
            <div class="col-lg-2">
                <div class="rounded-circle me-3"
                    style="width: 40px; height: 40px; overflow: hidden; background-color: #f0f0f0;">
                </div>
            </div>
            <div class="col-lg-10 text-start">
                <input type="text" class="form-control rounded-pill" placeholder="Whats on your mind Dilan?"
                   style="background-color:azure;" aria-label="Recipient's username" aria-describedby="basic-addon2">
            </div>
        </div>

        <div class="p-2 row d-flex justify-content-center align-item-center">
            <div class="col-lg-4 d-flex">
                <p class="fw-bold" style="font-size: small;">Live Video</p>
            </div>
            <div class="col-lg-4 d-flex">
                <p class="fw-bold" style="font-size: small;">Photo/Videos</p>
            </div>
            <div class="col-lg-4 d-flex">
                <p class="fw-bold" style="font-size: small;">Feeling/Activity</p>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'SearchBar',

}
</script>
