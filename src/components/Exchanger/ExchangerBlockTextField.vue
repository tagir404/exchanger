<script setup lang="ts">
import IconPayment from '@/components/Icons/Payment/IconPayment.vue'

defineProps<{
    type: string
    placeholder: string
    icon?: string
}>()

const emit = defineEmits<{
    setOpenPaymentSelect: []
}>()
</script>

<template>
    <div class="ex-textfield">
        <input
            class="ex-textfield__input"
            :type="type"
            :placeholder="placeholder"
        />
        <div
            v-if="icon"
            class="ex-textfield__icon"
            @click="emit('setOpenPaymentSelect')"
        >
            <IconPayment :payment="icon" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.ex-textfield {
    color: #303030;
    height: 54px;
    position: relative;

    &__input {
        color: inherit;
        font-family: inherit;
        font-size: 14px;
        font-weight: 300;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        border: none;
        outline: none;
        background: #f5f5f5;
        border-bottom: 1px solid #eeeeee;
        padding: 6px 6px 6px 14px;

        &:hover {
            background: #fdfdff;
        }

        &::placeholder {
            color: inherit;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &[type='number'] {
            appearance: textfield;
            -moz-appearance: textfield;
        }
    }

    &__icon {
        position: absolute;
        z-index: 1;
        top: 6px;
        right: 6px;
    }
}
</style>
