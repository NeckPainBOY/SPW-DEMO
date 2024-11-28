<template>
  <div class="flex flex-col justify-end w-full h-screen SPW-container">
    <SpwHeader></SpwHeader>
    <div className="flex w-full justify-center items-center flex-1">
      <div class="SPW-logo" className="flex-1">logo</div>
      <div class="SPW-login" className="flex-1">
        <div
          className="w-[500px] h-[300px] flex justify-center items-center flex-col bg-slate-200 m-auto rounded-[20px]"
        >
          <h1 className="text-4xl">Login</h1>
          <SpwForm :formArray="userForm" @success-login="handleSuccessLogin">
          </SpwForm>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center h-12 SPW-footer">footer</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import SpwForm from "@/components/base/spw-form.vue";
import SpwHeader from "@/components/header/spw-header.vue";
import { router } from "@/router";

const userForm = [
  reactive({
    name: "username",
    slot: "username",
    value: "",
    rules: [{ required: true, message: "Please input your username!" }],
    component: "a-input",
  }),
  reactive({
    name: "password",
    slot: "password",
    value: "",
    rules: [{ required: true, message: "Please input your password!" }],
    component: "a-input-password",
  }),
];

const handleSuccessLogin = (values: string) => {
  console.log("success login", values);
  router.push("/layout/home");
};
</script>

<style scoped lang="less"></style>
