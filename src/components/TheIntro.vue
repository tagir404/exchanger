<script setup lang="ts">
import ExchangerBlock from '@/components/Exchanger/ExchangerBlock.vue'
</script>

<template>
    <section class="intro">
        <AppContainer class="intro__container">
            <h1 class="intro__title">Exchange Cryptocurrencies Safely and Securely with Us</h1>
            <p class="intro__subtitle">
                Trade Cryptocurrencies Effortlessly with Our Exchange Service
            </p>
            <ExchangerBlock />
        </AppContainer>
    </section>
</template>

<style scoped lang="scss">
.intro {
    background:
        url('@/assets/intro-bg.svg') no-repeat center,
        radial-gradient(61.75% 61.75% at 50% 100%, #5e5c76 0%, #31353d 100%);
    padding-top: 51px;

    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__title {
        color: #fff;
        font-size: 48px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 11px;
        max-width: 750px;
    }

    &__subtitle {
        color: #fff;
        font-size: 18px;
        text-align: center;
        max-width: 750px;
        margin-bottom: 51px;
    }
}
</style>
