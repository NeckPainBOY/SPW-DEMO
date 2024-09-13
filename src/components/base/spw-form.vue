<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      v-for="formItem in formArray"
      :label="capitalizeFirstLetter(formItem.name)"
      :name="formItem.name"
      :rules="formItem.rules"
    >
      <!-- <component :is="formItem.component"></component> -->
      <a-input
        v-model:value="formItem.value"
        placeholder="请输入用户名"
      ></a-input>
      
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { capitalizeFirstLetter } from "@/utils/letter";
import { Rule } from "ant-design-vue/es/form";
import { computed } from "vue";

interface FormItem {
  name: string;
  slot: string;
  value?: string;
  rules?: Rule[];
}

defineOptions({
  name: "SPWForm",
});

// 获取对应规则
let { formArray } = defineProps<{ formArray: FormItem[] }>();

const formState = computed(() => {
  let templateState: string[] = [];
  formArray.map((item) => {
    templateState.push(item.name);
  });
  console.log(templateState);
  return templateState;
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style lang="less" scoped></style>
