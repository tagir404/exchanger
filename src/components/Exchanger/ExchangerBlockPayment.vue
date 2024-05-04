<script setup lang="ts">
import IconArrow from '@/components/Icons/IconArrow.vue'
import IconSelected from '@/components/Icons/IconSelected.vue'
import type { Payment } from '@/types/types'

defineProps<{
    payment: Payment
    arrow?: 'up' | 'down'
    selected?: boolean
}>()
</script>

<template>
    <div class="ex-payment">
        <component :is="payment.icon" />
        <span class="ex-payment__text">{{ payment.text }}</span>
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
