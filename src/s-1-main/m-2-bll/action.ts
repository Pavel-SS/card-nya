export type PropertiesType<T> = T extends {[key:string]: infer U} ? U : never;
export type InferActionType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

