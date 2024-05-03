<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
    <div
        class="checkbox"
        @click="checked = !checked"
    >
        <input
            class="checkbox__input"
            type="checkbox"
            :checked="checked"
        />
        <div class="checkbox__checkmark">
            <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2.375 6.5L6.375 10.5L12.375 2"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </div>
</template>

<style setup lang="scss">
.checkbox {
    &__input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
        cursor: pointer;

        &:checked + .checkbox__checkmark {
            background: #06006c;

            svg {
                display: block;
            }
        }
    }

    &__checkmark {
        min-width: 26px;
        min-height: 26px;
        width: 26px;
        height: 26px;
        border: 1px solid #06006c;
        box-shadow: 0px 0.8px 0.6px 1px rgba(55, 67, 99, 0.25) inset;
        background: #f5f5f5;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            display: none;
        }
    }
}
</style>
