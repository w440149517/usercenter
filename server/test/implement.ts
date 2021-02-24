interface A{
    name: string;
    eat: () => string
}

class Person1 implements A{
    name: string = '1';
    eat(){
        return 'eat1'
    }
}
class Person2 implements A{
    name: string = '2';
    eat(){
        return 'eat2'
    }
    static go(): void{

    }
}