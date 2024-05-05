<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseLogo from '@/components/BaseLogo.vue'
import IconBurger from '@/components/Icons/IconBurger.vue'
import IconClose from '@/components/Icons/IconClose.vue'
import { blockScroll, unblockScroll } from '@/utils/utils'

const links = ref([
    {
        text: 'News',
        href: '#news'
    },
    {
        text: 'Reviews',
        href: '#reviews'
    },
    {
        text: 'Feedback',
        href: '#feedback'
    }
])

const open = ref(false)

watch(open, (val) => (val ? blockScroll() : unblockScroll()))
</script>

<template>
    <header
        class="header"
        :class="{ header_open: open }"
    >
        <div class="header__container">
            <div class="header__mobile-default">
                <BaseLogo class="header__logo" />

                <button
                    class="header__toggle-btn"
                    @click="open = !open"
                >
                    <IconBurger v-if="!open" />
                    <IconClose v-else />
                </button>
            </div>

            <nav>
                <a
                    v-for="link in links"
                    :key="link.text"
                    :href="link.href"
                    @click="open = false"
                    >{{ link.text }}</a
                >
            </nav>

            <div class="actions">
                <BaseButton :variant="'transparent-blue'">Login</BaseButton>
                <BaseButton :variant="'blue'">Create an account</BaseButton>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    padding: 0 16px;
    min-height: 64px;

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__toggle-btn {
        display: none;
        width: 36px;
        height: 36px;
        border: none;
        padding: 0;
    }
}

nav {
    display: flex;

    a {
        padding: 25px;
        background: #fff;

        &:hover {
            background: #e3ebf0;
        }

        &:active {
            color: $primaryBlue;
            background: none;
        }
    }
}

.actions {
    display: flex;
    gap: 6px;
}

@media screen and (max-width: $mobile) {
    .header {
        &__logo {
            order: 1;
        }

        &__toggle-btn {
            display: block;
            order: 2;
        }

        &__mobile-default {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        &_open {
            height: 100vh;

            .header {
                &__container {
                    flex-direction: column;
                    height: 100%;
                    padding-bottom: 24px;
                }

                &__logo {
                    align-self: flex-start;
                }
            }

            nav,
            .actions {
                display: flex;
            }

            nav {
                flex-direction: column;
                width: 100%;
                order: 3;
                border-radius: 8px;
                margin-top: 24px;

                a {
                    box-shadow: 0px 20px 40px 0px #17162526;
                    padding: 14px 24px;
                    text-align: center;

                    &:first-child {
                        border-radius: 8px 8px 0 0;
                    }

                    &:last-child {
                        border-radius: 0 0 8px 8px;
                    }
                }
            }

            .actions {
                flex-direction: row-reverse;
                width: 100%;
                order: 4;
                margin-top: auto;

                & button {
                    &:last-child {
                        flex: 1;
                    }
                }
            }
        }
    }

    nav {
        display: none;
    }

    .actions {
        display: none;
    }
}
</style>
