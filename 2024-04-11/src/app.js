const employeeArray =[
    {id: 1,name: "name1",city:"city1",salary:10},
    {id: 2,name: "name2",city:"city2",salary:11},
    {id: 3,name: "name3",city:"city3",salary:12},
    {id: 4,name: "name4",city:"city4",salary:13},
    {id: 5,name: "name5",city:"city5",salary:14},
    {id: 6,name: "name6",city:"city6",salary:15}
]

const empsBody = document.getElementById('empsBody')
var rows =''
employeeArray.forEach((emps)=>{
    var row = 
    `
    <tr>
        <td>${emps.id}</td>
        <td>${emps.name}</td>
        <td>${emps.city}</td>
        <td>${emps.salary}</td>
    </tr>
    `
    rows+=row
})
empsBody.innerHTML = rows