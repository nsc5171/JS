eval("  "); -> takes in a string and compiles and executes it as if JS statements;
even though this seems cool beware that the JS engine must compile and execute the string of code on the fly and hence the optimizations that it usually does on code cannot be done before hand and leads to the code within eval along with the whole JS script to run very slow as the engine turns off optimization totally and not just for the string of code within eval("....").

with(someObj){
    prop1OfObj="val1";
    prop2OfObj="val2";
} -> short-hand for manipulating multiple props of an object but side effect is that it goes through auto global variable decclaration as well making it a seriously unwanted thing.
