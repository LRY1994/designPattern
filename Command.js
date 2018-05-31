//Command
(function(){
    var carManager = {
        buyVechicle:function(model,id){
            return "buy successfully!"
        },
        sellVechicle:function(model,id){
            return "sell successfully！"
        },
        execute:function(fnName){
            return carManager[fnName]&&carManager[fnName].apply(carManager,[].slice.call(arguments,1));
        }
    }
})()

carManager.execute("buyVechicle","Ferrari","1234");