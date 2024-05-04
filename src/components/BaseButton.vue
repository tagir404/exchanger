<script setup lang="ts">
defineProps<{
    variant: string
}>()
</script>

<template>
    <button
        class="base-button"
        :class="`base-button_${variant}`"
    >
        <slot />
    </button>
</template>

<style scoped lang="scss">
.base-button {
    padding: 14px 24px;
    border-radius: 8px;
    border: 1px solid;

    &_blue {
        color: #fff;
        background: $primaryBlue;

        &:hover {
            background: $primaryBlueHover;
        }
    }

    &_transparent-blue {
        color: $primaryBlue;
        background: transparent;

        &:hover {
            color: $primaryBlueHover;
        }
    }

    &_white {
        color: $darkGreyText;
        background: #fff;

        &:hover {
            background: $whiteHover;
        }
    }
}
</style>
