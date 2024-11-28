<template>
  <div class="flex w-full">
    <div style="max-width: 256px">
      <a-menu
        v-if="toggleStateProps"
        class="h-screen"
        v-model:openKeys="toggleStateProps.openKeys"
        v-model:selectedKeys="toggleStateProps.selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="toggleStateProps.collapsed"
        :items="items"
      ></a-menu>
    </div>
    <div class="w-full h-16">
      <slot name="header"></slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ToggleStateOptions {
  collapsed: boolean;
  selectedKeys: string[];
  openKeys: string[];
  preOpenKeys: string[];
}

import { reactive, watch, h } from "vue";
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
const toggleStateProps = defineModel<ToggleStateOptions>("toggleState");
setTimeout(() => {
  console.log(toggleStateProps);
}, 1000);
const items = reactive([
  {
    key: "1",
    icon: () => h(PieChartOutlined),
    label: "Option 1",
    title: "Option 1",
  },
  {
    key: "2",
    icon: () => h(DesktopOutlined),
    label: "Option 2",
    title: "Option 2",
  },
  {
    key: "3",
    icon: () => h(InboxOutlined),
    label: "Option 3",
    title: "Option 3",
  },
  {
    key: "sub1",
    icon: () => h(MailOutlined),
    label: "Navigation One",
    title: "Navigation One",
    children: [
      {
        key: "5",
        label: "Option 5",
        title: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
        title: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
        title: "Option 7",
      },
      {
        key: "8",
        label: "Option 8",
        title: "Option 8",
      },
    ],
  },
  {
    key: "sub2",
    icon: () => h(AppstoreOutlined),
    label: "Navigation Two",
    title: "Navigation Two",
    children: [
      {
        key: "9",
        label: "Option 9",
        title: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
        title: "Option 10",
      },
      {
        key: "sub3",
        label: "Submenu",
        title: "Submenu",
        children: [
          {
            key: "11",
            label: "Option 11",
            title: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
            title: "Option 12",
          },
        ],
      },
    ],
  },
]);
</script>
