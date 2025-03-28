//// [tests/cases/compiler/implicitAnyGenerics.ts] ////

//// [implicitAnyGenerics.ts]
class C<T> {
    x: T;
}

var c = new C();
var c2 = new C<any>();
var c3 = new C<number>();
var c4: C<any> = new C();

class D<T> {
    constructor(x: T) { }
}

var d = new D(null);
var d2 = new D(1);
var d3 = new D<any>(1);
var d4 = new D(<any>1);
var d5: D<any> = new D(null);

function foo<T>(): T { return null; };
foo() 
foo<any>();


    

//// [implicitAnyGenerics.js]
class C {
    x;
}
var c = new C();
var c2 = new C();
var c3 = new C();
var c4 = new C();
class D {
    constructor(x) { }
}
var d = new D(null);
var d2 = new D(1);
var d3 = new D(1);
var d4 = new D(1);
var d5 = new D(null);
function foo() { return null; }
;
foo();
foo();
