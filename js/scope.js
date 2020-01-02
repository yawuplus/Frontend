function f1() {
    var n= 999;
    function f2() {
        return n;
    }
    return f2;
}
var data = f1();
// console.log(data());
function createIncrementor(start) {
    return function (params) {
        return start++;
    }
}
var inc = createIncrementor(5);
// console.log(inc())
// console.log(inc())
// 闭包 ，封装对象的私有属性和私有方法
function Person(name){
    var _age;
    function setAge(n){
        _age = n;
    }
    function getAge(){
        return _age;
    }
    return {
        name:name,
        getAge:getAge,
        setAge:setAge,
    };
}
var p1 = Person('张三');
p1.setAge(25);
p1.getAge()
/**
 * 注意， 外层函数每次运行， 都会生成一个新的闭包， 而这个闭包又会保留外层函数的内部变量，
 *  所以内存消耗很大。 因此不能滥用闭包， 否则会造成网页的性能问题。
 */
// 立即调用的函数表达式,定义函数之后，立即调用该函数
function name(params) {
    
};
// 加个括号不让function出现在行首，结束的分号是必须
(function s(params) {
    console.log(666);
});
var i = function(){ return 10; }();
true && function name(params) {
    
}();
// eval('var a=1;');
// console.log(a);
// eval在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。
//严格模式，eval内部声明的变量，不会影响到外部作用域
(function aaas(params) {
    'use strict';
    eval('var foo = 123');
    conole.log(foo);
})
//为了保证 eval 的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行 eval，eval 内部一律是全局作用域。
var a= 1;
function f(){
    var a=  2;
    var e =eval;
    e('console.log(a)');
}
f();