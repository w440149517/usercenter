// 继承
function initExtend(sub, sup){
    // 静态属性继承
    var extendStatics = function(sub, sup){
        for(var property in sup) {
            // 将父类静态属性浅拷贝给子类
            if(sup.hasOwnProperty(property)) {
                sub[property] = sup[property];
            }
        }
        // 子类的原型链__propto__指向父类
        // Object.setPrototypeOf(sub,sup);
        sub.prototype = Object.create(sup)
    }
    extendStatics(sub, sup);
    function subFun(){
        this.constructor = sub;
    }
    subFun.prototype = sup.prototype;// 继承父类的prototype
    sub.prototype = new subFun();// 子类原型指向subFun实例
}
// 父类
function Animal(){
    this.hand = 2;
}
Animal.cell = '多细胞';// 静态属性
Animal.prototype.eat = function(){
    console.log('Animal eat')
}
// 子类
function Monkey() {
    Animal.apply(this,arguments);
    this.foot = 2;
}
// 1.继承父类的属性和方法
initExtend(Monkey,Animal);
// 2.添加子类自己的方法
Monkey.prototype.go = function(){
    console.log('Monkey go')
}


// 进行测试
const m = new Monkey()

m.eat()
m.go()
console.log(m)

