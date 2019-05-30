const { assert, expect } = require('chai');
// @ts-ignore
const parser = require('note-parser');

module.exports = {
  target: 'convert_nn_to_freq',
  initPatcher: function*(maxAPI) {
    maxAPI.outlet({
      convert_nn_to_freq: { inlet0: 69, inlet1: 8192, inlet2: 2 }
    });
    assert.notEqual(yield, null, 'isOk');
  },
  testNoBend: function*(maxAPI) {
    maxAPI.outlet({ convert_nn_to_freq: { inlet0: 60 } });
    expect(yield, 'Do nothing on C=60').to.be.closeTo(parser.freq(60), 0.1);
  },
  testBendUpToTheEnd: function*(maxAPI) {
    maxAPI.outlet({ convert_nn_to_freq: { inlet0: 62, inlet1: 16383 } });
    expect(yield, 'Bend up from D=62 to E=64').to.be.closeTo(
      parser.freq(64),
      0.1
    );
  },
  testBendDownToTheEnd: function*(maxAPI) {
    maxAPI.outlet({ convert_nn_to_freq: { inlet0: 65, inlet1: 0 } });
    expect(yield, 'Bend down from F=65 to Eb=63').to.be.closeTo(
      parser.freq(63),
      0.1
    );
  },
  testBendWithRange8: function*(maxAPI) {
    maxAPI.outlet({
      convert_nn_to_freq: { inlet0: 48, inlet1: 16383, inlet2: 8 }
    });
    expect(yield, 'Bend up from C=48 to Ab=56').to.be.closeTo(
      parser.freq(56),
      0.1
    );
    maxAPI.outlet({ convert_nn_to_freq: { inlet0: 48, inlet1: 0, inlet2: 8 } });
    expect(yield, 'Bend down from C=48 to E=40').to.be.closeTo(
      parser.freq(40),
      0.1
    );
    maxAPI.outlet({
      convert_nn_to_freq: { inlet0: 48, inlet1: 12288, inlet2: 8 }
    });
    expect(yield, 'Bend up from C=48 to E=52').to.be.closeTo(
      parser.freq(52),
      0.1
    );
    maxAPI.outlet({
      convert_nn_to_freq: { inlet0: 48, inlet1: 4096, inlet2: 8 }
    });
    expect(yield, 'Bend down from C=48 to Ab=44').to.be.closeTo(
      parser.freq(44),
      0.1
    );
  },
  testMicroTone: function*(maxAPI) {
    maxAPI.outlet({
      convert_nn_to_freq: { inlet0: 60, inlet1: 8192 + 8192 / 4, inlet2: 1 }
    });
    expect(yield, 'Eighth higher than C=60').to.be.closeTo(
      parser.freq(60.25),
      0.1
    );
    maxAPI.outlet({
      convert_nn_to_freq: { inlet0: 65, inlet1: 8192 - 8192 / 2, inlet2: 1 }
    });
    expect(yield, 'Quarter lower than F=65').to.be.closeTo(
      parser.freq(64.5),
      0.1
    );
  }
};
