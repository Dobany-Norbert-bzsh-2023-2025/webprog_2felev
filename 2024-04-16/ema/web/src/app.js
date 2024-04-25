const doc = 
{
    empBody:document.querySelector("#empBody"),
    saveButton:document.querySelector("#saveButton"),
    clearButton:document.querySelector('#clearButton'),
    empName:document.querySelector("#name"),
    empCity:document.querySelector("#city"),
    empSalary:document.querySelector("#salary"),
    empId:document.querySelector("#id")
}

const state = 
{
    url:'http://localhost:8000/employees',
    name:'a',
    city:'b',
    salary:1,
    add:true

}

doc.clearButton.addEventListener('click',()=>{
    clearTableContent()
    
})

doc.saveButton.addEventListener('click',()=>{
    getDataFromForm()
    createEmp()
    deleteModalContent()
    
})

function getDataFromForm()
{
    state.name = doc.empName.value,
    state.city = doc.empCity.value
    state.salary = Number(doc.empSalary.value)
}

function deleteModalContent()
{
    doc.empId.value=''
    doc.empName.value=''
    doc.empCity.value=''
    doc.empSalary.value=''
}

/*function deleteGetId(id)
{
   console.log(id)
   getEmp()
}*/

function deleteEmp(id)
{
    let newUrl = state.url+'/'+id
    fetch(newUrl,{
        method:'DELETE',

    })
}

function updateEmp(source)
{
    doc.empId.value=source.dataset.id
    doc.empName.value=source.dataset.name
    doc.empCity.value=source.dataset.city
    doc.empSalary.value=source.dataset.salary
}

function createEmp()
{
    fetch(state.url,
        {
            
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify
            ({
                name:state.name,
                city:state.city,
                salary: state.salary
            })
        })
}


function getEmp()
{
    fetch(state.url).then(response=>response.json()).then(result => renderEmp(result))
}

function renderEmp(empList)
{
    
    empList.forEach(emp => 
    {
        var tr = document.createElement('tr')
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
                data-bs-toggle="modal" data-bs-target="#operatorModal"
                onclick="updateEmp(this)"
                id="editButton"
            >Szerkesztés <i class="bi bi-pencil-fill"></i></button>
 
            <button class="btn btn-danger"
                onclick="deleteEmp(${emp.id})" id="deleteButton"
            >Törlés <i class="bi bi-trash3-fill"></i></button>
           </td>
        `
        doc.empBody.appendChild(tr)
    });
}

function clearTableContent()
{
    doc.empBody.textContent = ''
}

getEmp()

//deleteEmp(${emp.id()})