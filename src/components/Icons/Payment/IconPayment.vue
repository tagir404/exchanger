<script setup lang="ts">
import IconVisaMasterCardUSD from './IconVisaMasterCardUSD.vue'
import IconVisaMasterCardEUR from './IconVisaMasterCardEUR.vue'
import IconVisaMasterCardUAH from './IconVisaMasterCardUAH.vue'
import IconCash from './IconCash.vue'
import IconEOS from './IconEOS.vue'
import IconEthereum from './IconEthereum.vue'
import IconMonero from './IconMonero.vue'
import IconThether from './IconThether.vue'
import IconTrueUSD from './IconTrueUSD.vue'

defineProps<{
    payment: string
}>()
</script>

<template>
    <IconVisaMasterCardUSD v-if="payment === 'Visa/MasterCard USD'" />
    <IconVisaMasterCardEUR v-if="payment === 'Visa/MasterCard EUR'" />
    <IconVisaMasterCardUAH v-if="payment === 'Visa/MasterCard UAH'" />
    <IconCash v-if="payment === 'Cash RUB'" />
    <IconMonero v-if="payment === 'Monero XMR'" />
    <IconEthereum v-if="payment === 'Ethereum ETH'" />
    <IconEOS v-if="payment === 'EOS EOS'" />
    <IconThether v-if="payment === 'Tether TRC20 USDT'" />
    <IconTrueUSD v-if="payment === 'TrueUSD TRC20 TUSD'" />
</template>
