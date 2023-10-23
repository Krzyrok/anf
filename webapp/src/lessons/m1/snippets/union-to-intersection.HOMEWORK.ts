// PRACA DOMOWA - przeanalizuj i wyjaśnij jak działa poniższy typ UnionToIntersection

// https://stackoverflow.com/a/50375286

type UnionToIntersection<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

type DataUnion =
  | { data: number | string }
  | { data: boolean | string }


let u: DataUnion
u = { data: 'yo' } // ✅
u = { data: true } // ✅
u = { data: 125 } // ✅

type DataIntersection = UnionToIntersection<DataUnion>
type DataIntersection2 = UnionToIntersection<number | string> // number & string

let i: DataIntersection
i = { data: 'yo' } // ✅
i = { data: true } // ❌ Type 'boolean' is not assignable to type 'string'.
i = { data: 125 } // ❌ Type 'number' is not assignable to type 'string'.


// my explanation:
// type is distributed (nicely explained here: https://stackoverflow.com/questions/55382306/typescript-distributive-conditional-types/55383816#55383816 )

type DistributeUnion<U> = 
  (U extends any ? (k: U) => void : never)

type UnionTwoFunctions = DistributeUnion<DataUnion>; 

// BAD: this does not happen above (because TS do not replace generic type with union but it creates union of checked conditions)
// so it will: T<A | B> => T<A> | T<B>
// BUT ONLY for naked types when T is checked, so e.g. Type SomeType<T> = T extends ...
// for SomeType<T> = [T] extends ... or SomeType<T> = ... extends T ... distribution of union will NOT happen
type CustomBad = ((k: {data: number} | {data: string | boolean} ) => void ) extends ((k: infer I) => void) ? I : never

// so it will DO smth like this: 
// contra-variant
type CustomGood = ( ( (k: {data: string}) => void ) | ( (k: {data: number}) => void )) extends ((k: infer I) => void) ? I : never

// example of co-variant
type Custom20 = ( ( {data: string} ) | ( {data: number} ) ) extends ( {data: infer I} ) ? I : never

// example of contra-variant
type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never;
type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }>; // string & number


// example: disabled distribution:
type ParamWithoutDistribution<T> = [T] extends [(arg: infer U) => void] ? U : never;
type InferredParamsWithoutDistribution = ParamWithoutDistribution<((a: string | number) => void) | ((a: number) => void)>; // (string | number) & number

// example: enabled distribution:
type ParamWithDistribution<T> = T extends (arg: infer U) => void ? U : never;
type InferredParamsWithDistribution = ParamWithDistribution<((a: string | number) => void) | ((a: number) => void)>; // (string | number) | number