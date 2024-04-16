/*szinkron folyamat
console.log('')
console.log('')
etc...

egymas utan futnak le
*/

function foly1()
{
    console.log(1)
}
function foly2()
{
    console.log(2)
}

foly1()
setTimeout(foly2,10000)
console.log(3)