class Car{
 #brand
 #model
 speed = 0
 isTrunkOpen = false
 

 constructor(carDetails){
  this.#brand = carDetails.brand
  this.#model = carDetails.model
 }

 displayInfo(){
  const trunkStatus = this.isTrunkOpen ? 'open' : 'closed'

  console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, TrunkInfo: ${trunkStatus}`)

 }

 go(){
  
  if(!this.isTrunkOpen){
    this.speed += 5
   }
   if(this.speed > 200 ){
    this.speed = 200
   }
 }
 brake(){
  this.speed -= 5
  if(this.speed < 0){
   this.speed = 0
  }
 }

 openTrunk(){
  if(this.speed === 0){
   this.isTrunkOpen = true
   
  }
 }
 closeTrunk(){
  this.isTrunkOpen = false

 }
}

const car1 = new Car({
 brand: 'Toyota',
 model: 'Corolla',
 speed: 0
})
const car2 = new Car({
 brand: 'Tesla',
 model: 'Model3',
 speed: 0
})

class RaceCar extends Car{
 acceleration

 constructor(carDetails){
  super(carDetails)
  this.acceleration = carDetails.acceleration
 }

 displayInfo(){
  console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`)

  }

 go(){
  this.speed += this.acceleration
  if(this.speed > 300){
   this.speed = 300
  }
 }

  openTrunk(){
   console.log('Race cars do not have trunks')
  }
  closeTrunk(){
   console.log('Race cars do not have trunks')
  }
 
}

const raceCar1 = new RaceCar({
 brand: 'McLaren',
 model: 'F1',
 acceleration: 20
})



// console.log(car1)
car1.displayInfo()
car1.go()
car1.closeTrunk()
car1.go()
car1.go()
car1.go()
car1.go()
car1.go()
car1.go()
car1.go()
car1.openTrunk()
car1.displayInfo()




car2.displayInfo()

raceCar1.displayInfo()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.go()
raceCar1.displayInfo()
raceCar1.openTrunk()
raceCar1.closeTrunk()



