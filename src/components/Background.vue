<template>
    <img ref="imgOne" src="@/assets/svg/odd-slice.svg" />
    <img ref="imgTwo" src="@/assets/svg/slice.svg" />
</template>

<script>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

export default {
    name: 'Background',

    setup() {
        const imgOne = ref(null);
        const imgTwo = ref(null);

        const bgIn = () => {
            gsap.defaults({ ease: 'power-3' });
            gsap.set([imgOne.value, imgTwo.value], { y: '-100%', opacity: 0 });
            gsap.to(imgOne.value, { y: '-50%', opacity: 1, duration: 3 });
            gsap.to(imgTwo.value, { y: '-50%', opacity: 1, duration: 2 });
        };

        onMounted(bgIn);

        return { imgOne, imgTwo };
    },
};
</script>

<style lang="scss">
img {
    position: absolute;
    left: 0;
    width: 100%;
    z-index: -1000;
}
</style>
