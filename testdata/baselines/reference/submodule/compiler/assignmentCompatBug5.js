//// [tests/cases/compiler/assignmentCompatBug5.ts] ////

//// [assignmentCompatBug5.ts]
function foo1(x: { a: number; }) { }
foo1({ b: 5 });

function foo2(x: number[]) { }
foo2(["s", "t"]);

function foo3(x: (n: number) =>number) { };
foo3((s:string) => { });
foo3((n) => { return; });



//// [assignmentCompatBug5.js]
function foo1(x) { }
foo1({ b: 5 });
function foo2(x) { }
foo2(["s", "t"]);
function foo3(x) { }
;
foo3((s) => { });
foo3((n) => { return; });
