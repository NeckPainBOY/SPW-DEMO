declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "ant-design-vue" {
  import { Plugin } from "vue";

  const Antd: Plugin;
  export default Antd;

  // 你可以根据需要添加更多的类型声明
  export * from "ant-design-vue/lib/components";
}
