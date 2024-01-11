<template>
    <Header />
    <div class="container">
        <Balance :total="total" />
        <IncomeExpenses :income="income" :expenses="expenses" />
        <TransactionList :transactions="transactions" @deleteTransaction="handleTransactionDelete" />
        <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
    </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';

import { computed, ref, onMounted } from 'vue';

import { useToast } from 'vue-toastification';
const toast = useToast();

const transactions = ref<any[]>([]);

onMounted(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions') ?? JSON.stringify(''));
    if (savedTransactions) {
        transactions.value = savedTransactions as any;
    }
});

const total = computed(() => {
    return transactions.value.reduce((acc, transaction: any) => {
        return acc + transaction.amount ?? 0;
    }, 0);
});

const income = computed(() => {
    return transactions.value
        .filter((transaction) => transaction?.amount > 0)
        .reduce((acc, transaction) => acc + transaction?.amount ?? 0, 0)
        .toFixed(2);
});

const expenses = computed(() => {
    return transactions.value
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction?.amount ?? 0, 0)
        .toFixed(2);
});

const handleTransactionSubmitted = (transactionData: any) => {
    transactions.value.push({
        id: generateUniqueId(),
        text: transactionData.text,
        amount: transactionData.amount,
    });

    saveTransactionsToLocalStorage();
    toast.success('Transaction added.');
};

const handleTransactionDelete = (id: any) => {
    transactions.value = transactions.value.filter((d) => d.id !== id);
    saveTransactionsToLocalStorage();
    toast.success('Transaction deleted.');
};

function saveTransactionsToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions.value));
}

function generateUniqueId() {
    return Math.floor(Math.random() * 1000000);
}
</script>

<style></style>
