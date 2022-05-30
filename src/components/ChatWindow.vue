<template>
    <div class="chat-window">
        <div class="error" v-if="error"> {{ error }} </div>
        <div v-if="documents" class="messages" ref="messages">
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
                <span class="created-at"> {{ doc.createdAt }} </span>
                <span class="name"> {{ doc.name }}</span>
                <span class="message"> {{ doc.message }} </span>
            </div>
        </div>

    </div>
</template>

<script>
import { formatDistanceToNow } from 'date-fns'
import getCollection from '@/composables/getCollection'
import { computed, onUnmounted, onUpdated, ref, watchEffect } from 'vue'
export default {

    setup() {

        const { error, documents, unsub } = getCollection('messages')
        const messages = ref(null);

        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map(doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate(), { addSuffix: true })
                    return {
                        ...doc, createdAt: time
                    }
                })
            }
        })

        onUpdated(() => {

            messages.value.scrollTop = messages.value.scrollHeight;

        })

        watchEffect(onInvalidate => {
            onInvalidate(() => unsub())

        })


        return { error, documents, formattedDocuments, messages }

    }
}
</script >

<style scoped>
.chat-window {
    background: #fafafa;
    padding: 30px 20px;
}

.single {
    margin: 18px 0;
}

.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}

.name {
    font-weight: bold;
    margin-right: 6px;
}

.messages {
    max-height: 400px;
    overflow: auto;
}
</style>