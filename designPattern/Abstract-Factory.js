//Factory.js
function Car(options){
    this.doors = options.doors ||4;
    this.color = options.color||'silver';
}
function Trunk(options){
    this.weelSize=options.weelSize||'large';
    this.color =options.color||'blue';
}
var AbstractFactory=(function(){
    var types={};
    return{
        getVehicle:function(type,options){
            var Vehicle = types[type];
            return Vehicle? new Vehicle(options):null
        },
        registerVehicle:function(ty,vehicle){//这个必须有
            var proto = vehicle.prototype;
            if(proto.drive&&proto.breakDown){
                types[type]=vehicle
            }
            return AbstractFactory;
        }
        
    }
})();

//use
AbstractFactory.registerVehicle("car",Car);
AbstractFactory.registerVehicle("truck",Trunk);
var car = AbstractFactory.getVehicle("car",{
    door:6,
    color:'red'
});
var trunk = AbstractFactory.getVehicle("trunk",{
    weelSize:'small',
    color:'red'
})