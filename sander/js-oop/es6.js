
class Animal {
    constructor(alias) {
        this.alias = alias;
    }

    changeAlias(newAlias) {
        console.log('Animal.changeAlias', newAlias);
        this.alias = newAlias;
    }

    getSound() {
        throw new Error('Этот метод абстрактный. Следует переопределить его в потомках.');
    }

    saySound() {
        const   sound = this.getSound(),
            res = 'Animal with ' + this.alias + ' say ' + sound;
        console.log('Animal.saySound: ', res);
    }
}

class Dog extends Animal {
    constructor(alias) {
        super(alias);
    }
    getSound() {
        return "woof";
    }
}

class Cat extends Animal {
    constructor(alias) {
        super(alias);
    }
    getSound() {
        return "moow";
    }
}
//---------------------------------------------------------------
let dog = new Dog("Sharik");
dog.saySound();
dog.changeAlias("Bobik");
dog.saySound();

let cat = new Cat("Murka");
cat.saySound();

//При выполнении этих строчек будет исключение
//Error: Этот метод абстрактный. Следует переопределить его в потомках.
// let abstractAnimal = new Animal("Fish");
// abstractAnimal.saySound();