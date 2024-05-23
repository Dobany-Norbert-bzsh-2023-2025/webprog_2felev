class Rom
{
    sideInput:HTMLInputElement|null;
    alphaInput:HTMLInputElement|null;
    perimeterInput:HTMLInputElement|null;
    areaInput:HTMLInputElement|null;
    calcButton:HTMLButtonElement|null;

    

    constructor()
    {
        this.bindHTML();
        this.handleEvent();
    }

    bindHTML()
    {
        this.sideInput=document.querySelector("#side");
        this.alphaInput=document.querySelector("#alpha");
        this.perimeterInput=document.querySelector("#perimeter");
        this.areaInput=document.querySelector("#area");
        this.calcButton=document.querySelector("#calcBtn");
    }

    handleEvent()
    {
        this.calcButton.addEventListener("click",()=>{this.startCalc()});
    }

    startCalc()
    {
        var side = Number(this.sideInput.value);
        var alpha = Number(this.alphaInput.value);
        var perimeter = this.perimeterCalc(side);
        var area = this.areaCalc(side,alpha);
        this.renderResult(perimeter,area);
    }

    perimeterCalc(side:number) : number
    {
        return side*4
    }

    areaCalc(side:number,alpha:number) : number
    {
        var rad = alpha * Math.PI / 180;
        return Math.pow(side,2) * Math.sin(rad);
    }

    renderResult(perimeter:number,area:number)
    {
        this.perimeterInput.value=String(perimeter)
        this.areaInput.value=String(area)

        /*if(this.perimeterInput)
            {
                this.perimeterInput.value=String(perimeter)
            }
        if(this.areaInput)
            {
                this.areaInput.value=String(area)
            }*/
    }
}

new Rom();