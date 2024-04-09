var mondat = "meg nyilnak a volgyben a kerti viragok"
var eredmeny = mondat.replace(/e/,/a/)
console.log(eredmeny)

var email = "346"
var egyezik = email.match(/^[a-z0-9]+@[a-z0-9-]+\.[a-z]$/)
if(egyezik)
{
    console.log("ok")
}
else
{
    console.log("not ok")
}