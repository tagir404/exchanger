<script setup lang="ts">
import { ref, markRaw } from 'vue'
import IconGuarantee from '@/components/Icons/Advantages/IconGuarantee.vue'
import IconConfidentiality from '@/components/Icons/Advantages/IconConfidentiality.vue'
import IconSupport from '@/components/Icons/Advantages/IconSupport.vue'

const advantages = ref([
    {
        title: 'Guarantee',
        text: 'The cryptocurrency exchange guarantees the security and reliability of all transactions. Your funds will be protected from fraud and losses.',
        icon: markRaw(IconGuarantee)
    },
    {
        title: 'Confidentiality',
        text: 'Your personal information will be kept strictly confidential. The cryptocurrency exchange ensures a high level of data protection for its clients.',
        icon: markRaw(IconConfidentiality)
    },
    {
        title: 'Support',
        text: 'The 24/7 customer support service is always ready to help you with any questions or issues that may arise while using the service.',
        icon: markRaw(IconSupport)
    },
    {
        title: 'Fast Transactions',
        text: 'The cryptocurrency exchange offers fast and efficient transactions, allowing you to quickly receive your funds without unnecessary delays.',
        icon: markRaw(IconGuarantee)
    },
    {
        title: 'Wide Range of Currencies',
        text: 'You can exchange various cryptocurrencies for fiat money or other cryptocurrencies. The cryptocurrency exchange provides a wide range of options for trading.',
        icon: markRaw(IconGuarantee)
    },
    {
        title: 'Competitive Rates',
        text: 'The cryptocurrency exchange offers competitive exchange rates, allowing you to get the maximum benefit from your cryptocurrency operations.',
        icon: markRaw(IconGuarantee)
    }
])
</script>

<template>
    <section class="advantages">
        <AppContainer class="advantages__container">
            <h2 class="advantages__title section-title">
                Our platform facilitates secure and <span>swift cryptocurrency exchanges</span>
            </h2>

            <div class="advantages__list">
                <div
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
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<style scoped lang="scss">
.advantages {
    padding: 110px 0 180px;

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
</style>
