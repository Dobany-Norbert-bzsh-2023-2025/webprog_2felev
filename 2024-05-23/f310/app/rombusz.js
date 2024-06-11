export function startCalc() {
    var side = Number(this.sideInput.value);
    var alpha = Number(this.alphaInput.value);
    var perimeter = this.perimeterCalc(side);
    var area = this.areaCalc(side, alpha);
    this.renderResult(perimeter, area);
}
export function perimeterCalc(side) {
    return side * 4;
}
export function areaCalc(side, alpha) {
    var rad = alpha * Math.PI / 180;
    return Math.pow(side, 2) * Math.sin(rad);
}
//# sourceMappingURL=rombusz.js.map