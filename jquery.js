$.fn.fillDiv = function(toDiv, startPixelRaw){
    const startPixel = startPixelRaw || 1;
    const topHeight = toDiv.height();
    const topWidth = toDiv.width();
    var pixel = startPixel - 1;
    do{
        this.css({
            'font-size': ++pixel + 'px',
        });
        console.log(pixel, this.width(), topWidth, this.height(), topHeight, this.text());
    }while(this.width() < topWidth && this.height() < topHeight && this.text() != '');
};
