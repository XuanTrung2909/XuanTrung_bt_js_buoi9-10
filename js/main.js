var taskList = new ToDoList();

var valid = new Validation();

getLocalStorage();

function layTongTinTask() {

    

    var id = Math.floor(Math.random() * 100) + 1;
    var taskName = getEle("newTask").value;
    var status = -1;

    var isValid = true;

    isValid = valid.checkNull(taskName, "spanAlert", "(*) Phải Nhập TaskName") && valid.checkDuplicate(taskName, "spanAlert", "(*) TaskName bị trùng", taskList.arr);
    

    if(isValid){
        var task = new ToDo(id, taskName, status);
        return task;
    }
}

getEle("addItem").addEventListener("click", function () {

    var task = layTongTinTask();

    if(task){
        taskList.addTask(task);

        creatTable(taskList.arr);

        setLocalStorage();

        alert("Add Task Success");

        getEle("newTask").value = "";
    }

    
})

function creatTable(arr) {
    var contentToDo = "";
    var contentComplete = "";
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].status == -1){
            contentToDo += `
                <li>
                    <span>${arr[i].taskName}</span>
                    <div>
                        <button style="border:none" onclick="deleteTask(${arr[i].id})">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button style="border:none" onclick = "changeStatusTask(${arr[i].id})">
                            <i class="far fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `
        }else{
            contentComplete += `
                <li>
                    <span style="color:green">${arr[i].taskName}</span>
                    <div>
                        <button style="border:none; color:green" onclick="deleteTask(${arr[i].id})">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button style="border:none; color:green">
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `
        }

    }
    getEle("todo").innerHTML = contentToDo;
    getEle("completed").innerHTML = contentComplete;
}

function deleteTask(id){
    taskList.deleteTask(id);
    setLocalStorage();
    creatTable(taskList.arr);
    alert("Delete Task Success")
}

function changeStatusTask(id){
    var taskUpdate = taskList.getTaskById(id);

    taskUpdate.status = 1;
    taskList.updatTask(taskUpdate);
    setLocalStorage();

    creatTable(taskList.arr)

    alert("change Satus Task Success")
    
}

getEle("txtSearch").addEventListener("keyup", function(){
    var keyword = getEle("txtSearch").value;
    var searchArr = taskList.searchTask(keyword);
    creatTable(searchArr);
})

function setLocalStorage() {
    var stringArr = JSON.stringify(taskList.arr);
    localStorage.setItem("TASKLIST", stringArr);
}

function getLocalStorage() {
    if (localStorage.getItem("TASKLIST")) {
        taskList.arr = JSON.parse(localStorage.getItem("TASKLIST"));
        creatTable(taskList.arr);
    }
}

function getEle(id) {
    return document.getElementById(id);
}