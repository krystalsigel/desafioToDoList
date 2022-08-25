let tasks = [
    {
        getId:1,
        description:'Have breakfast',
        completed:false},
    {
        getId:2,
        description:'Tai Chi',
        completed:false},
    {
        getId:3,
        description:'Write the current book',
        completed:false}
];

function addSth(){
    const dataTask = document.querySelector('#newTask');
    if(dataTask.value === ''){
        alert('Please add a new task')
        return
    }
    
    const assignId = tasks[tasks.length - 1]
    newId = assignId.getId + 1
    let object = {
                   getId:newId,
                   description:dataTask.value,
                   completed:false
                 }
    tasks.push(object)
    assemble()
    showInfo()
    counting()
    dataTask.value = ''
}
function assemble(){
    let insertHtml = ''
    let updateTask = document.getElementById('taskSheet')
    tasks.forEach(function(value){
        insertHtml += `<div class="row">
                        <div class="col">${value.getId}</div>
                        <div class="col">${value.description}</div>
                        <div class="col"><input type="checkbox" id="checkIt${value.getId}" onclick="modifyTask(${value.getId})"></div>
                        <div class="col cursor"><i class="fa-solid fa-trash-can" onclick="deleteTask(${value.getId})"></i></div>
                    </div>` 
    })
    updateTask.innerHTML = insertHtml
}
function showInfo(){
    const showTotal = document.getElementById('totalNum').innerHTML = tasks.length
    return showTotal
}
function counting(){
    const done = tasks.filter( tasks => tasks.completed == true )
    document.getElementById('doneNum').innerHTML = done.length
}
function deleteTask(id){    
    const del = tasks.findIndex((ele) => ele.getId == id) 
    tasks.splice(del, 1) 
    assemble()
    showInfo()
    counting()    
}
function modifyTask(id){
    if(document.getElementById('checkIt' + id).checked === true){
        const changeIt = tasks.forEach(newObj => {
            if (newObj.getId === id) {
                newObj.completed = true
            }
            return newObj;
          });
    }else{
        const changeIt = tasks.forEach(newObj => {
            if (newObj.getId === id) {
                newObj.completed = false
            }
            return newObj;
          });

    }
    counting()        
}
assemble()
showInfo()