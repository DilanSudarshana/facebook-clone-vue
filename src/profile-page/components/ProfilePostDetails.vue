<template>

    <div class="d-flex flex-row justify-content-center align-items-start bg-light rounded mt-2 shadow" style="height: 18vh;">
        <div class="container">

            <div class="row">
                <div class="h-100 d-flex flex-row justify-content-between align-items-start mt-2 p-2">

                    <div class="mt-2 ms-2">
                        <h5 class="text-lead">Posts</h5>
                    </div>
                    <div class="d-flex">
                        <button type="button" class="btn btn-secondary me-2">Secondary</button>
                        <button type="button" class="btn btn-secondary me-2">Secondary</button>
                    </div>
                </div>
            </div>

            <hr class="mt-0">

            <div class="row mx-5 px-5">
                <div class=" d-flex justify-content-between align-items-center mt-1">
                    <div id="center-div" class="rounded d-flex align-items-center justify-content-center w-50"
                        style="width: 50vh; height: 30px;">
                        <h6><i class="bi bi-grid-fill"></i> List View</h6>
                    </div>

                    <div id="center-div" class="rounded d-flex align-items-center justify-content-center w-50"
                        style="width: 50vh; height: 30px;">
                        <h6><i class="bi bi-list"></i> Grid View</h6>
                    </div>

                </div>
            </div>
        </div>

    </div>



</template>

<script>

export default {
    name: 'ProfilePostDetails',

}
</script>
