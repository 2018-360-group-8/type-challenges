// type Equal<T, U> = T extends U ? U extends T ? true : false : false
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false

type IterativeIncludes<T extends readonly any[], U> = {
  [K in keyof T]: Equal<T[K], U>
}[number] extends false
  ? false
  : true

type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? Equal<F, U> extends true
    ? true
    : IterativeIncludes<T, U>
  : false
