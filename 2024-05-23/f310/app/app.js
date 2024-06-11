import { startCalc } from "../src/rombusz";
class Rom {
    constructor() {
        this.bindHTML();
        this.handleEvent();
    }
    bindHTML() {
        this.sideInput = document.querySelector("#side");
        this.alphaInput = document.querySelector("#alpha");
        this.perimeterInput = document.querySelector("#perimeter");
        this.areaInput = document.querySelector("#area");
        this.calcButton = document.querySelector("#calcBtn");
    }
    handleEvent() {
        this.calcButton.addEventListener("click", () => { startCalc(); });
    }
    renderResult(perimeter, area) {
        this.perimeterInput.value = String(perimeter);
        this.areaInput.value = String(area);
    }
}
new Rom();
//# sourceMappingURL=app.js.map