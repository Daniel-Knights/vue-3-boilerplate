<template>
    <div id="not-found">
        <h1>PAGE NOT FOUND</h1>
    </div>
</template>

<script>
export default {
    name: '404',

    setup() {
        document.title = 'Page Not Found | Vue3 Blog';
    },
};
</script>

<style lang="scss">
#not-found {
    @include flex-x(center, center);
    height: 100vh;

    h1 {
        transform: translateY(-100%);
    }
}
</style>
