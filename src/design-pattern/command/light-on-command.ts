import ICommand from "./command";

type TLight = {
  on():void
}

class LightOnCommand implements ICommand {
  light:TLight

  constructor(light:TLight){
    this.light = light
  }

  execute(){
    this.light.on();
  }
}

export default LightOnCommand;