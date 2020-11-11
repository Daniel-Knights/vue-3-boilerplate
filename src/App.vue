<template>
    <transition name="loading">
        <Loading v-if="loading" />
    </transition>
    <Background />
    <Toggle />
    <div class="container">
        <router-view />
    </div>
    <Footer />
</template>

<script>
import { ref } from 'vue';

import Loading from '@/components/Loading.vue';
import Background from '@/components/Background.vue';
import Toggle from '@/components/Toggle.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'App',

    components: { Loading, Background, Toggle, Footer },

    setup() {
        const loading = ref(true);

        window.addEventListener('load', () => {
            loading.value = false;

            document.querySelector('body').style.overflow = 'visible';
        });

        return { loading };
    },
};
</script>

<style lang="scss">
.loading-leave-active,
.loading-leave-to {
    opacity: 0;
    transition: opacity 0.25s;
}
</style>
