function Validation(){
    this.checkNull = function(input, spanId, mess){
        if(input === ""){
            getEle(spanId).innerHTML = mess;
            return false;
        }else{
            getEle(spanId).innerHTML = "";
            return true;
        }
    }
    this.checkduplicate = function(input, spanId, mess, arr){
        for(var i = 0; i < arr.length; i++){
            if(input === arr[i].taskName){
                getEle(spanId).innerHTML = mess;
                return false;
            }else{
                getEle(spanId).innerHTML = "";
                return true;
            }
        }
    }
}