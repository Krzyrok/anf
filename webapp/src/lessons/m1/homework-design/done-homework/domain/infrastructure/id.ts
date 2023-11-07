export type Id = string & { readonly type: unique symbol };
// declare let a: Id;
// declare let b: string
// b = a;
// a = b; // will not compile
