const maxAPI = require('max-api');
const midi = require('midi');
const output = new midi.output();

const main = () => {
  maxAPI.addHandler('update-menu', updateMenu);
  maxAPI.addHandler('open-port', openPort);
  maxAPI.addHandler('send-midi', sendMIDI);
  output.openPort(0);
  updateMenu();
};

const updateMenu = () => {
  maxAPI.outlet('to-menu', 'clear');
  for (let i = 0; i < output.getPortCount(); i++) {
    maxAPI.outlet('to-menu', 'append', output.getPortName(i));
  }
};

const openPort = (portIdx) => {
  output.closePort();
  output.openPort(portIdx);
};

const sendMIDI = (status, data1, data2) => {
  if (Number.isInteger(status)) {
    if (Number.isInteger(data1)) {
      if (Number.isInteger(data2)) {
        output.sendMessage([status, data1, data2]);
        return;
      }
      output.sendMessage([status, data1]);
      return;
    }
    output.sendMessage([status]);
    return;
  }
  maxAPI.post('Append MIDI message as a list of integers');
};

main();
