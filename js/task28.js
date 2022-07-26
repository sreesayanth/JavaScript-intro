function car(name, mileage, max_speed){
    this.name=name;
    this.mileage=mileage;
    this.max_speed=max_speed;
}
let car1=new car('mustange',10,240);
let car2=new car('polo gt',15,150);
let car3=new car('alto 800',20,100);
console.log(car1)
console.log(car2)
console.log(car3)