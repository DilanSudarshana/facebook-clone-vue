<template>
    <div class="col-lg-4 mt-2">
        <SearchBar></SearchBar>
        <StoryBar></StoryBar>
        <Post></Post>
    </div>
</template>

<script>
import Post from './Post.vue';
import SearchBar from './SearchBar.vue';
import StoryBar from './StoryBar.vue';
export default {
    name: 'MainMiddle',

    components: {
        SearchBar,
        StoryBar,
        Post,
    }

}
</script>
