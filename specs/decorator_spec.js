const assert = require('assert');
const { futimesSync } = require('fs');
const Decorator = require('../models/decorator.js');
const PaintCan = require('../models/paint_can.js');
const Room = require('../models/room.js');

describe('Decorator', function () {
    let decorator;
    let paintCan1;
    let paintCan2;
    let room;
  
    beforeEach(function () {
      decorator = new Decorator();
      paintCan1 = new PaintCan(5);
      paintCan2 = new PaintCan(3);
      room = new Room(8);

    });

    it('paint stock starts empty', function () {
    const actual = decorator.paintStock;
    const expected = [];
    assert.deepStrictEqual(actual, expected);
    });

    it('add paint to stock', function () {
    decorator.addPaint(paintCan1)
    const actual = decorator.paintStock;
    const expected = [paintCan1];
    assert.deepStrictEqual(actual, expected);
    });

    it('calculate stock volume', function () {
    decorator.addPaint(paintCan1)
    decorator.addPaint(paintCan2)
    const actual = decorator.volumeInStock();
    const expected = 8;
    assert.strictEqual(actual, expected);
    });
  
    it('check if has enought paint for room', function () {
      decorator.addPaint(paintCan1);
      decorator.addPaint(paintCan2);
      const actual = decorator.canPaintRoom(room);
      const expected = true;
      assert.strictEqual(actual, expected);
      });

    it('check if not has enought paint for room', function () {
    decorator.addPaint(paintCan1);
    const actual = decorator.canPaintRoom(room);
    const expected = false;
    assert.strictEqual(actual, expected);
    });

    it('can paint room', function () {
      decorator.addPaint(paintCan1);
      decorator.addPaint(paintCan2);
      decorator.paintRoom(room);
      const actual = room.painted;
      const expected = true;
      assert.strictEqual(actual, expected);
      });

      it('can not paint room', function () {
        decorator.addPaint(paintCan1);
        decorator.paintRoom(room);
        const actual = room.painted;
        const expected = false;
        assert.strictEqual(actual, expected);
        });
   
});