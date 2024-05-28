class Gyepes
{
    diameterInput:HTMLInputElement|null;
    areaInput:HTMLInputElement|null;
    costInput:HTMLInputElement|null;
    calcBtn:HTMLElement|null;
    area:number;
    cost:number;
    constructor()
    {
        this.startBind();
        this.startEventHandler();
    }

    startBind()
    {
        this.diameterInput = document.querySelector("#diameter")
        this.areaInput = document.querySelector("#area")
        this.costInput = document.querySelector("#cost")
        this.calcBtn = document.querySelector("#calcBtn")
    }

    startEventHandler()
    {
        this.calcBtn?.addEventListener('click',()=>{this.startCalc()})
    }

    startCalc()
    {
        if(this.diameterInput)
            {
                const diameter = Number(this.diameterInput.value);
                const radius = diameter/2;
                this.area = this.calcArea(radius);
                this.cost = this.calcCost(this.area);
                this.renderResult();
            }
    }

    calcArea(radius:number):number
    {
        return Math.pow(radius,2)*Math.PI;
    }

    calcCost(fullArea:number):number
    {
        return 2500*(fullArea/2)
    }

    renderResult()
    {
        if(this.areaInput)
            {
                this.areaInput.value = String(this.area);
            }
       if(this.costInput)
        {
            this.costInput.value=String(this.cost)
        }
    }

    
            
}

new Gyepes();

