<script setup lang="ts">
import BaseLogo from '@/components/BaseLogo.vue'
import BaseButton from '@/components/BaseButton.vue'
import { ref } from 'vue'

const links = ref([
    {
        text: 'Reviews',
        href: '#'
    },
    {
        text: 'To partners',
        href: '#'
    },
    {
        text: 'Rules',
        href: '#'
    },
    {
        text: 'About Us',
        href: '#'
    }
])
</script>

<template>
    <header>
        <BaseLogo />

        <nav>
            <a
                v-for="link in links"
                :key="link.text"
                :href="link.href"
                :class="{ active: link.text === 'Reviews' }"
                >{{ link.text }}</a
            >
        </nav>

        <div class="actions">
            <BaseButton :variant="'transparent-blue'">Login</BaseButton>
            <BaseButton :variant="'blue'">Create an account</BaseButton>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    min-height: 64px;
}

nav {
    display: flex;

    a {
        padding: 25px;

        &.active {
            color: $primaryBlue;
        }
    }
}

.actions {
    display: flex;
    gap: 6px;
}

@media screen and (max-width: $mobile) {
    nav {
        display: none;
    }

    .actions {
        display: none;
    }
}
</style>
