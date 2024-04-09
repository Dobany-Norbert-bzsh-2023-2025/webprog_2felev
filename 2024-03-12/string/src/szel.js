
document.getElementById("doitButton").addEventListener("click",()=>
{

    var numStr = document.getElementById("num").value

    if(numStr.match(/[0-9]+/))
    {
        console.log("szám")
    }
    else
    {
        console.log("más")
    }

    var num = Number(numStr)
    if(num==1)
    {
        console.log("1")
    }
    else if(num==2)
    {
        console.log("2")
    }
    else
    {
        console.log("más szám")
    }
})