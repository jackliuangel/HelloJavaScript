'use strict';
//用函数定义自然数


// 定义数字0:
var zero = function (f) {
    return function (x) {
        return x;
    }
};

//x是f的入餐
//调用的方式 zero（f）（x）， 例如f是console.log, x是前缀字符串
//数字的意思是，表示执行了f多少次

// 定义数字1:
var one = function (f) {
    return function (x) {
        return f(x);
    }
};

// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}


var two = add(one, one);

// 计算数字3 = 1 + 2:
var three = add(one, two);

// 计算数字5 = 2 + 3:
var five = add(two, three);

// 你说它是3就是3，你说它是5就是5，你怎么证明？

// 呵呵，看这里:




// 给3传一个函数,会打印3次:

(three(function (str) {
    console.log('print 3 times  '+str);
    return str;
}))('hello');