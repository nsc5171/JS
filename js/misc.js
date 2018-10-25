/* var f= function foo(i){
    console.log(i)
    if(i>0){
        foo(--i);
    }
}
f(10); */

let publicAPI = () => {
    let a = 10;
    function privateFunc() {
        console.log(a)
    }
    return privateFunc
}
console.log(publicAPI());
publicAPI()();