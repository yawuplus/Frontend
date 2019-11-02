function print(s) {
    console.log(s);
}
var print = function (s) {
    console.log(s);
}
var foo= new Function(
    'return "hello world";'
);
// 等同于
function foo() {
    return 'hello world';
}
//同一个函数被多次声明，后面的声明就会覆盖前面的声明。
function f() {
    console.log(1);
}
// f() // 2

function f() {
    console.log(2);
}
// f() // 2
function fib(num) {
    if(num===0){
        return 0;
    }
    if(num===1){
        return 1;
    }
    return fib(num-2)+fib(num-1);
}
// console.log(fib(40));
console.log(Math.sqrt.toString());