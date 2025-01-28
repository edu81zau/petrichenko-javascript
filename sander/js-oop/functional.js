function Animal(alias) {
    console.log('Animal.constructor', alias)
    this.alias = alias;
    this.changeAlias = function (newAlias) {
        console.log('Animal.changeAlias', newAlias)
        this.alias = newAlias;
    }
}

Animal.prototype = {
    getSound: function () {
        console.log('Animal.prototype.getSound');
        throw new Error('Этот метод абстрактный. Следует переопределить его в потомках.');
    }
}

Animal.prototype.saySound = function () {
    console.log('Animal.prototype.saySound ...');
    const
        sound = this.getSound(),
        res = this.alias + ' say ' + sound
    ;
    console.log('Animal.prototype.saySound: ', res);
}

function Dog(alias) {
    console.log('Dog.constructor');
    Animal.call(this, alias);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.getSound = function () {
    console.log('Dog.prototype.getSound');
    return "woof";
}


function Cat(alias) {
    console.log('Cat.constructor');
    Animal.call(this, alias);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.getSound = function () {
    console.log('Cat.prototype.getSound');
    return "moow";
}

//---------------------------------------------------------------------------
let dog = new Dog("Sharik");
dog.saySound();
dog.changeAlias("Bobik");
dog.saySound();

let cat = new Cat("Murka");
cat.saySound();

// let abstractAnimal = new Animal("Fish");
// abstractAnimal.saySound();