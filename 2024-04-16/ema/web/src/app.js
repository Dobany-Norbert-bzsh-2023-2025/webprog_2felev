const doc = 
{
    empBody:document.querySelector("#empBody"),
    addButton:document.querySelector("#addButton")
}

const state = 
{
    url:'http://localhost:8000/employees'
}

doc.addButton.addEventListener('click',()=>{})

function createEmp()
{
    fetch(state.url,
        {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify
            ({
                name:"valaki",
                city:"valahol",
                salary: 30
            })
        })
}

function getEmp()
{
    fetch(state.url).then(response=>response.json()).then(result => renderEmp(result))
}

function renderEmp(empList)
{
    var tr = document.createElement('tr')
    empList.forEach(emp => 
    {
        //console.log(emp.salary)
        tr.innerHTML = `
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        <td>
            <button class="btn btn-primary"
                data-id="${emp.id}"
                data-name="${emp.name}"
                data-city="${emp.city}"
                data-salary="${emp.salary}"
                onclick="updateEmployee(this)"
                id="editButton"
            >Szerkesztés</button>
 
            <button class="btn btn-primary"
                onclick="deleteEmployee(${emp.id})"
            >Törlés</button>
           </td>
        `
        doc.empBody.appendChild(tr)
    });
}

getEmp()
