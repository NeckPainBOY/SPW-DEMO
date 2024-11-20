<template>
  <a-form
    :model="formState"
    name="basic-form"
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
      <component
        :is="formItem.component"
        v-model:value="formState[formItem.name]"
      ></component>
      <!-- <a-input
        v-model:value="formItem.value"
        placeholder="请输入用户名"
      ></a-input> -->
    </a-form-item>
    <a-button class="w-full mx-auto my-0" type="primary" html-type="submit"
      >提交</a-button
    >
  </a-form>
</template>

<script lang="ts" setup>
import { capitalizeFirstLetter } from "@/utils/letter";
import { computed, reactive } from "@vue/reactivity";
import { Rule } from "ant-design-vue/es/form";

interface FormItem {
  name: string;
  slot: string;
  value?: string;
  rules?: Rule[];
  component: string;
}
interface FormState {
  [key: string]: string | undefined;
}

defineOptions({
  name: "SPWForm",
});

// 获取对应规则
let { formArray } = defineProps<{ formArray: FormItem[] }>();
const formState = computed(() => {
  let templateState: FormState = {};
  formArray.map((item) => {
    const { name, value } = item;
    templateState[name] = value;
  });
  console.log(templateState);
  return reactive(templateState);
});
const emit = defineEmits(["successLogin"]);
const onFinish = (values: any) => {
  emit("successLogin", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style lang="less" scoped></style>
