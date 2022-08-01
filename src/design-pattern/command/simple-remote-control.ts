import ICommand from "./command";

class SimpleRemoteControl {
  slot:ICommand
  constructor(){}

  setCommand(command:ICommand){
    this.slot = command
  }

  buttonWasPressed(){
    this.slot.execute;
  }
}