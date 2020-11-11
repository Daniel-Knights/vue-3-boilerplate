<template>
    <div id="posts-container">
        <Post v-for="post in posts.slice(0, 10)" :key="post.id" :post="post" />
    </div>
</template>

<script>
import { computed } from 'vue';
import postsStore from '@/store/posts';

import Post from '@/components/Post.vue';

export default {
    name: 'Posts',

    components: { Post },

    setup() {
        const { posts, fetchPosts } = postsStore();

        fetchPosts();

        return { posts: computed(() => posts.value) };
    },
};
</script>

<style lang="scss">
#posts-container {
    @include flex-responsive;
    margin: auto;
    padding: 20px;
    max-width: 60rem;
}
</style>
