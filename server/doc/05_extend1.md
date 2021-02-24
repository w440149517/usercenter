组合寄生继承
## Function
每个个函数都是`Function`对象的实例

例如一个求和函数
```js
function sum(x ,y){
    return x + y
}
```
也可通过`Function`对象创建
```js
var sum = new Function('x', 'y', 'return x + y');
```
## 对象与函数包含的属性区别

- 对象具备`__proto__`属性和`contructor`属性
- 函数具备`prototype`属性

