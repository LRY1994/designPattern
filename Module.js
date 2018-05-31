//Module模块模式
var modules =(function(){
    var privateVar =0;
    var privateMethod = function(){};
    return{
        publicVar :'anotherVar',
        publicMethod:function(){privateMethod()}
    }

})();


//Revealing Module揭示模块模式
var revealingModule = function(){
    var privateVar = 'privateVar';
    var publicVar = 'publicVar';
    function privateFucntion (){}
    function publicSet(v){privateVar = v}
    function publicGet(){privateFucntion()}
    return{
        set :publicSet,
        gretting :publicVar,
        get: publicGet
    }
}