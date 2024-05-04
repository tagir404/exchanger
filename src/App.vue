<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheIntro from '@/components/TheIntro.vue'
import TheAdvantages from '@/components/TheAdvantages.vue'
import TheReserves from '@/components/TheReserves.vue'
import TheNews from '@/components/TheNews.vue'
import TheReviews from '@/components/TheReviews.vue'
import TheFeedback from '@/components/TheFeedback.vue'
</script>

<template>
    <div class="wrapper">
        <TheHeader />
        <TheIntro />
        <TheAdvantages />
        <TheReserves />
        <TheNews />
        <TheReviews />
        <TheFeedback />
    </div>
</template>

<style scoped>
.wrapper {
    width: 100%;
    min-height: 100vh;
}
</style>
