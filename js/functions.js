//函数声明
//1  function命令
function print(s) {
    console.log(s);
}

//2 函数表达式
var echo = function (s) {
    console.log(s);
};
var printf = function printf() {
    console.log(typeof printf);
};
// 3 Function构造函数,不直观，几乎无人用
var add = new Function(
    'x',
    'y',
    'return x+y', //只有最后一个参数被当做函数体,只有一个参数，该参数就是函数体
);