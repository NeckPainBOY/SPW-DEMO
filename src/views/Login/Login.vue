<template>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import SpwInput from "@/components/base/spw-Input.vue";
import SpwForm from "@/components/base/spw-form.vue";
import { message } from "ant-design-vue";
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
