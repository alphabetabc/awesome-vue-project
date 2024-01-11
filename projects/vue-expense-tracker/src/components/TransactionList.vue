<template>
    <h3>历史记录</h3>
    <ul id="list" class="list">
        <li v-for="transaction in transactions" :key="transaction.id" :class="transaction.amount < 0 ? 'minus' : 'plus'">
            {{ transaction.text }} <span>${{ transaction.amount }}</span>
            <button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue';

defineProps({
    transactions: {
        type: Array<{ id: any; amount: any; text: any }>,
        required: true,
    },
});

const emit = defineEmits(['deleteTransaction']);

const deleteTransaction = (id: any) => {
    emit('deleteTransaction', id);
};
</script>
