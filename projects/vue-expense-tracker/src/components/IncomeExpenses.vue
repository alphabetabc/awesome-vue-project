<template>
    <div class="inc-exp-container">
        <div>
            <h4>收入</h4>
            <p id="money-plus" class="money plus">+${{ income }}</p>
        </div>
        <div>
            <h4>消费</h4>
            <p id="money-minus" class="money minus">-${{ expenses }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// `defineProps` is a compiler macro and no longer needs to be imported
// import { defineProps } from 'vue';

defineProps({
    income: {
        type: String,
        required: true,
    },
    expenses: {
        type: String,
        required: true,
    },
});
</script>
