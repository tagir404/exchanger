<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import IconAuthor from '@/components/Icons/IconAuthor.vue'
import IconViews from '@/components/Icons/IconViews.vue'
import img1 from '@/assets/img/news/1.png'
import img2 from '@/assets/img/news/2.png'
import img3 from '@/assets/img/news/3.png'
import img4 from '@/assets/img/news/4.png'
import img5 from '@/assets/img/news/5.png'
import img6 from '@/assets/img/news/6.png'
import type Swiper from 'swiper'

const news = ref([
    {
        img: img1,
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Admin'
    },
    {
        img: img2,
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Admin'
    },
    {
        img: img3,
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Admin'
    },
    {
        img: img4,
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Admin'
    },
    {
        img: img5,
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Admin'
    },
    {
        img: img6,
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        date: '11 Feb 2023, 17:49',
        author: 'Admin'
    }
])

const swiperEl = ref<Swiper>()

onMounted(() => {
    if (window.innerWidth > 550) {
        swiperEl.value?.destroy()
    }
})
</script>

<template>
    <section class="news">
        <AppContainer>
            <div class="news__head">
                <h2 class="news__title section-title">News</h2>
                <BaseButton :variant="'blue'">See all</BaseButton>
            </div>
            <swiper-container
                class="news__list"
                pagination="true"
            >
                <swiper-slide
                    v-for="newsItem in news"
                    :key="newsItem.text"
                    class="news__item"
                >
                    <img
                        :src="newsItem.img"
                        alt="News img"
                    />
                    <div class="news__item-main">
                        <h3 class="news__item-title">{{ newsItem.title }}</h3>
                        <p class="news__item-text">{{ newsItem.text }}</p>
                        <div class="news__item-footer">
                            <IconAuthor :variant="'blue'" />
                            <p class="news__item-author">
                                <span class="news__item-author-name">{{ newsItem.author }}</span>
                                <span class="news__item-date">{{ newsItem.date }}</span>
                            </p>
                            <div class="news__item-views">
                                <IconViews />
                                0
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </AppContainer>
    </section>
</template>

<style scoped lang="scss">
.news {
    background: #fff;
    padding: 110px 0;

    &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 56px;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 32px;
    }

    &__item {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 25px 50px 0px rgba(112, 112, 112, 0.07);
    }

    &__item-main {
        padding: 24px;
    }

    &__item-title {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    &__item-text {
        font-weight: 300;
        margin-bottom: 24px;
    }

    &__item-footer {
        color: #50535a;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__item-author {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
        margin-right: 16px;
    }

    &__item-date {
        color: #b6b6b6;
        font-size: 12px;
        text-transform: uppercase;
    }

    &__item-views {
        color: #b6b6b6;
        display: flex;
        align-items: center;
        gap: 7px;
    }
}

@media screen and (max-width: $mobile) {
    .news {
        padding: 24px 0;

        &__head {
            margin-bottom: 16px;
        }

        &__list {
            display: block;

            &::part(container) {
                padding-bottom: 10px;
            }

            &::part(pagination) {
                position: static;
                margin-top: 32px;
                display: flex;
                justify-content: center;
                gap: 8px;
            }

            &::part(bullet) {
                opacity: 1;
                width: 10px;
                height: 10px;
                background: #f5f5f5;
                outline: 1px solid $primaryBlue;
                outline-offset: 1px;
            }

            &::part(bullet-active) {
                opacity: 1;
                width: 10px;
                height: 10px;
                background: $primaryBlue;
                outline: 1px solid $primaryBlue;
                outline-offset: 1px;
            }
        }
    }
}
</style>
