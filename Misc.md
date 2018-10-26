```
eval("  "); -> takes in a string and compiles and executes it as if JS statements;
even though this seems cool beware that the JS engine must compile and execute the string of code on the fly and hence the optimizations that it usually does on code cannot be done before hand and leads to the code within eval along with the whole JS script to run very slow as the engine turns off optimization totally and not just for the string of code within eval("....").

with(someObj){
    prop1OfObj="val1";
    prop2OfObj="val2";
} -> short-hand for manipulating multiple props of an object but side effect is that it goes through auto global variable declaration as well making it a seriously unwanted thing.

Anonymous function expressions :
Anonymous functions have no useful name to display in stack traces, which can make debugging more difficult.
Without a name, if the function needs to refer to itself, for recursion, etc., the deprecated arguments.callee reference is unfortunately required. Another example of needing to self-reference is when an event handler function wants to unbind itself after it fires.
Anonymous functions omit a name that is often helpful in providing more readable/understandable code. A descriptive name helps self-document the code in question.

Inline function expressions are powerful and useful -- the question of anonymous vs. named doesn't detract from that. Providing a name for your function expression quite effectively addresses all these draw-backs, but has no tangible downsides. The best practice is to always name your function expressions.

Block scope -> JS doesn't support it variables when variables are declared with var, but let and const do support. ------??
catch blocks -> exception object follows block scope by default

Advantage of block scoping -> better garbage collection
https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md#garbage-collection

** hoisting -> moves "only" the declarations (variables and of functions) and not the assignments
ref: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch4.md#the-compiler-strikes-again

ref:
https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch4.md#functions-first

closures: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md#loops--closure

module pattern: -> it's basically wrapping up all functionality and code in a private function and exposing only the required route for the functionality to be executed
https://coryrylan.com/blog/javascript-module-pattern-basics
https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md#modern-modules


```
