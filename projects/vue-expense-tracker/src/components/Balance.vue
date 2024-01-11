<script setup lang="ts">
// import { defineProps } from 'vue';

defineProps({
    total: {
        type: Number,
        required: true,
    },
});
</script>

<template>
    <h4 title="Your Balance">您的余额</h4>
    <h1 id="balance">{{ total }}</h1>
</template>
