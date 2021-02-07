 function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    }
}

function Cat(name) {
    this.name = name;
}

Cat.prototype.say = function () {
    return 'Hello, ' + this.name + '!';
};


var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!


var kitty = new Cat('Kitty');
var doraemon = new Cat('哆啦A梦');
kitty.say;

if (kitty && kitty.name === 'Kitty'
    && kitty.say
    && typeof kitty.say === 'function'
    && kitty.say() === 'Hello, Kitty!'
    && kitty.say === doraemon.say
) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}



