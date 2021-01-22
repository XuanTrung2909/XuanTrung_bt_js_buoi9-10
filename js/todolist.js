function ToDoList(){
    this.arr = [];

    this.addTask = function(task){
        this.arr.push(task)
    }
    this.findIndexById = function(id){
        var viTri = -1;
        for(var i = 0; i < this.arr.length; i++){
            if(id == this.arr[i].id){
                viTri = i;
                break;
            }
        }
        return viTri;
    }
    this.deleteTask = function(id){
        var viTri = this.findIndexById(id);
        if(viTri !== -1){
            this.arr.splice(viTri, 1);
        }
    }
    this.getTaskById = function(id){
        var viTri = this.findIndexById(id);
        if(viTri !== -1){
            // this.arr[viTri].status = 1;
            return this.arr[viTri];
        }
    }
    this.updatTask = function(task){
        var viTri = this.findIndexById(task.id);
        if(viTri !== -1){
            this.arr[viTri] = task;
        }
    }
    this.searchTask = function(keyword){
        var searchArr = [];
        for(var i=0; i < this.arr.length; i++){
            if(this.arr[i].taskName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
                searchArr.push(this.arr[i]);
            }
        }
        return searchArr;
    }
}