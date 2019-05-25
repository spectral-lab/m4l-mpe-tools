const midi = require('midi');

class App {
  constructor(maxAPI){
    this.maxAPI = maxAPI;
    this.output = new midi.output();
    this.output.openPort(0);
    this.updateMenu();
  }
  updateMenu() {
    this.maxAPI.outlet('to-menu', 'clear');
    for (let i = 0; i < this.output.getPortCount(); i ++) {
      this.maxAPI.outlet('to-menu', 'append', this.output.getPortName(i));
    }
  }
}

module.exports = maxAPI => new App(maxAPI);
