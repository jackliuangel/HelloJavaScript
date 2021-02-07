//通过函数定义对象的属性
function c1(){
    this.p1 = 13;
    this.p2 = function(){
        console.log(this.p1);
    }
} 
var o1 = new c1;
o1.p2();

//改变已经生成的对象的属性
var o3= new c1;
o3.p3=4;
console.log(o3.p3);
console.log(o1.p3);


//通过改变对象的原型来改变对象的行为！
function c2(){
}
c2.prototype.p1 = 14;
c2.prototype.p2 = function(){
    console.log(this.p1);
}

var o2 = new c2;
o2.p2();