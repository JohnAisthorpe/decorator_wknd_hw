const PaintCan = require("./paint_can");
const Room = require("./room");

const Decorator = function () {
    this.paintStock = [];
  };

  Decorator.prototype.addPaint = function(paintCan){
      this.paintStock.push(paintCan);
    };

  Decorator.prototype.volumeInStock = function(){
      let volumeMeasure = 0;
      for (const paintCan of this.paintStock){
          volumeMeasure += paintCan.volume;
    
        };
    return volumeMeasure
    };

  Decorator.prototype.canPaintRoom = function(room){
    return this.volumeInStock() >= room.area;
    };

    Decorator.prototype.paintRoom = function(room){
      if (this.canPaintRoom(room)){
        room.roomPainted()
      }
      };

    module.exports = Decorator;