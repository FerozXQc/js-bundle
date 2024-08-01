class Human{
    alive = true;

    poop(){
        console.log(this.name + " poops. hehe.");
    }
}

class human1 extends Human{
    name = 'Feroz';
}

const hooman = new human1();
hooman.poop();
