//Factory.js
function Car(options){
    this.doors = options.doors ||4;
    this,color = options.color||'silver';
}
function Trunk(options){
    this.weelSize=options.weelSize||'large';
    this.color =options.color||'blue';
}
function VehicleFactory(){}
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function(options){
    if(options.vehicleTtype == 'car'){
        this.vehicleClass=Car;
    }else{
        this.vehicleClass = Truck;
    }
    return new this.vehicleClass(options);
}
//use
var carFactory=new VehicleFactory();
var car=carFactory.createVehicle({
    vehicleTtype:'car',
    doors:6,
    color:'yellow'
})
var trunk = carFactory.createVehicle({
    vehicleTtype:'trunk',
    color:'red',
    weelSize:'small'
})