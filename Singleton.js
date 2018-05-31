//Singleton单例模式
var singleTon = (function(){
    var instance;
    function init(){
        function privateMethod(){}
        var privateVar = 'privateVar';
        return {
            publicMethod :function(){},
            publicVar : 'publicVar'
        }
    }
    return{
        getInstance:function(){
            if(!instance){ instance = init(); }
            return instance;
        }
    }
})

var singleTon2 = (function(){
    var instance;
    var _static ={}
    function singleTon(opt){//构造函数
        options = opt ||{};
        this.point = opt.point;
        this.privateMethod = function(){}
    }
    var _satic = {
        name :'singleTon',
        getInstance:function(opt){
            if(!instance){ instance = new singleTon(opt); }
            return instance;
        }
    };
    return _static;
})

singleTonTest = singleTon2.getInstance({point:5})