function car(make,model,year,color){
    this.make = (make);
    this.model = (model);
    this.year = (year);
    this.color = (color);
}

const car1 = new car('huey', 'fiesta', 1983, 'black');
console.log(car1.make);