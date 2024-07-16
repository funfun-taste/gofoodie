export type Projection<T> = {
  [K in keyof T]: 0 | 1; // 0은 해당 필드를 제외하고, 1은 해당 필드를 포함합니다.
};
