// 1. Obtener referencias a los elementos HTML
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Función para añadir una nueva tarea
function addTask(){
    const taskText = taskInput.value.trim(); // Obtener el texto del input y quitar espacios en blanco 

    if(taskText === "" ){// Validar que el input no esté vacío 
        alert("Por favor, escribe una tarea.");
        return;  // Salir de la función si está vacío 

    }
    // 2. Crear un nuevo elemento de lista (<li>) 
    const  listItem = document.createElement('li');

    // 3. Crear un elemento <span> para el texto de la tarea 
    const  taskSpan = document.createElement('span');
    taskSpan.textContent = taskText; // Asignar el texto de la tarea al span 

    // 4. Crear un botón para eliminar la tarea 
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent ='Eliminar';

    // 5. Añadir el span y el botón al listItem 
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // 6. Añadir el listItem a la lista (<ul>)
    taskList.appendChild(listItem);

    // 7. Limpiar el input después de añadir la tarea
    taskInput.value ='';

    // 8. Añadir funcionalidad para marcar como completada 
    taskSpan.addEventListener('click',function(){
        listItem.classList.toggle('completed'); // Alternar la clase 'completed' 
    });

    // 9. Añadir funcionalidad para eliminar la tarea 
    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(listItem); // Eliminar el listItem de la lista
    });

}

    // 10. Asignar la función addTask al evento 'click' del botón 
    addTaskBtn.addEventListener('click', addTask);

    // Opcional: Permitir añadir tarea presionando Enter en el input
    taskInput.addEventListener('keyprees',function(event){
        if(event.key === 'Enter'){
            addTask();
        }
    });
