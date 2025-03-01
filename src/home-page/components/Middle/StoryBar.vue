<template>
    <div class="bg-light p-2 d-flex justify-content-between  align-items-center mt-2 rounded">
        <div id="row" class="row overflow-x-scroll d-flex flex-nowrap flex-row overflow-hidden mx-1">

            <div class="card m-2" style="width: 9rem;height: 12rem;">

            </div>

            <div class="card m-2" style="width: 9rem;height: 12rem;">

            </div>

            <div class="card m-2" style="width: 9rem;height: 12rem;">

            </div>

            <div class="card m-2" style="width: 9rem;height: 12rem;">

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'StoryBar',

}
</script>

<style>
.row::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.row::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 99px;
}

.row::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 99px;
    transition: background 0.3s ease-in-out;
}

.row:hover::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
}
</style>
