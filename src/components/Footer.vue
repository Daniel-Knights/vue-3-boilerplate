<template>
    <div id="footer">
        <small>&copy;Daniel Knights | {{ new Date().getFullYear() }}</small>
    </div>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style lang="scss">
#footer {
    @include flex-x(center, center);
    height: 100px;
}
</style>
