//Object.create
var vehicle = {
    getModel:function(){
        console.log(this.model);
    }
};
var car = Object.create(vehicle,{
    "id":{
        value:1,
        enumerable:true
    },
    "model":{
        value:"Ford",
        enumerable:true
    }
});

//function F(){}
var beget = (function({
    function F(){};
    return function(_proto_){
        F.prototype=_proto_;
        return new F();
    }
}))();

var car =beget(vehicle);