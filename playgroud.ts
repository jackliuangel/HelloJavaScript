'use strict';



const EthCrypto = require('eth-crypto');
var greet = require('./hello');


var s = 'Jack';



greet(s);


var obj = {
    name:'jack',
    age:30
}

console.log('obj='+obj.name+' '+obj.age)


console.log(lazySum(3,4));


console.log(lazySum(3,4)());

var a = function(b){console.log("just show what is inputed "+b);};
console.log(a(123))


var withresultFunction = ({name, age}:Stu)



var identity = EthCrypto.createIdentity();
console.dir(identity);

const entropy = Buffer.from('ToySampleRamdomStringNotSafeFh73udyfF6dsuf6dfhsufhiusidhf878sdf787f1920123sdfh9a123ojmqdscasd99999999999999999999999999999999999999999999999f72836427846', 'utf-8'); // must contain at least 128 chars
 identity = EthCrypto.createIdentity(entropy);
console.dir(identity);

const publicKey = EthCrypto.publicKeyByPrivateKey(
    '0xaa472770000c6b570f9cf70cfee324738069544aca315a9ff492d0df58f98274'
);
console.dir(publicKey) // 10f797dc86b4fcc209e0e6a098318d69ca239143a05a1c6e5b000c9a8b684bf5192138646aa65b3b050676dd07ad38d1d3074654d969881282326faf6adb97bc


function lazySum(a,b){
    console.log("in lazySum, not really executed.")
    var delegatedSum  = function(){
        console.log("in lazySum, really executed now.")
        return a+b;
    }
    return delegatedSum;
}