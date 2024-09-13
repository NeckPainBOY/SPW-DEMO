<template>
  <div>
    <a-button>{{ btn.name }}</a-button>
  </div>
</template>

<script setup lang="ts">
interface buttonProps {
  name: string;
  function?: Function;
}

const btn = defineProps<buttonProps>();
</script>
<style scoped lang="less"></style>
