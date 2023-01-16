const PaintCan = function (volume) {
    this.volume = volume;
    this.empty = false;
  };

  PaintCan.prototype.emptyPaintCan = function(){
      this.empty = true;
    };

    module.exports = PaintCan;