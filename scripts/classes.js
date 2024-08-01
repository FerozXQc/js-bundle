class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayproduct(){
        console.log('ITEM: '+ this.name);
        console.log('PRICE: ' + this.price);
    }
}

const shirt1 = new product("H&M", 12.99);
shirt1.displayproduct();