// 解释ts中的集成，编译可看到原生js文件

class Animal {
    hand: number = 2;
    eat(): void{
        console.log('Animal eat')
    }
}

class Monkey extends Animal {
    foot: number = 2;
    go (){
        console.log('Monkey go')
    }
}

const monkey = new Monkey()
console.log(monkey)