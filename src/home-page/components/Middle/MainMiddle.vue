<template>
    <div class="col-lg-6 col-md-12 mt-2 g-5">
        <CreatePost></CreatePost>
        <StoryBar></StoryBar>
        <Post></Post>
    </div>
</template>

<script>
import Post from './Post.vue';
import SearchBar from './SearchBar.vue';
import StoryBar from './StoryBar.vue';
import CreatePost from './CreatePost.vue';


export default {
    name: 'MainMiddle',

    components: {
        SearchBar,
        StoryBar,
        Post,
        CreatePost,
    }

}
</script>
