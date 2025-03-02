<template>

    <div class="btn rounded-circle me-1 d-flex shadow-sm justify-content-center align-items-center" type="button"
        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" title="Home"
        style="width: 30px; height: 30px;">
        <i class="bi bi-bell-fill fs-5"></i>
    </div>

    <div class="dropdown-menu mt-1">
        <div class="container">
            <div class="row p-2">
                <div class=" d-flex justify-content-between align-items-start">
                    <div class="d-flex justify-content-start align-items-start">
                        <div>
                            <h5 class="text-muted">Notification</h5>
                        </div>
                    </div>
                    <div class="d-flex justify-content-start align-items-end">
                        <div>
                            <i class="bi bi-x-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
export default {
    name: 'NotificationBox'
}
</script>
<style>
.dropdown-menu {
    width: 50vh;
    height: 80vh;
}

#dropdownMenuButton1:focus,
#dropdownMenuButton1:active,
#dropdownMenuButton1.show {
    outline: none !important;
    border: none !important;
    color: blue !important;
}
</style>