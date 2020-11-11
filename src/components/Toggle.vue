<template>
    <div id="color-mode-container">
        <i class="far fa-sun" v-show="!darkModeEnabled"></i>
        <i class="fa fa-moon" v-show="darkModeEnabled"></i>
        <div @click="darkMode()" id="color-mode">
            <div id="color-mode-toggle" :class="{ 'dark-mode-enabled': darkModeEnabled }"></div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Toggle',

    setup() {
        const html = document.querySelector('html');
        const prefers = window.matchMedia('(prefers-color-scheme: dark)');
        const darkModeEnabled = ref(false);

        if (prefers.matches) {
            html.dataset.mode = 'dark';
            darkModeEnabled.value = true;
        }

        const darkMode = () => {
            if (html.dataset.mode === 'dark') {
                html.dataset.mode = 'light';
                darkModeEnabled.value = false;
            } else {
                html.dataset.mode = 'dark';
                darkModeEnabled.value = true;
            }
        };

        return { darkModeEnabled, darkMode };
    },
};
</script>

<style lang="scss">
#color-mode-container {
    @include flex-x(center, center);
    position: absolute;
    left: 50px;
    top: 40px;
    z-index: 1;

    #color-mode {
        cursor: pointer;
        @include flex-x(false, center);
        position: relative;
        padding: 0 2px;
        margin: 0 5px;
        height: 14px;
        width: 30px;
        border-radius: 10px;
        background: var(--black);

        &-toggle {
            position: relative;
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background: var(--white);
            transition: transform 0.1s ease;

            &.dark-mode-enabled {
                transform: translate(16px);
            }
        }
    }
}
</style>
