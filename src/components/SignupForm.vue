<template>
    <form @submit.prevent="handleSubmit">

        <input type="text" required placeholder="display name" v-model="displayName">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <div class="error">
            {{ error }}
        </div>
        <button>Signup</button>
    </form>
</template>

<script >
import { ref } from 'vue'
import useSignup from './../composables/useSignup'

export default {

    setup() {
        const email = ref('')
        const displayName = ref('')
        const password = ref('')

        const { error, signup } = useSignup()

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            console.log('user signed up')
        }
        return { email, displayName, password, handleSubmit, error }
    }

}
</script>

<style lang="css" scoped>
</style>
