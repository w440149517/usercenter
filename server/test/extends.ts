// 解释ts中的集成，编译可看到原生js文件，详情解释

import { argv } from "process";

// https://blog.csdn.net/qq_19300203/article/details/72566136
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