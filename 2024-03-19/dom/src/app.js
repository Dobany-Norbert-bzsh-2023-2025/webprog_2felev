/*document.getElementById('egy').textContent = '137'

const a = document.getElementsByClassName('ketto')
a[1].textContent= "asdadsad"
a[2].textContent = "asdasdad"

const b = document.getElementsByTagName("h2")
b[1].textContent="alma"

const c = document.querySelectorAll('h2')
for(let i=0; i<2;i++)
{
    c[i].textContent = "<i>asdsadas</i>"//sima kiirodas
    c[i].innerHTML = "<i>asdsadas</i>"//felhasznalja a taget
    c[i].style.backgroundColor = "red"
}
c.forEach(elem=>{elem.style.borderRadius = '10px'})

console.error('így')
console.warn('figyelmeztetes')
console.log('sima')
console.clear()*/



const mehetGomb = document.getElementById('mehetGomb')
mehetGomb.addEventListener('click', ()=>{doIt()})

function doIt()
{
    alert("asd")
}
