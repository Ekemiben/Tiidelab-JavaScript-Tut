function onformSubmit(){
    let formData = obtainFormData();
    insertNewRecord(formData)

}

function obtainFormData(){
    let formData ={};
    formData["firstname"] = document.getElementById("fname").value;
    formData["lastname"] = document.getElementById("lname").value;
    formData["phone"] = document.getElementById("phon_number").value;
    formData["pasword"] = document.getElementById("password").value;
    return formData;

}

function insertNewRecord(Data){
    let table = document.getElementById("personal-details").getElementsByTagName("tbody")[0];
   
       
        let newRow = table.insertRow(table.length);
    
        let cell1 = newRow.insertCell(0);
        cell1.innerHTML = Data.firstname;
        let cell2, cell3, cell4
        cell2 = newRow.insertCell(1)
        cell2.innerHTML = Data.lastname
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = Data.pasword;
        cell4 = newRow.insertCell(3)
        cell4.innerHTML = `<button>Edit</button>
                            <button>Delete</button>`
    

    

}