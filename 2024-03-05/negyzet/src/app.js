const sideInput = document.querySelector("#side");
const calcButton = document.querySelector("#calcButton")
const perimeterInput = document.querySelector("#perimeter")
const areaInput = document.querySelector("#area")
calcButton.addEventListener('click', () => {calculate()})

function calculate()
{
    const side = Number(sideInput.value)
    const perimeter = Number(calcPerimeter(side))
    const area = Number(calcArea(side))

    perimeterInput.value = perimeter.toFixed(2)
    areaInput.value = area.toFixed(2)
}

function calcPerimeter(side)
{
    return side*4 
}

function calcArea(side)
{
    return Math.pow(side,2)
}
