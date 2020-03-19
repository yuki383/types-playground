type Head<T extends any[]> = ((...args: T) => any) extends (
  head: infer U,
  ...args: any[]
) => any
  ? U
  : never;

type Tail<T extends any[]> = ((...args: T) => any) extends (
  arg: any,
  ...tail: infer U
) => any
  ? U
  : never;
