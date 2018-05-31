//Observer 
function Observer(){
    this.observerList = [];
}
Observer.prototype.get = function(index){
    return this.observerList[index]
}
Observer.prototype.add = function(ConcreteOberver){
    return this.observerList.push(ConcreteOberver)
}

function Subject(){
    this.observers=new Observer();
}
Subject.prototype.add = function(ConcreteOberver){
    this.observers.add(ConcreteOberver)
}
Subject.prototype.notify = function(context){
    for(let i=0;i<this.observers.count();i++){
        this.observers.get(i).update(context)
    }
}

function ConcreteOberver(){
    this.update = function(){}
}