TypeScript中的关键字`static`

ES6中的静态成员在TypeScript也存在，类的静态成员可以使用类名`.`变量名的形式访问，不需要创建类的实例。

例如，在ts中
```js
class Circle {
    static pi: number = 3.14;
}
```
上面的`Circle`包含静态属性`pi`,可以使用`Circle.pi`访问，ts会将上面的代码编译成如下js文件
```js
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.pi = 3.14;
    return Circle;
}());
```
因此可以将上面的ts代码理解为，在`Circle`对象上增加一个属性`pi`

### 静态与非静态同时存在
```js
class Circle {
    pi: number = 12;// 普通变量
    static pi: number = 3.14;// 静态变量
    
    // 普通方法
    calculateArea(radius:number):number { 
        // 此处this是指`Circle`的实例化对象
        return this.pi * Circle.pi * radius;
    }
    // 静态方法
    static calculateArea(radius:number) {
        // 此处this并不是实例化后的this，而是将`Circle`本身视为一个对象，因此`this.pi`的结果是3.14
        return this.pi * radius * radius;
    }
}
console.log(Circle.pi); // 返回 3.14
console.log(Circle.calculateArea(5)); // 返回 78.5

const circle = new Circle();
console.log(circle.pi); // 返回 12
console.log(circle.calculateArea(5));// 返回 300 (12 * 5 * 5)
```

上面的例子并不会报错，ts虽然允许这种写法，但是并不推荐，容易产生视觉上的混淆。

## 参考文献
[TypeScript - Static](https://www.tutorialsteacher.com/typescript/typescript-static)