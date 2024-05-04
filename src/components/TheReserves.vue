<script setup lang="ts">
import { ref } from 'vue'

import imgVisaMasterCard from '@/assets/img/reserves/visa-mastercard.png'
import imgDogecoin from '@/assets/img/reserves/dogecoin.png'
import imgTron from '@/assets/img/reserves/tron.png'
import imgMonero from '@/assets/img/reserves/monero.svg'
import imgPolygon from '@/assets/img/reserves/polygon.png'
import imgPrivat24 from '@/assets/img/reserves/privat24.png'
import imgTetherERC20 from '@/assets/img/reserves/tether-erc20.png'
import imgEOS from '@/assets/img/reserves/eos.svg'
import imgCurrency2 from '@/assets/img/reserves/currency2.svg'
import imgSolana from '@/assets/img/reserves/solana.png'
import imgUsdCoin from '@/assets/img/reserves/usd-coin.png'
import imgMono from '@/assets/img/reserves/mono.png'
import imgTetherTRC20 from '@/assets/img/reserves/tether-trc20.svg'
import imgCardano from '@/assets/img/reserves/cardano.png'
import imgTrueUsdTRC20 from '@/assets/img/reserves/trueusd-trc20.svg'
import imgEthereum from '@/assets/img/reserves/ethereum.svg'
import imgRipple from '@/assets/img/reserves/ripple.png'
import imgBitcoin from '@/assets/img/reserves/bitcoin.png'
import imgVisa from '@/assets/img/reserves/visa.svg'
import imgMasterCard from '@/assets/img/reserves/mastercard.svg'

const reserves = ref([
    {
        name: 'Visa/MasterCard',
        value: '10000000000000 UAH',
        img: imgVisaMasterCard
    },
    {
        name: 'EOS',
        value: '10000000010.1729 EOS',
        img: imgEOS
    },
    {
        name: 'Cardano',
        value: '10000000000 ADA',
        img: imgCardano
    },
    {
        name: 'Dogecoin',
        value: '10000000000 DOGE',
        img: imgDogecoin
    },
    {
        name: 'Currency2',
        value: '3901293810 TEST',
        img: imgCurrency2
    },
    {
        name: 'TrueUSD TRC20',
        value: '100000013.29 TUSD',
        img: imgTrueUsdTRC20
    },
    {
        name: 'Tron',
        value: '100000000 TRX',
        img: imgTron
    },
    {
        name: 'Solana',
        value: '100000000 SOL',
        img: imgSolana
    },
    {
        name: 'Ethereum',
        value: '100000000 ETH',
        img: imgEthereum
    },
    {
        name: 'Monero',
        value: '100000000 XMR',
        img: imgMonero
    },
    {
        name: 'USD Coin',
        value: '100000000 USDC',
        img: imgUsdCoin
    },
    {
        name: 'Ripple',
        value: '100000000 XRP',
        img: imgRipple
    },
    {
        name: 'Polygon',
        value: '100000000 MATIC',
        img: imgPolygon
    },
    {
        name: 'Visa/MasterCard',
        value: '100000000 KZT',
        img: imgVisaMasterCard
    },
    {
        name: 'Bitcoin',
        value: '99999999 BTC',
        img: imgBitcoin
    },
    {
        name: 'Приват 24',
        value: '99998103.69 UAH',
        img: imgPrivat24
    },
    {
        name: 'mono',
        value: '99995918.8 UAH',
        img: imgMono
    },
    {
        name: 'Visa/MasterCard',
        value: '10000050 USD',
        img: imgVisa
    },
    {
        name: 'Tether ERC20',
        value: '1001028.7 USDT',
        img: imgTetherERC20
    },
    {
        name: 'Tether TRC20',
        value: '1001021.59 USDT',
        img: imgTetherTRC20
    },
    {
        name: 'Visa/MasterCard',
        value: '1000000 EUR',
        img: imgMasterCard
    }
])
</script>

<template>
    <section class="reserves">
        <AppContainer class="reserves__container">
            <h2 class="reserves__title section-title">Reserves</h2>
            <div class="reserves__list">
                <div
                    v-for="reservesItem in reserves"
                    :key="reservesItem.name"
                    class="reserves__item"
                >
                    <img
                        :src="reservesItem.img"
                        alt="img"
                        class="reserves__item-img"
                    />
                    <span class="reserves__item-name">{{ reservesItem.name }}</span>
                    <span class="reserves__item-value">{{ reservesItem.value }}</span>
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<style scoped lang="scss">
.reserves {
    color: #fff;
    background: #2a2e36;
    height: 800px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:deep(.container) {
        padding: 64px 120px;
    }

    &__container {
        display: flex;
        flex-direction: column;
        background: #35393f;
        position: absolute;
        bottom: 0;
        border-radius: 30px 30px 0 0;
    }

    &__title {
        text-align: center;
        margin-bottom: 24px;
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 23px 14px;
    }

    &__item {
        padding: 27px;
        background: #43474f;
        box-shadow: 0px 25px 50px 0px #7373730a;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__item-value {
        color: #7a8698;
        margin-left: auto;
    }
}

@media screen and (max-width: $mobile) {
    .reserves {
        height: auto;
        background: none;

        &:deep(.container) {
            padding: 24px;
        }

        &__container {
            position: static;
            border-radius: 8px 8px 0 0;
        }

        &__title {
            margin-bottom: 16px;
        }

        &__list {
            display: flex;
            flex-direction: column;
        }

        &__item {
            flex-wrap: wrap;
            padding: 16px;

            &:nth-child(n + 6) {
                display: none;
            }
        }

        &__item-value {
            width: 100%;
        }
    }
}
</style>
