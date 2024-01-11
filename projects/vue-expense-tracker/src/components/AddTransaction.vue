<template>
    <h3>添加一笔交易</h3>
    <form @submit.prevent="onSubmit" id="form">
        <div class="form-controls">
            <label for="text">Text</label>
            <input type="text" id="text" placeholder="输入文本" v-model="text" />
        </div>
        <div class="form-controls">
            <label for="amount">
                Amount
                <br />
                (negative - expense, positive - income)
            </label>
            <input type="number" id="amount" placeholder="输入数量" v-model="amount" />
        </div>
        <button class="btn">Add transaction</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
const toast = useToast();

const text = ref('');
const amount = ref('');

const emit = defineEmits(['transactionSubmitted']);

const onSubmit = () => {
    if (!text.value || !amount.value) {
        // Display a toast error message if either field is empty
        toast.error('Both fields must be filled.');
        return;
    }

    const transactionData = {
        text: text.value,
        amount: amount.value,
    };

    emit('transactionSubmitted', transactionData);
    text.value = '';
    amount.value = '';
};
</script>
