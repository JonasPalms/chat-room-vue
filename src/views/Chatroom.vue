<template>

    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />

    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import router from '@/router';
import { watch } from 'vue';
import NewChatForm from './NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';

export default {
    components: { Navbar, NewChatForm, ChatWindow },

    setup() {

        const user = getUser()

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'welcome' })
            }
        })

    }
}
</script>

<style>
</style>