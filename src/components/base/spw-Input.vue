<template>
  <component
    :is="props.isPassword ? 'a-input-password' : 'a-input'"
    v-model:value="value"
    @input="$emit('inputValue')"
    :placeholder="props && props.placeholder"
  >
    <template #iconRender="v">
      <EyeTwoTone v-if="v"></EyeTwoTone>
      <EyeInvisibleOutlined v-else></EyeInvisibleOutlined>
    </template>
  </component>
</template>

<script setup lang="ts">
interface BaseInput {
  isPassword?: boolean;
  placeholder?: string;
}

interface Props extends BaseInput {}

import { ref } from "vue";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons-vue";
defineOptions({
  name: "SPWInput",
});

const props = withDefaults(defineProps<Props>(), {
  isPassword: false,
});

const model = defineModel({});

const value = ref("");
const emit = defineEmits(["inputValue"]);
</script>

<style lang="less" scoped></style>
