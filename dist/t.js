"use strict";
class OOP {
    constructor() {
        this.name = 10;
        this.hello = 'hello';
    }
    getName() {
        return this.name;
    }
}
class elseOOP extends OOP {
    constructor() {
        super();
    }
    getHello() {
        return this.hello;
    }
}
const newOOP = new elseOOP();
console.log(newOOP.getHello());
