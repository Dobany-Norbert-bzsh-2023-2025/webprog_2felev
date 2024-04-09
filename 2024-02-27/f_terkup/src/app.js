const radiusInput = document.querySelector("#radius")
const heightInput = document.querySelector("#height")
const volumeInput = document.querySelector("#volume")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', () => {startCalc()})

function startCalc() 
{
    let radius = Number(radiusInput.value)
    let height = Number(heightInput.value)
    //console.log(calcVolume(radius,height))
    let volume = Number(calcVolume(radius,height))
    volumeInput.value = volume.toFixed(2)
}

function calcVolume(radius,height)
{
    return Number(1.0/3.0 * Math.pow(radius,2) * Math.PI * height)
}