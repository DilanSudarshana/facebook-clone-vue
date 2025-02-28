<template>

    <div class="d-flex flex-row justify-content-center align-items-start bg-light rounded" style="height: 15vh;">
        <div class="container">
            <div class="row">
                <div class="h-100 d-flex flex-row justify-content-center align-items-start mt-2">
                    <div class="rounded-circle me-3"
                        style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                    </div>
                    <div>
                        <input type="text" class="form-control rounded-pill" placeholder="Whats on your mind Dilan?"
                            style="height: 4vh;width: 40vh;margin-top: 2px;" aria-label="Recipient's username"
                            aria-describedby="basic-addon2">
                    </div>
                </div>
            </div>

            <div class="row mt-2">
                <div class="d-flex flex-row justify-content-center align-items-center">
                    <div class="d-flex flex-row justify-content-between align-items-center">

                        <div class="d-flex flex-row justify-content-between align-items-center me-1">
                            <div class="rounded-circle me-1"
                                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                            </div>
                            <p class="me-2 fw-bold mt-3">Live Video</p>
                        </div>

                        <div class="d-flex flex-row justify-content-between align-items-center me-1">
                            <div class="rounded-circle me-1"
                                style="width: 30px; height: 30px; overflow: hidden; background-color: #f0f0f0;">
                            </div>
                            <p class="me-2 fw-bold mt-3">Live Video</p>
                        </div>

                        <div class="d-flex flex-row justify-content-between align-items-center me-1">
                            <div class="rounded-circle me-1"
                                style="width: 30px; height: 30px; overflow: hidden; background-color:#f0f0f0;">
                            </div>
                            <p class="me-2 fw-bold mt-3">Live Video</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
export default {
    name: 'SearchBar',

}
</script>
<style>
p{
    font-size: 10px;
}
</style>