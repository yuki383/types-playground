// Quote: https://qiita.com/hrsh7th@github/items/84e8968c3601009cdcf2
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

type DeepPath<T, K extends any[]> = Head<K> extends keyof T
  ? {
      0: T[Head<K>];
      1: DeepPath<T[Head<K>], Tail<K>>;
    }[Tail<K> extends [] ? 0 : 1]
  : never;

const obj = {
  key1: {
    key2: {
      key3: true,
    }
  }
} as const

let test: DeepPath<typeof obj, [
  "key1",
  "key2",
  "key3"
]> = true
