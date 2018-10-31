//Observer 
{//观察者
function Observer()
    this.observerList = [];
}
Observer.prototype.get = function(index){
    return this.observerList[index]
}
Observer.prototype.add = function(ConcreteOberver){
    return this.observerList.push(ConcreteOberver)
}
//目标
function Subject(){
    this.observers=new Observer();
}
//具体观察者注册到目标
Subject.prototype.add = function(ConcreteOberver){
    this.observers.add(ConcreteOberver)
}
//目标发生变化，调度观察者
Subject.prototype.notify = function(context){
    for(let i=0;i<this.observers.count();i++){
        this.observers.get(i).update(context)
    }
}
//具体观察者
function ConcreteOberver(){
    this.update = function(){}
}