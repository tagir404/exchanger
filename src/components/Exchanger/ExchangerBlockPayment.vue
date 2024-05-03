<script setup lang="ts">
import IconPayment from '@/components/PaymentIcons/IconPayment.vue'
import IconArrow from '@/components/IconArrow.vue'
import IconSelected from '@/components/IconSelected.vue'

defineProps<{
    payment: string
    arrow?: 'up' | 'down'
    selected?: boolean
}>()
</script>

<template>
    <div class="ex-payment">
        <IconPayment :payment="payment" />
        <span class="ex-payment__text">{{ payment }}</span>
        <IconArrow
            v-if="arrow"
            :direction="arrow"
        />
        <IconSelected v-if="selected" />
    </div>
</template>

<style scoped lang="scss">
.ex-payment {
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;

    &:hover {
        background: #f7fafc;
    }

    &__text {
        flex: 1;
    }
}
</style>
