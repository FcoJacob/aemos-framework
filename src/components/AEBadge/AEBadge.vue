<script setup lang="ts">
import type { AEBadgeProps } from "./types";

defineProps<AEBadgeProps>()
</script>

<template>
    <div
        v-if="size === 'small'"
        class="small-badge"
    />
    <div
        v-else
        class="large-badge"
    >
        {{ badgeText }}
    </div>
</template>

<style scoped>
.small-badge {
    display: inline-flex;
    padding: 2px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: darkred;
}

.large-badge {
    display: inline-flex;
    min-width: 16px;
    max-width: 34px;
    padding: 1px 6px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: darkred;
    color: lightyellow;
    font-size: 11px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 1px;
}
</style>
