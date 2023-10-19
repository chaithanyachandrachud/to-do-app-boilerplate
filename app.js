var inputdata= document.getElementById("input");
var addbutton=document.getElementById("button");
var todolist=document.getElementById("todolist");
var data=[];

addbutton.addEventListener("click" , addData);

function addData(){
    data.push(inputdata.value);
    console.log(data)

    inputdata.value=""
    toshowData();

}
function toshowData(){
    todolist.innerHTML=""
    data.forEach(function(item , index){
        console.log(item)
        todolist.innerHTML += `<li>$(item)<a onlick="edititem(${index})">edit</a> <a oncclick="deleteItems(${index})">x |</a></li>`
    })
}
function deleteItems(index){
    data.splice(index,1)
    toshowData()



}
