const baseInput = document.querySelector("#base")
const heightInput = document.querySelector("#height")
const areaInput = document.querySelector("#area")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', () => {startCalc()})

function startCalc()
{
       let base = Number(baseInput.value)
       let height = Number(heightInput.value)
        //console.log(calcArea(base,height))
       let area = Number(calcArea(base,height))
       areaInput.value = area.toFixed(2)
}

function calcArea(base,height)
{
    return (base*height)/2
}