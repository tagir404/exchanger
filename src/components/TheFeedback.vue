<script setup lang="ts">
import { ref, markRaw } from 'vue'
import IconEmail from '@/components/Icons/Contacts/IconEmail.vue'
import IconTelegram from '@/components/Icons/Contacts/IconTelegram.vue'
import IconAddress from '@/components/Icons/Contacts/IconAddress.vue'

const contacts = ref([
    {
        title: 'Email',
        text: 'support@boxexchanger.net',
        href: 'mailto:support@boxexchanger.net',
        icon: markRaw(IconEmail)
    },
    {
        title: 'Telegram',
        text: '@sales_boxexchanger',
        href: 'https://t.me/sales_boxexchanger',
        icon: markRaw(IconTelegram)
    },
    {
        title: 'Telegram',
        text: '@help_boxexchanger',
        href: 'https://t.me/help_boxexchanger',
        icon: markRaw(IconTelegram)
    },
    {
        title: 'Address',
        text: '128 City Road, London, UK, EC1V 2NX',
        href: 'https://www.google.com/maps/place/128+City+Rd,+London+EC1V+2NX,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/@51.5271939,-0.0906694,18z/data=!4m6!3m5!1s0x48761d64c8d91b11:0x8fd10f948b8c6ef5!8m2!3d51.5272417!4d-0.0886693!16s%2Fg%2F11l37hy116?entry=ttu',
        icon: markRaw(IconAddress)
    }
])
</script>

<template>
    <section class="feedback">
        <AppContainer class="feedback__container">
            <h2 class="feedback__title section-title">Feedback</h2>
            <div class="feedback__contacts">
                <a
                    v-for="contact in contacts"
                    :key="contact.text"
                    :href="contact.href"
                    class="feedback__contact"
                >
                    <div class="feedback__contact-icon">
                        <component :is="contact.icon"></component>
                    </div>
                    <p class="feedback__contact-info">
                        <span class="feedback__contact-title">{{ contact.title }}</span>
                        <span class="feedback__contact-text">{{ contact.text }} </span>
                    </p>
                </a>
            </div>
        </AppContainer>
    </section>
</template>

<style scoped lang="scss">
.feedback {
    color: #fff;
    background: #282e39;
    padding: 80px 0;

    &__title {
        margin-bottom: 56px;
    }

    &__contacts {
        display: flex;
        justify-content: space-between;
        gap: 32px;
    }

    &__contact {
        display: flex;
        gap: 17px;
        flex: 1;
    }

    &__contact-icon {
        display: flex;
        padding: 11px;
        background: #fff;
        border-radius: 4px;
    }

    &__contact-info {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    &__contact-title {
        color: $lightTurquoise;
    }
}
</style>
