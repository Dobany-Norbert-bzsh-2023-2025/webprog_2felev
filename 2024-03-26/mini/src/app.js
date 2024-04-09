var emps =    
    [
        {
            id:1,
            name:"nev1",
            city:"city1"
        },
        {
            id:2,
            name:"nev1",
            city:"city1"
        }
    ]

const tbody = document.querySelector('#tbody')
var rows = ""
emps.forEach( (emp) => {
    var row = `
    <tr>
    <th>${emp.id}</th>
    <th>${emp.name}</th>
    <th>${emp.city}</th>
    </tr>`;
    rows = rows+row;
});
tbody.innerHTML = rows