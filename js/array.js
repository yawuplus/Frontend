var arr = ['a', 'b', 'c'];
// console.log(arr);
var arrays = [{
        a: 1
    },
    [1, 2, 3],
    function () {
        return true;
    }
];
// console.log(typeof [1,2,3]);
var a = ['a','b','c'];
// console.log(Object.keys(a));
// console.log(a[0]);
// console.log(a['1']);
// 对象读取，点结构和数组结构 object.key object[key]
// var arr = [1,2,3]; 对于数组的键名，不能使用点结构
// 单独的数值不能做标识符
// console.log(a.length);
a[10] =90;
a[109] ='aaa';
// console.log(a.length);
// length属性可写，如果认为设置一个 小于当前成员个数的值，数组会自动减少到length设置的值 
var arr  = [1,3,4,5,6,7,8];
// console.log(arr.length);
arr.length= 2;
// console.log(arr);
// 清空数组的一个有效方法，就是将 length 属性设为 0。
arr.length = 0;
// [].length = Math.pow(2,32);

var arr = [];
arr[-1] = 'a';
// arr[Math.pow(2, 32)] = 'b';

arr.length // 0
arr[-1] // "a"
arr[4294967296] // "b"
// in运算符 
var arr= [1,2,3,4,5,6]
// console.log(2 in arr);
// console.log('2' in arr);
// console.log(40 in arr);
// 如果数组的某个位置是空位，in 运算符返回 false。
var id = [1,2,3,4,5];
id.foo = true;
// for(var i in id){
    // console.log(id[i]);
// }
// for loop
// for(var i=0;i<id.length;i++){
    // console.log(id[i]);
// }
// while loop
// var i = 0;
// while(i<id.length){
    // console.log(id[i]);
    // i++;
// }
// 数组的forEach方法
// var colors =['red','green','purple'];
// colors.forEach(function (color) { 
//     console.log(color);
//  })
// 数组的空位 ，当数组的某个位置是空元素，
//即两个逗号之间 没有任何值，称该数组存在空位,空位不影响数组length属性 ,
//最后一个元素后面有逗号，并不会产生空位，空位可以读取 
// var a=[,,,,];
// console.log(a[0]);
// delete 命令删除一个数组成员，会形成空位，并且不会影响 length 属性
var a =[1,2,3,4,5];
delete a[1];
// console.log(a.length);
/**
 * 数组的某个位置是空位， 与某个位置是 undefined， 是不一样的。 
 * 如果是空位， 使用数组的 forEach 方法、
 for... in 结构、 以及 Object.keys 方法进行遍历， 空位都会被跳过。
 */
// var a= [,,,,,,,];
// a.forEach(function (x,i) {
//     console.log(i+'. '+ x);
//   })
//   for(var i in a){
//       console.log(i);
//   }
//   Object.keys(a);
// var a = [undefined, undefined, undefined];

// a.forEach(function (x, i) {
//     console.log(i + '. ' + x);
// });
// 0. undefined
// 1. undefined
// 2. undefined

// for (var i in a) {
//     console.log(i);
// }
// // 0
// // 1
// // 2

// Object.keys(a)
// // ['0', '1', '2']
// array-like object
// var obj = {
//     0:'a',
//     1:'b',
//     2:'c',
//     length:3
// }
// console.log(obj[0])
// var str ='abcde';
// console.log(str[0]);
// 类似数组的对象转为数组
// var  arr = Array.prototype.slice.call(arrayLike);
// 通过call 把数组的方法放到对象上面
// function print(value, index) {
//     console.log(index + ' : ' + value);
// }

// Array.prototype.forEach.call(arrayLike, print);
// Array.prototype.forEach.call('abc', function (chr) {
//     console.log(chr);
// });
/**
 * 注意， 这种方法比直接使用数组原生的 forEach 要慢，
 *  所以最好还是先将“ 类似数组的对象” 转为真正的数组， 然后再直接调用数组的 forEach 方法。
 */
// 一个运算子是字符串，另一个运算子是非字符串，这时非字符串会转成字符串，再连接在一起
//对象的相加
var obj = {p:1};
// console.log(obj+2);
/*对象转成原始类型的值规则:
` 自动调用对象的valueOf()方法`
*/
// valueOf一般返回本身
// console.log(obj.valueOf());
//再调用toString()方法
// console.log(obj.valueOf().toString());
// 自定义valueOf方法
var obj = {
    valueOf: function (params) {
        return 1;
    }
};
console.log(obj+2);