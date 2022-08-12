type MyAwaited<T extends Promise<any>> = T extends Promise<infer V>
  ? V extends Promise<any>
    ? MyAwaited<V>
    : V
  : T
