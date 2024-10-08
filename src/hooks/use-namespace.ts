const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`;

  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};

const is: {
  (name: string): string;
  (name: string, state: boolean | undefined): string;
} = (name: string, ...args: [] | [boolean | undefined]) => {
  const state = args.length > 0 ? args[0] : true;
  return name && state ? `is-${name}` : "";
};

const DEFAULT_NAMESPACE = "SPW";

const useNamespace = (block: string) => {
  const namespace = DEFAULT_NAMESPACE;
  const b = (blockSuffix = "") => _bem(namespace, block, blockSuffix, "", "");
  const e = (element?: string) =>
    element ? _bem(namespace, block, "", element, "") : "";
  const m = (modifier?: string) =>
    modifier ? _bem(namespace, block, "", "", modifier) : "";
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(namespace, block, blockSuffix, element, "")
      : "";
  const em = (element?: string, modifier?: string) =>
    element && modifier ? _bem(namespace, block, "", element, modifier) : "";
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(namespace, block, blockSuffix, "", modifier)
      : "";
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace, block, blockSuffix, element, modifier)
      : "";

  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    useNamespace,
  };
};

type UseNamespaceReturn = ReturnType<typeof useNamespace>;

export type { UseNamespaceReturn };
export  {useNamespace};
