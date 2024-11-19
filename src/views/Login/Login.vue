<template>
  <SpwHeader @emitLanguage="emitLanguage($event)"></SpwHeader>
  <div class="SPW-container">
    <div className="flex min-h-screen w-full justify-center items-center">
      <div class="SPW-logo" className="flex-1">logo</div>
      <div class="SPW-login" className="flex-1">
        <div
          className="w-[500px] h-[300px] flex justify-center items-center flex-col bg-slate-200 m-auto rounded-[20px]"
        >
          <h1 className="text-4xl">Login</h1>
          <SpwForm :formArray="userForm">
            <template #username>
              <!-- <SpwInput v-model="username"> </SpwInput> -->
            </template>
          </SpwForm>
          <!-- <SpwInput
          :isPassword="passwordInput.isPassword"
          @input="inpuValue($event)"
        ></SpwInput> -->
          <a-space
            direction="vertical"
            :size="[0, 16]"
            :style="{
              width: '100%',
              paddingTop: '16px',
              borderTop: `1px solid ${token.colorBorder}`,
            }"
          >
            <a-pagination :total="50" show-size-changer />
            <a-space wrap>
              <a-select show-search style="width: 200px">
                <a-select-option value="jack">jack</a-select-option>
                <a-select-option value="lucy">lucy</a-select-option>
              </a-select>
              <a-date-picker />
              <a-time-picker />
              <a-range-picker style="width: 200px" />
            </a-space>
          </a-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import SpwInput from "@/components/base/spw-Input.vue";
import SpwForm from "@/components/base/spw-form.vue";
import { message } from "ant-design-vue";
import SpwHeader from "@/components/header/spw-header.vue";

import theme from "ant-design-vue/es/theme";
const $emit = defineEmits(["emitInfo"]);
const emitLanguage = (e: string) => {
  console.log(e);
  $emit("emitInfo", e);
};

const { token } = theme.useToken();

const passwordInput = ref({
  isPassword: true,
});

let username = ref({
  value: "",
});

const inpuValue = (e: any) => {
  console.log(e);
};
const userForm = reactive([
  {
    name: "username",
    slot: "username",
    value: "",
    rules: [{ required: true, message: "Please input your username!" }],
  },
  {
    name: "password",
    slot: "password",
    value: "",
    rules: [{ required: true, message: "Please input your password!" }],
  },
]);
</script>

<style scoped lang="less"></style>
