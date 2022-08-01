"use strict";
class quack {
    quack() {
        console.log("quack");
    }
}
class muteQuack {
    quack() {
        console.log('silence');
    }
}
class squeak {
    quack() {
        console.log('squeak');
    }
}
class flyWithWings {
    fly() {
        console.log("I'm flying!!");
    }
}
class flyNoWay {
    fly() {
        console.log("I can't fly");
    }
}
class duck {
    constructor(flyBehavior, quackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }
    performQuack() {
        this.quackBehavior.quack();
    }
    performFly() {
        this.flyBehavior.fly();
    }
    setFlyBehavior(fly) {
        this.flyBehavior.fly = fly.fly;
    }
    setQuackBehavior(quack) {
        this.quackBehavior.quack = quack.quack;
    }
}
class ModelDuck extends duck {
    constructor() {
        super(new flyWithWings(), new quack());
    }
}
const modelDuck = new (ModelDuck);
modelDuck.performFly();
modelDuck.setFlyBehavior(new flyNoWay());
modelDuck.performFly();
