interface quackBehavior {
  quack: () => void
}

class quack implements quackBehavior{
  quack(){
    console.log("quack")
  }
}



class muteQuack implements quackBehavior{
  quack(){
    console.log('silence')
  }
}
class squeak implements quackBehavior{
  quack(){
    console.log('squeak')
  }
}

interface flyBehavior {
  fly: () => void
}

class flyWithWings implements flyBehavior{
  fly(){
    console.log("I'm flying!!")
  }
}

class flyNoWay implements flyBehavior{
  fly(){
    console.log("I can't fly")
  }
}

abstract class duck {
  private flyBehavior:flyBehavior
  private quackBehavior:quackBehavior
  constructor(flyBehavior:flyBehavior, quackBehavior:quackBehavior){
    this.flyBehavior = flyBehavior
    this.quackBehavior = quackBehavior
  }
  
  performQuack(){
    this.quackBehavior.quack()
  }

  performFly(){
    this.flyBehavior.fly()
  }
  
  setFlyBehavior(fly: flyBehavior):void{
    this.flyBehavior.fly = fly.fly
  }
  setQuackBehavior(quack:quackBehavior):void{
    this.quackBehavior.quack = quack.quack
  }

}

class ModelDuck extends duck{
  constructor(){
    super(new flyWithWings(), new quack())
  }

}

const modelDuck = new (ModelDuck)
modelDuck.performFly()

modelDuck.setFlyBehavior(new flyNoWay())
modelDuck.performFly()

