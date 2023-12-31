function addTask(){
     var taskInput = document.getElementById('new_task')
    var taskText = taskInput.value.trim()

    if(taskText === '') alert("write something in task")
    if(taskText !== ''){
        var taskList =document.getElementById('task_list')
        var newTask = document.createElement('li')
        newTask.textContent = taskText

        var delBtn = document.createElement('button');
        delBtn.className = 'del-tsk';
        delBtn.innerHTML = '<i class="ri-delete-bin-6-line"></i>';
        delBtn.onclick = function () {
        taskList.removeChild(newTask);
        }

        
    }
    newTask.appendChild(delBtn)
    taskList.appendChild(newTask)

    taskInput.value = ''
}