
function Animals(alias) {
    console.log('Animals.constructor', alias)
    this.alias = alias;
    this.changeAlias = function (newAlias) {
        console.log('Animals.changeAlias', newAlias)
        this.alias = newAlias;
    }
}

Animals.prototype = {
    getSound: function () {
        console.log('Animals.prototype.getSound');
        throw new Error('Этот метод абстрактный. Следует переопределить его в потомках.');
    }
}

Animals.prototype.saySound = function () {
    console.log('Animals.prototype.saySound ...');
    const
        sound = this.getSound(),
        res = this.alias + ' say ' + sound
    ;
    console.log('Animals.prototype.saySound: ', res);
}

function Dog(alias) {
    console.log('Dog.constructor');
    Animals.call(this, alias);
}

Dog.prototype = Object.create(Animals.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.getSound = function () {
    console.log('Dog.prototype.getSound');
    return "woof";
}


function Cat(alias) {
    console.log('Cat.constructor');
    Animals.call(this, alias);
}
Cat.prototype = Object.create(Animals.prototype);
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

let abstractAnimal = new Animals("Fish");
abstractAnimal.saySound();