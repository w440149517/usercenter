// 解释关键字static
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