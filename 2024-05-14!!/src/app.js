var Gyepes = /** @class */ (function () {
    function Gyepes() {
        this.startBind();
        this.startEventHandler();
    }
    Gyepes.prototype.startBind = function () {
        this.diameterInput = document.querySelector("#diameter");
        this.areaInput = document.querySelector("#area");
        this.costInput = document.querySelector("#cost");
        this.calcBtn = document.querySelector("#calcBtn");
    };
    Gyepes.prototype.startEventHandler = function () {
        var _this = this;
        var _a;
        (_a = this.calcBtn) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { _this.startCalc(); });
    };
    Gyepes.prototype.startCalc = function () {
        if (this.diameterInput) {
            var diameter = Number(this.diameterInput.value);
            var radius = diameter / 2;
            this.area = this.calcArea(radius);
            this.cost = this.calcCost(this.area);
            this.renderResult();
        }
    };
    Gyepes.prototype.calcArea = function (radius) {
        return Math.pow(radius, 2) * Math.PI;
    };
    Gyepes.prototype.calcCost = function (fullArea) {
        return 2500 * (fullArea / 2);
    };
    Gyepes.prototype.renderResult = function () {
        if (this.areaInput) {
            this.areaInput.value = String(this.area);
        }
        if (this.costInput) {
            this.costInput.value = String(this.cost);
        }
    };
    return Gyepes;
}());
new Gyepes();
