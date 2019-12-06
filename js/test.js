var v = 1;

function f() {
    var v = 2;
    console.log(v);
}

f()
//函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。
// arguments对象，在函数体内部读取所有参数
function f1(x, y, z) {
    console.log(x + y + z);
    // console.log(arguments);
    var args = Array.prototype.slice.call(arguments);
    console.log(arguments);
}

f1(1, 2, 3);
