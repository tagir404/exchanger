<script setup lang="ts">
import { ref, markRaw } from 'vue'
import IconGuarantee from '@/components/Icons/Advantages/IconGuarantee.vue'
import IconConfidentiality from '@/components/Icons/Advantages/IconConfidentiality.vue'
import IconSupport from '@/components/Icons/Advantages/IconSupport.vue'

const advantages = ref([
    {
        title: 'Работа с наличными',
        text: 'Выдаем и принимаем наличные только в собственных офисах в ОАЭ и других стран',
        icon: markRaw(IconGuarantee)
    },
    {
        title: 'Выгодный обмен',
        text: 'Мы всегда стараемся предложить лучшие цены на рынке',
        icon: markRaw(IconConfidentiality)
    },
    {
        title: 'Надежный сервис',
        text: 'Многочисленные положительные отзывы подтверждают высокое качество нашей работы',
        icon: markRaw(IconSupport)
    }
])
</script>

<template>
    <section class="advantages">
        <AppContainer class="advantages__container">
            <h2 class="advantages__title section-title">
                Наша платформа обеспечивает безопасные и
                <span>быстрые обмены криптовалют</span>
            </h2>

            <swiper-container
                class="advantages__list"
                slides-per-view="auto"
                space-between="32px"
            >
                <swiper-slide
                    v-for="advantage in advantages"
                    :key="advantage.title"
                    class="advantages__item"
                >
                    <component
                        :is="advantage.icon"
                        class="advantages__item-icon"
                    />
                    <div class="advantages__item-divider"></div>
                    <h3 class="advantages__item-title">{{ advantage.title }}</h3>
                    <p class="advantages__item-text">{{ advantage.text }}</p>
                </swiper-slide>
            </swiper-container>
        </AppContainer>
    </section>
</template>

<style scoped lang="scss">
.advantages {
    padding: 110px 0 180px;
    background: #fff;
    position: relative;

    &__title {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 56px;

        span {
            color: $primaryBlue;
        }
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 32px;
    }

    &__item-icon {
        margin-bottom: 16px;
    }

    &__item-divider {
        width: 80px;
        height: 1px;
        background: #474c55;
        margin-bottom: 16px;
    }

    &__item-title {
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 8px;
    }

    &__item-text {
        font-weight: 300;
    }
}

@media screen and (max-width: $mobile) {
    .advantages {
        padding: 24px 0;
        overflow: hidden;

        &__title {
            margin-bottom: 16px;
        }

        &__list {
            display: block;

            &::part(container) {
                overflow: visible;
            }
        }

        &__item {
            width: 50vw;
        }
    }
}
</style>
