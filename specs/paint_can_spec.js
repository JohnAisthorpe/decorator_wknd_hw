const assert = require('assert');
const { futimesSync } = require('fs');
const PaintCan = require('../models/paint_can.js');

describe('PaintCan', function () {
    let paint_can;

    beforeEach(function () {
      paint_can = new PaintCan(5);

    });

    it('paint can should have a volume', function () {
    const actual = paint_can.volume;
    const expected = 5;
    assert.strictEqual(actual, expected);
    });

    it('check if paint can empty', function () {
    const actual = paint_can.empty;
    const expected = false;
    assert.strictEqual(actual, expected);
    });

    it('paint can can be emptied', function () {
    paint_can.emptyPaintCan();
    const actual = paint_can.empty;
    const expected = true;
    assert.strictEqual(actual, expected);
    });
   
});