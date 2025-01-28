let Animal = {
    alias: "",
    changeAlias:function (newAlias) {
        console.log('Animal.changeAlias', newAlias);
        this.alias = newAlias;
    },
    getSound() {
        console.log('Animal.getSound');
        throw new Error('Этот метод абстрактный. Следует переопределить его в потомках.');
    },

    saySound () {
        let
            sound = this.getSound(),
            res = `${this.alias}` + ' say ' + sound;
        console.log('Animal.saySound: ', res);
        return res;
    }
};

let Dog ={
    __proto__: Animal,
    getSound:function (){
      return "woof";
    },
};

let Cat ={
    __proto__: Animal,
    alias:"Murka",
    getSound:function (){
        return "moow";
    }
};

//---------------------------------------------------------------------------
let dog = Object.assign({
    alias: "Sharik",
    __proto__:Dog
});
dog.saySound();
dog.changeAlias("Bobik");
dog.saySound();

let cat = Object.assign({
    alias: "Murka",
    __proto__:Cat
});

cat.saySound();
cat.changeAlias("Umka");
cat.saySound();

