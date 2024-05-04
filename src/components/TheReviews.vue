<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import IconAuthor from '@/components/Icons/IconAuthor.vue'

const reviews = ref([
    {
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Name'
    },
    {
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Name'
    },
    {
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Name'
    },
    {
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Name'
    },
    {
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Name'
    },
    {
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Name'
    }
])
</script>

<template>
    <section class="reviews">
        <AppContainer>
            <div class="reviews__head">
                <h2 class="reviews__title section-title">Reviews</h2>
                <BaseButton :variant="'white'">See all</BaseButton>
            </div>
            <div class="reviews__list">
                <article
                    v-for="review in reviews"
                    :key="review.text"
                    class="reviews__item"
                >
                    <div class="reviews__item-main">
                        <h3 class="reviews__item-title">{{ review.title }}</h3>
                        <p class="reviews__item-text">{{ review.text }}</p>
                        <span class="reviews__item-date">{{ review.date }}</span>
                    </div>
                    <div class="reviews__item-author">
                        <IconAuthor :variant="'white'" />
                        <span class="reviews__item-author-name">{{ review.author }}</span>
                    </div>
                </article>
            </div>
        </AppContainer>
    </section>
</template>

<style scoped lang="scss">
.reviews {
    background: radial-gradient(61.75% 61.75% at 50% 100%, #5e5c76 0%, #31353d 100%);
    padding: 110px 0;

    &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 56px;
    }

    &__title {
        color: #fff;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 32px;
    }

    &__item-main {
        background: #fff;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-radius: 8px;
        padding: 24px;
        position: relative;
        margin-bottom: 15px;

        &::after {
            content: '';
            position: absolute;
            border-right: 43px solid transparent;
            border-top: 15px solid #fff;
            height: 0;
            width: 0;
            top: 100%;
            left: 36px;
        }
    }

    &__item-title {
        font-size: 18px;
        font-weight: 400;
    }

    &__item-text {
        font-weight: 300;
    }

    &__item-date {
        color: #b6b6b6;
        font-size: 12px;
        text-transform: uppercase;
    }

    &__item-author {
        color: #fff;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 16px 24px;
    }
}
</style>
