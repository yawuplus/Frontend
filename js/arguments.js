// 对象包含了函数运行时的所有参数
var f = function(one){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
// f(1,2,3)
//正常模式下，arguments对象可以在运行时修改
var f2 = function(a,b){
    arguments[0] = 3;
    arguments[1] = 2;
    return a+b;
}
var data = f2(1,1)
// console.log(data)

var f3 = function (a, b) {
    'use strict'; //开启严格模式
    arguments[0] = 3;
    arguments[1] = 2;
    console.log(arguments.length);
    return a + b;
}
// console.log(f3(1,1,1,2,2,2));

// arguments转换为数组
var args = Array.prototype.slice.call(arguments);
var args = [];
for(var i = 0; i<arguments.length;i++){
    args.push(arguments[i]);
}
// arguments 对象带有一个 callee 属性，返回它所对应的原函数。
/**
 * 可以通过 arguments.callee，
 *  达到调用函数自身的目的。 这个属性在严格模式里面是禁用的， 因此不建议使用。
 */
var f5 = function () {
    console.log(arguments.callee===f5);
}
f5()