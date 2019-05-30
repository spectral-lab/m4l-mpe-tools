const { assert } = require('chai');

module.exports = {
  // Name of the patcher which you want to test
  target: 'receive_mpe',

  // `initPatcher` will be executed just before each test function.
  initPatcher: function*(maxAPI) {
    maxAPI.outlet({
      send_mpe: { inlet1: 8888 },
      receive_mpe: { inlet0: 8888 }
    });
    setTimeout(() => {
      maxAPI.outlet({ send_mpe: { inlet0: 1 } });
    }, 50);
    assert.notEqual(yield, null, 'isOk');
  },

  // The key of each test generator function should start with 'test'
  testReceiveNumber: function*(maxAPI) {
    maxAPI.outlet({
      send_mpe: { inlet0: 178 }
    });
    assert.deepEqual(yield, { outlet0: 178 }, 'natural number');
    maxAPI.outlet({
      send_mpe: { inlet1: 145 },
      receive_mpe: { inlet0: 145 }
    });
    setTimeout(() => {
      maxAPI.outlet({ send_mpe: { inlet0: -78.5 } });
    }, 50);
    assert.deepEqual(yield, { outlet0: -78.5 }, 'negative float');
  },
  testReceiveContinuously: function*(maxAPI) {
    for (let i = 0; i < 3000; i++) {
      maxAPI.outlet({
        send_mpe: { inlet0: i }
      });
      assert.deepEqual(yield, { outlet0: i });
    }
  },
  testReceiveList: function*(maxAPI) {
    maxAPI.outlet({
      send_mpe: { inlet1: 277 },
      receive_mpe: { inlet0: 277 }
    });
    setTimeout(() => {
      maxAPI.outlet({ send_mpe: { inlet0: [-0.3, 'hi', 5] } });
    }, 50);
    assert.deepEqual(
      yield,
      { outlet0: [-0.3, 'hi', 5] },
      'list of mixed types'
    );
  }
};
