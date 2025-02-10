<template>
  <div
    class="slidev-layout portrait"
    :class="{ 'border-dashed border-2 border-green-500': isGuideLineActive }"
  >
    <div
      :class="{ 'border-dashed border-2 border-green-500 h-full': isGuideLineActive }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGuideLineStore } from "../setup/useGuideLineStore";

const { isGuideLineActive } = useGuideLineStore();
</script>
