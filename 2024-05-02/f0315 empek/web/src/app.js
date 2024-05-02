const doc =
{
    empBody:document.querySelector('#empBody')
}

const state =
{
    url:'http://localhost:8000/employees',
    empList:[]
}

function getEmp()
{
    console.log('getEmp check')
    fetch(state.url).then(response=>response.json()).then(result => {state.empList=result
        renderEmp()})
    
}

function renderEmp()
{
    console.log('renderEmp check')
    state.empList.forEach(emp=>{
        var tr = document.createElement('tr')
        tr.innerHTML=`
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>`
        
        doc.empBody.append(tr)
    })
}

getEmp()