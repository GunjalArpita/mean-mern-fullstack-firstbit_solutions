//alert is used for showing alerts

function showalert(){
    alert ('Welcome to js');
}
//confirm is boolean type.
function showconfirm (){
    var ch = confirm("Do you want to delete the record");
    if (ch==true){
        console.log("record deleted");
    }
    else{
        console.log("record not deleted");
    }
}

//prompt is use for user input
function showprompt(){
    var n=prompt("enter your name:");
    if(n!=null)
        {
            console.log(n);
        }

}