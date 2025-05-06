{
    //starts
  class Car{
    drive(){
        console.log('I am driving car')
    }
  }

  class Truck{
    loadTruck(){
        console.log('The truck is loading')
    }
  }

  const useVehicle =(vehicle:Car|Truck)=>{
          if(vehicle instanceof Car){
            vehicle.drive()
          }
          if(vehicle instanceof Truck){
            vehicle.loadTruck();
          }
  }


  const newCar = new Car();
  const newTruck = new Truck();
  useVehicle(newCar);
  useVehicle(newTruck);



    //ends
}