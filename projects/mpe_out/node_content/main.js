const maxAPI = require('max-api');
const app = require('./app')(maxAPI);

const main = () => {
  maxAPI.addHandler('update-menu', updateMenu);
  maxAPI.addHandler('open-port', openPort);
  maxAPI.addHandler('send-midi', sendMIDI);
}

const updateMenu = () => {
  app.updateMenu();
};

const openPort = (portIdx) => {
  app.output.closePort();
  app.output.openPort(portIdx);
};

const sendMIDI = (byte1, byte2, byte3) => {
  if (Number.isInteger(byte1)) {
    if (Number.isInteger(byte2)) {
      if (Number.isInteger(byte3)) {
        app.output.sendMessage([byte1, byte2, byte3]);
        return;
      }
      app.output.sendMessage([byte1, byte2]);
      return;
    }
    app.output.sendMessage([byte1]);
    return;
  }
  maxAPI.post('Append MIDI message as a list of integers')
};

main();

