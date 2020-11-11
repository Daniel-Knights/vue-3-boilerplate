<template>
    <div id="single-post" v-if="!loading">
        <h1>{{ selectedPost.title }}</h1>
        <p>{{ selectedPost.body }}</p>
    </div>
    <router-link v-if="!loading" :to="{ name: 'blog' }" class="go-back"
        ><i class="fa fa-arrow-left"></i> Go Back</router-link
    >
</template>

<script>
import { computed, watch } from 'vue';
import postsStore from '@/store/posts';
import router from '@/router';

export default {
    name: 'post',

    setup() {
        const { id } = router.currentRoute.value.params;
        const { loading, selectedPost, fetchSelectedPost } = postsStore();

        fetchSelectedPost(id);

        watch(selectedPost, () => {
            if (selectedPost.value.title)
                document.title = `${selectedPost.value.title} | Vue3 Blog`;
        });

        return { loading, selectedPost: computed(() => selectedPost.value) };
    },
};
</script>

<style lang="scss">
#single-post {
    position: relative;
    margin: 40px 10px;
    padding: 10px;
    color: var(--white);
    background: rgba(var(--black-rgb), 0.5);
    border-radius: 10px;
    animation: opacity-in 0.25s;

    p {
        margin: 20px;
        text-align: left;
    }
}

a.go-back {
    cursor: pointer;
    position: absolute;
    left: 0;
    width: fit-content;
    animation: opacity-in 0.25s;

    &:hover {
        color: rgba(var(--black-rgb), 0.8);
    }
}
</style>
