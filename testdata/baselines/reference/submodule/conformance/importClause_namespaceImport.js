//// [tests/cases/conformance/externalModules/typeOnly/importClause_namespaceImport.ts] ////

//// [a.ts]
export class A { a!: string }
export class B { b!: number }
export type C<T> = T;
export const Value = {};

//// [b.ts]
import type * as types from './a';
types;
types.Value;
let v: types.Value;
const a: types.A = {};
const b: types.B = {};
const c: types.C<string> = "";
const d = { types };


//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = exports.B = exports.A = void 0;
class A {
    a;
}
exports.A = A;
class B {
    b;
}
exports.B = B;
exports.Value = {};
//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
types;
types.Value;
let v;
const a = {};
const b = {};
const c = "";
const d = { types };
