document.querySelector("#ketto").innerHTML = "<button>Vagyok</button>"

const div = document.querySelector("#ketto")
div.innerHTML = "<button>Vagyok</button>"

//const haromdiv = document.querySelector(".harom")
//haromdiv.innerHTML = "alma"

const numinput = document.querySelector("#num")
console.log(numinput.value)

const mutatGomb = document.querySelector("#mutatGomb")
//mutatGomb.addEventListener('click',() => {console.log("Működik")})
//mutatGomb.addEventListener('click',() => {console.log(numinput.value * 2)})
mutatGomb.addEventListener('click',() => {console.log(Number(numinput.value) + 2)})