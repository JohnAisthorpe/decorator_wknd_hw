const assert = require('assert');
const { futimesSync } = require('fs');
const Room = require('../models/room.js');

describe('Room', function () {
    let room;

    beforeEach(function () {
      room = new Room(20);

    });

    it('room should have an area', function () {
    const actual = room.area;
    const expected = 20;
    assert.strictEqual(actual, expected);
    });

    it('room should start not painted', function () {
    const actual = room.painted;
    const expected = false;
    assert.strictEqual(actual, expected);
    });

    it('room should be able to get painted', function () {
        room.roomPainted();
        const actual = room.painted;
        const expected = true;
        assert.strictEqual(actual, expected);
    });
   
});

