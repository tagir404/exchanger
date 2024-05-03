<script setup lang="ts">
import { ref, reactive } from 'vue'
import IconArrow from '@/components/IconArrow.vue'
import ExchangerBlockTextField from '@/components/Exchanger/ExchangerBlockTextField.vue'
import ExchangerBlockPayment from '@/components/Exchanger/ExchangerBlockPayment.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'

const currencyItems = ref(['all', 'usd', 'eur', 'rus'])
const activeCurrency = reactive({
    give: 'all',
    take: 'all'
})

const direction = reactive({
    give: 'Visa/MasterCard USD',
    take: 'Visa/MasterCard USD'
})

const openPaymentSelect = ref<'give' | 'take' | null>(null)

const paymentsItems = ref([
    'Cash RUB',
    'Visa/MasterCard USD',
    'Visa/MasterCard EUR',
    'Ethereum ETH',
    'EOS EOS',
    'TrueUSD TRC20 TUSD',
    'Tether TRC20 USDT',
    'Monero XMR',
    'Cash RUB',
    'Visa/MasterCard USD',
    'Visa/MasterCard EUR',
    'Ethereum ETH',
    'EOS EOS',
    'TrueUSD TRC20 TUSD',
    'Tether TRC20 USDT',
    'Monero XMR'
])

function changeDirection(d: 'give' | 'take', payment: string) {
    direction[d] = payment
    openPaymentSelect.value = null
}
</script>

<template>
    <div class="exchanger">
        <div class="exchanger__col">
            <div class="exchanger__col-header">
                <div class="exchanger__col-info">
                    <h4 class="exchanger__col-title">Give</h4>
                    <p class="exchanger__col-fn">Min: 50.00 Max: 10000.00</p>
                    <IconArrow />
                </div>
                <ExchangerBlockTextField
                    :type="'number'"
                    :placeholder="'0.00'"
                    :icon="direction.give"
                    @setOpenPaymentSelect="openPaymentSelect = 'give'"
                />
            </div>
            <div class="exchanger__currency">
                <div class="exchanger__currency-list">
                    <div
                        v-for="currency in currencyItems"
                        :key="currency"
                        class="exchanger__currency-item"
                        :class="{
                            'exchanger__currency-item_active': currency === activeCurrency.give
                        }"
                        @click="activeCurrency.give = currency"
                    >
                        {{ currency }}
                    </div>
                </div>
            </div>
            <div
                class="exchanger__payments"
                :class="{ 'exchanger__payments_select-open': openPaymentSelect === 'give' }"
            >
                <div class="exchanger__payments-list">
                    <ExchangerBlockPayment
                        v-for="payment in paymentsItems"
                        :key="payment"
                        :payment="payment"
                        :selected="direction.give === payment"
                        @click="changeDirection('give', payment)"
                    />
                </div>
            </div>
        </div>
        <div class="exchanger__col">
            <div class="exchanger__col-header">
                <div class="exchanger__col-info">
                    <h4 class="exchanger__col-title">Take</h4>
                    <p class="exchanger__col-fn">Reserve: 1001028.70</p>
                    <IconArrow />
                </div>
                <ExchangerBlockTextField
                    :type="'number'"
                    :placeholder="'0.00'"
                    :icon="direction.take"
                    @setOpenPaymentSelect="openPaymentSelect = 'take'"
                />
            </div>
            <div class="exchanger__currency">
                <div class="exchanger__currency-list">
                    <div
                        v-for="currency in currencyItems"
                        :key="currency"
                        class="exchanger__currency-item"
                        :class="{
                            'exchanger__currency-item_active': currency === activeCurrency.take
                        }"
                        @click="activeCurrency.take = currency"
                    >
                        {{ currency }}
                    </div>
                </div>
            </div>
            <div
                class="exchanger__payments"
                :class="{ 'exchanger__payments_select-open': openPaymentSelect === 'take' }"
            >
                <div class="exchanger__payments-list">
                    <ExchangerBlockPayment
                        v-for="payment in paymentsItems"
                        :key="payment"
                        :payment="payment"
                        :selected="direction.take === payment"
                        @click="changeDirection('take', payment)"
                    />
                </div>
            </div>
        </div>
        <div class="exchanger__col">
            <div class="exchanger__col-header">
                <div class="exchanger__col-info">
                    <h4 class="exchanger__col-title">Exchange details</h4>
                    <p class="exchanger__col-fn">Rate: 1.022:1</p>
                </div>
                <div class="exchanger__direction">
                    <ExchangerBlockPayment
                        :payment="direction.give"
                        :arrow="'up'"
                    />
                    <ExchangerBlockPayment
                        :payment="direction.take"
                        :arrow="'down'"
                    />
                </div>
                <p class="exchanger__direction-requirement">
                    This direction requires verification.
                </p>
            </div>
            <form
                class="exchanger__form"
                @submit.prevent="() => {}"
            >
                <h5 class="exchanger__form-title">Enter form</h5>
                <div class="exchanger__form-textfields">
                    <ExchangerBlockTextField
                        :type="'text'"
                        :placeholder="'City'"
                    />
                    <ExchangerBlockTextField
                        :type="'text'"
                        :placeholder="'Name Surname card holder'"
                        :icon="'Visa/MasterCard USD'"
                    />
                    <ExchangerBlockTextField
                        :type="'text'"
                        :placeholder="'Tether ERC20 address'"
                        :icon="'Tether TRC20 USDT'"
                    />
                    <ExchangerBlockTextField
                        :type="'text'"
                        :placeholder="'E-mail'"
                    />
                </div>

                <div class="exchanger__form-agreements">
                    <div class="exchanger__form-agreement">
                        <p>I agree with the <a href="#">rules</a></p>
                        <BaseCheckbox />
                    </div>
                    <div class="exchanger__form-agreement">
                        <p>I agree with the <a href="#">KYC/AML policy</a></p>
                        <BaseCheckbox />
                    </div>
                </div>

                <button
                    class="exchanger__form-submit-btn"
                    type="submit"
                >
                    Start exchange
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.exchanger {
    font-weight: 300;
    background: #fff;
    width: 1140px;
    max-height: 665px;
    display: flex;
    border-radius: 32px 32px 0 0;
    box-shadow: 0px 25px 50px 0px rgba(23, 22, 37, 0.15);
    overflow: hidden;

    &__col {
        display: flex;
        flex-direction: column;
        flex: 1;

        &:not(:last-child) {
            border-right: 1px solid #f5f5f5;
        }
    }

    &__col-header {
        padding: 24px 16px 16px;
    }

    &__col-info {
        display: flex;
        align-items: baseline;
        gap: 17px;
        line-height: 1;
        margin-bottom: 16px;
    }

    &__col-title {
        color: #282e38;
        font-size: 24px;
        font-weight: 600;
    }

    &__col-fn {
        color: #96989c;
        font-size: 13px;
    }

    &__currency {
        padding: 16px;
        border-top: 1px solid #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        background: url('@/assets/currency-bg.svg');
    }

    &__currency-list {
        display: flex;
        border-radius: 8px;
        overflow: hidden;
    }

    &__currency-item {
        color: #06006c;
        font-size: 14px;
        line-height: 1;
        text-transform: uppercase;
        flex: 1;
        text-align: center;
        cursor: pointer;
        padding: 8px;
        border: 1px solid #f7fafc;
        background: #fff;

        &_active {
            color: #fff;
            background: #06006c;
        }
    }

    &__payments,
    &__payments-list {
        &::-webkit-scrollbar {
            width: 3px;
        }

        &::-webkit-scrollbar-track {
            background: #f5f5f5;
        }

        &::-webkit-scrollbar-thumb {
            background: #06006c;
            border-radius: 10px;
        }
    }

    &__payments {
        overflow: auto;
    }

    &__payments-list {
        background: #fff;
    }

    &__payments-item {
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;

        &:hover {
            background: #f5f5f5;
        }
    }

    &__payments-item-icon {
        display: flex;
        padding: 5px;
    }

    &__direction {
        border-radius: 8px;
        border: 1px dashed #c5e4ee;
        margin-bottom: 16px;

        & div:not(:last-child) {
            border-bottom: 1px solid #f5f5f5;
        }
    }

    &__direction-requirement {
        color: #4bb56b;
        font-size: 14px;
        text-align: center;
    }

    &__form {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 0 16px 24px;
    }

    &__form-title {
        color: #282e38;
        font-size: 18px;
        margin-bottom: 10px;
    }

    &__form-textfields {
        display: flex;
        flex-direction: column;
        gap: 2px;
        margin-bottom: 10px;
    }

    &__form-agreements {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 24px;
    }

    &__form-agreement {
        color: #96989c;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            color: #4070f4;
            text-decoration: none;
        }
    }

    &__form-submit-btn {
        font-family: inherit;
        font-size: 20px;
        color: #fff;
        background: #06006c;
        box-shadow: 0px 20px 40px 0px rgba(23, 22, 37, 0.15);
        border: none;
        border-radius: 26px;
        padding: 18px 16px;
        cursor: pointer;
        margin-top: auto;

        &:hover {
            background: #100a76;
        }
    }
}

@media (max-width: 550px) {
    .exchanger {
        flex-direction: column;
        max-height: none;

        &__payments {
            display: none;

            &_select-open {
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                background: rgba(0, 0, 0, 0.1);
                z-index: 10000;
                width: 100%;
                height: 100vh;
                padding-top: 28px;
                overflow: hidden;
            }
        }

        &__payments-list {
            width: 100%;
            height: 100%;
            padding: 8px 24px 24px 24px;
            border-radius: 16px 16px 0px 0px;
            overflow: scroll;
            max-height: 100%;
        }
    }
}
</style>