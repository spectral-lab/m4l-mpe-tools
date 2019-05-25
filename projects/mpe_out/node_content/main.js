const maxAPI = require('max-api');
const app = require('./app')(maxAPI);

const main = () => {
  maxAPI.addHandler('update-menu', updateMenu);
  maxAPI.addHandler('open-port', openPort);
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
  app.output.sendMessage([byte1, byte2, byte3]);
};

main();

