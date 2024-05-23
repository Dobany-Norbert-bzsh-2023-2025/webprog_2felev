var Rom = /** @class */ (function () {
    function Rom() {
        this.bindHTML();
        this.handleEvent();
    }
    Rom.prototype.bindHTML = function () {
        this.sideInput = document.querySelector("#side");
        this.alphaInput = document.querySelector("#alpha");
        this.perimeterInput = document.querySelector("#perimeter");
        this.areaInput = document.querySelector("#area");
        this.calcButton = document.querySelector("#calcBtn");
    };
    Rom.prototype.handleEvent = function () {
        var _this = this;
        this.calcButton.addEventListener("click", function () { _this.startCalc(); });
    };
    Rom.prototype.startCalc = function () {
        var side = Number(this.sideInput.value);
        var alpha = Number(this.alphaInput.value);
        var perimeter = this.perimeterCalc(side);
        var area = this.areaCalc(side, alpha);
        this.renderResult(perimeter, area);
    };
    Rom.prototype.perimeterCalc = function (side) {
        return side * 4;
    };
    Rom.prototype.areaCalc = function (side, alpha) {
        var rad = alpha * Math.PI / 180;
        return Math.pow(side, 2) * Math.sin(rad);
    };
    Rom.prototype.renderResult = function (perimeter, area) {
        this.perimeterInput.value = String(perimeter);
        this.areaInput.value = String(area);
        /*if(this.perimeterInput)
            {
                this.perimeterInput.value=String(perimeter)
            }
        if(this.areaInput)
            {
                this.areaInput.value=String(area)
            }*/
    };
    return Rom;
}());
new Rom();
