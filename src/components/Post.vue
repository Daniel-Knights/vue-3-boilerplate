<template>
    <router-link
        class="post"
        :to="{
            name: 'post',
            params: { id: post.id, post: postUrl },
        }"
    >
        <h5>{{ post.title.toUpperCase() }}</h5>
        <p>{{ post.body }}</p>
        <div class="read-more">Read More</div>
    </router-link>
</template>

<script>
import { toRefs } from 'vue';

export default {
    name: 'Post',

    props: {
        post: {
            type: Object,
            required: true,
        },
    },

    setup(props) {
        const { post } = toRefs(props);
        const postUrl = post.value.title.split(' ').join('-');

        return { postUrl };
    },
};
</script>

<style lang="scss">
.post {
    position: relative;
    margin: 20px;
    width: calc(50% - 40px);
    min-width: 300px;
    height: 200px;
    text-align: left;
    border-radius: 10px;
    color: var(--black);
    background: rgba(var(--primary-rgb), 0.5);
    box-shadow: 0 0 10px -8px var(--black);
    backdrop-filter: blur(5px);
    overflow: hidden;
    transition: box-shadow 0.25s;
    animation: opacity-in 0.25s;

    * {
        padding: 10px;
    }

    .read-more {
        @include flex-x(center, flex-end);
        position: absolute;
        bottom: 0;
        height: 90px;
        width: 100%;
        background: linear-gradient(to bottom, transparent, var(--primary) 50%);
    }

    &:hover {
        box-shadow: 0 0 15px -5px var(--black);
    }
}
</style>
