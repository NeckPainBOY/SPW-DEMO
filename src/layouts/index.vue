<template>
  <div class="flex flex-col">
    <SPWMenu v-model:toggle-state="toggleState">
      >
      <template #header>
        <div
          class="flex items-center justify-between w-full h-16 spw-home-content"
        >
          <div class="flex mx-2 spw-home-header">
            <div class="spw-home-collapse-icon">
              <a-button @click="toggleCollapsed" class="">
                <MenuUnfoldOutlined v-if="toggleState.collapsed" />
                <MenuFoldOutlined v-else />
              </a-button>
            </div>
            <div class="flex mx-4 mx-auto my-0 text-center spw-home-logo">
              <span class="test"
                ><img
                  class="inline-block"
                  src="@\assets\image\vue.svg"
                  alt="logo"
              /></span>
            </div>
          </div>
          <div>
            <div class="mx-2">lang</div>
          </div>
        </div>
      </template>
      <template #content>
        <div class="mx-2">
          <RouterView />
        </div>
      </template>
    </SPWMenu>
  </div>
</template>

<script lang="ts" setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import SPWMenu from "@/layouts/Menu/Menu.vue";
import { reactive, watch } from "vue";
const toggleState = reactive({
  collapsed: false,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});
const toggleCollapsed = () => {
  toggleState.collapsed = !toggleState.collapsed;
  toggleState.openKeys = toggleState.collapsed ? [] : toggleState.preOpenKeys;
};

watch(
  () => toggleState.openKeys,
  (_val, oldVal) => {
    toggleState.preOpenKeys = oldVal;
  }
);
</script>
