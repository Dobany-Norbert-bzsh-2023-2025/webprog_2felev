var mondat = "kacsa es liba"
var res1 = mondat.indexOf("es")
var res2 = mondat.lastIndexOf("es")
var res3 = mondat.substring(2,3)

console.log(res3)

var string = "banán, banán, alma"
function cut(str)
{
    return str.substring(str.indexOf(', ')+1,str.lastIndexOf(', '))
}

console.log(cut(string))