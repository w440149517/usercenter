TypeScript是如何实现继承的

在ts中写使用`extends`继承
```js
class Animal {
    static cell: string = '多细胞';// 静态属性
    hand: number = 2;// 变量
    constructor(hand: number){
        this.hand = hand
    }
    eat(): void{// 方法
        console.log('Animal eat')
    }
}

class Monkey extends Animal {
    foot: number = 2;// 变量
    constructor(hand: number, foot: number){
        super(hand);
        this.foot = foot;
    }
    go (): void{// 方法
        console.log('Monkey go')
    }
}
// 测试
const monkey = new Monkey(2, 4)
console.log(monkey)
```
运行`tsc build`命令将上述代码翻译为JavaScript
```js
/**
 * 全局方法，使用this.__extends调用
 * d表示子类
 * b表示父类
 */
var __extends = (this && this.__extends) || (function () {
    // static属性继承
    var extendStatics = function (d, b) {
        // 使用setPrototypeOf将子类__proto__执行父类
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        // 子类原型指向父类原型，
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 父类
var Animal = /** @class */ (function () {
    function Animal(hand) {
        this.hand = 2; // 变量
        this.hand = hand;
    }
    Animal.prototype.eat = function () {
        console.log('Animal eat');
    };
    Animal.cell = '多细胞'; // 静态属性
    return Animal;
}());
// 子类
var Monkey = /** @class */ (function (_super) {
    __extends(Monkey, _super);
    function Monkey(hand, foot) {
        var _this = _super.call(this, hand) || this;
        _this.foot = 2; // 变量
        _this.foot = foot;
        return _this;
    }
    Monkey.prototype.go = function () {
        console.log('Monkey go');
    };
    return Monkey;
}(Animal));
// 测试
var monkey = new Monkey(2, 4);
console.log(monkey);

```

实际上，变异后的代码采用的`js组合寄生继承`的方式实现继承，可以简化为如下代码
```js
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
        // 子类的原型链__propto__指向父类,官方不推荐使用`setPrototypeOf`属性，而推荐使用`Object.create`
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
```
所谓的组合寄生继承是原型继承和构造方法继承的结合体，目的是要完全继承父类的静态属性/方法、普通属性/方法

## 参考文献
- [详解Typescript中继承的实现](https://blog.csdn.net/qq_19300203/article/details/72566136)
- [帮你彻底搞懂JS中的prototype、__proto__与constructor（图解）](https://blog.csdn.net/cc18868876837/article/details/81211729)
- [js中(function(){…})()立即执行函数写法理解](https://www.cnblogs.com/lunawzh/p/5274474.html)
- [官方不推荐使用setPrototypeOf属性，而推荐使用Object.create的原因](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)
