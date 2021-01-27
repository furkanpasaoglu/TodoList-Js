const firstcardBody = document.querySelectorAll(".card-body")[0];
const twocardBody = document.querySelectorAll(".card-body")[1];
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const filterInput = document.querySelector("#filter");
const listGroup = document.querySelector(".list-group");
const allRemoveTodo = document.querySelector("#clear-todos");

Listener();

function Listener(){
    form.addEventListener("submit",addTodo);
    twocardBody.addEventListener("click",deleteTodo);
    allRemoveTodo.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e) {
    if(listGroup.firstElementChild != null){
        if (confirm("Tümünü Silmek İstediğinize Emin misiniz ?")){
            while (listGroup.firstElementChild != null) {
                listGroup.removeChild(listGroup.firstElementChild);
            }
            showAlert("success","Bütün Liste Başarıyla Silindi.");
        }
    }else{
        showAlert("warning","Şuan Todo Listesi Boş Gözüküyor");
    }
}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove"){
        if(confirm("Silmek İstiyormusunuz?")){
            e.target.parentElement.parentElement.remove();
            showAlert("success", e.target.parentElement.parentElement.textContent+" Todo Başarıyla Silindi.");
        }
    }
}

function addTodo(e) {
    const textValue = todoInput.value.trim();
    if(textValue === ""){
        showAlert("danger","Boş Alan Girdiniz");
    }
    else{
        addedTodo(textValue);
    }
    e.preventDefault();
}

function addedTodo(textValue) {
    const liCreate = document.createElement("li");
    const aCreate = document.createElement("a");
    aCreate.href = "#";
    aCreate.className ="delete-item";
    aCreate.innerHTML =  `<i class = "fa fa-remove"></i>`;
    liCreate.className = "list-group-item d-flex justify-content-between";
    liCreate.appendChild(document.createTextNode(textValue));
    liCreate.appendChild(aCreate);
    listGroup.appendChild(liCreate);
    todoInput.value = "";
}

function showAlert(type,message) {
    const divCreate = document.createElement("div");
    divCreate.className = `alert alert-${type}`;
    divCreate.textContent = message;
    firstcardBody.appendChild(divCreate);
    setTimeout(() => {
        divCreate.remove();
    }, 1000);
}