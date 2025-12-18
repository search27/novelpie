
function RxInlineWorker(func, self) {
    const global = window;
    var WORKER_ENABLED = !!(global === global.window && global.URL && global.Blob && global.Worker);
    var _this = this;
    var functionBody;

    self = self || {};

    if (WORKER_ENABLED) {
        functionBody = func.toString().trim().match(
            /^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/
        )[1];
        
        return new global.Worker(global.URL.createObjectURL(
            new global.Blob([ functionBody ], { type: "text/javascript" })
        ));
    }

    function postMessage(data) {
        setTimeout(function() {
        _this.onmessage({ data: data });
        }, 0);
    }

    this.self = self;
    this.self.postMessage = postMessage;

    setTimeout(func.bind(self, self), 0);
}

RxInlineWorker.prototype.postMessage = function postMessage(data) {
    var _this = this;
    setTimeout(function() { _this.self.onmessage({ data: data }); }, 0);
};



// Origin

window.Gilgamesh = new RxInlineWorker(function(){

    this.isBelongRange = function(coordinate, x, y, measureWidth, measureHeight){
        let isBelong = false;
        if(coordinate[0] <= x && (coordinate[0] + measureWidth) >= x){
            if(coordinate[1] <= y && (coordinate[1] + measureHeight) >= y){
                isBelong = true;
            }
        }
        return isBelong;
    }.bind(this);

    this.normalize = function(max, min, x) { return (x - min) / (max - min); };

    this.onmessage = function (e) {
       
        const particles = [];
        const pixels = e.data['pixels'];
        const width = e.data['width'];
        const height = e.data['height'];
        const gap = e.data['gap'];
        const currentTextArr = e.data['currentTextArr'];

        for(let y = 0; y < height; y += gap){
            for(let x = 0; x < width; x += gap){
                let isContain = false;
                for(let i = 0; i < currentTextArr.length; i++){
                    const each = currentTextArr[i];
                    const coordinate = each['coordinate'];
                    const measureWidth = each['width'];
                    const measureHeight = each['height'];
                    isContain = this.isBelongRange(coordinate, x, y, measureWidth, measureHeight);
                    if(isContain) { break; }
                }
                if(!isContain) continue;

                const index = (y * width + x ) * 4;
                const alpha = pixels[index + 3];
                if(alpha > 0){
                    const red = pixels[index];
                    const green = pixels[index + 1];
                    const blue = pixels[index + 2];
                    const color = `rgba(${red}, ${green}, ${blue}, ${this.normalize(255, 1, alpha)})`;
                    particles.push([x, y, color]);   
                }
            }
        }

        // particles
        this.postMessage({ data : particles });

    };

}, self);