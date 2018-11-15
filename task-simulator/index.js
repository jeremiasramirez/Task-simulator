
/*
let padr = document.createElement("div")
    padr.setAttribute("class", "container")

let title = document.createElement("h1")
    title.setAttribute("class", "card__title")  
    title.textContent = "hola soy un title"

let task = document.createElement("li")
    task.setAttribute("class", "card__li")  
    task.textContent = "hola soy una tarea"

    document.body.appendChild(padr)
    padr.appendChild(title)
    padr.appendChild(task)
*/

    // class Tareas{
    //  constructor(task){
    //      this.task = task;
    //  }
    //  createTask(){

    //  }
    // }    


    const inp = document.getElementById("write__task")
    const cont = document.getElementById("container")
    document.getElementById("push__create").addEventListener("click",function(){



let card= document.createElement("div");
    card.setAttribute("class", "container");
    card.setAttribute("id", "containers");



let task = document.createElement("li");
        task.setAttribute("class","li")
         task.textContent= inp.value;


         card.appendChild(task)


         if(inp.value != ''){
            cont.appendChild(card)
         }
    })



    addEventListener("dblclick",
        function(e){
            if(confirm("¿Quieres eliminar esta tarea?")  === true){
                cont.removeChild(e.target)
            }
            else{
                return
            }

            
    },false)




















