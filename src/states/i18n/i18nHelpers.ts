import { en } from "./en";

type MakeI18N<T> = 
T extends string ? string :
T extends ((...args: any[])=>any) ? T 
: T extends object ? { [K in keyof T]: MakeI18N<T[K]> } 
: never;

export type I18N = MakeI18N<typeof en>
