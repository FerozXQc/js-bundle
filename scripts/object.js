const person = {
    name: 'feroz',
    age: 17,
    alive: false,
    saymyname: function(){
        console.log('Waltuh ' + this.name);
    }
}
person.saymyname();
console.log(person.name);