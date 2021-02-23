// 组合寄生继承

function Super(name){
    this.name = name
}
Super.prototype.say = function(words){
    console.log(words)
}
function Sub(){

}

function inheriteProtoType (_sub,_super){
    var proto = Object.create(_super.prototype);
}

function Person(){ this.name = 'zhangsan' }
var person = new Person;
console.log(person)