// Contenido dinámico
let modal = document.getElementById('miModalEditable')

modal.addEventListener('show.bs.modal', function(event){
    // reconozco el botón que activa el evento
    let boton = event.relatedTarget
    // genero instancia para leer el atributo del botón
    console.log(boton.getAttribute('data-bs-encabezado'))
    
    document.querySelector('.modal-body').innerHTML = boton.getAttribute('data-bs-encabezado')
    //Primero seleciona el elemento a donde ira el contenido del data-bs-encabezado, osea lo reemplaza
    document.querySelector('.modal-title').textContent = boton.getAttribute('data-bs-titulo')
    //document.querySelector('.modal-header').classList.add(boton.getAttribute('data-bs-clase'))
    
    let modalHeader = document.querySelector('.modal-header')
    // basicamente le esta dando color blanco al titulo de la ventana modal 
    modalHeader.classList.add('text-white')
    
    modalHeader.classList.add(boton.getAttribute('data-bs-clase'))
})


modal.addEventListener('hide.bs.modal', function(event){
    let modalHeader = document.querySelector('.modal-header')
    if(modalHeader.classList.contains('bg-primary') || modalHeader.classList.contains('bg-danger') || modalHeader.classList.contains('bg-warning')){
        modalHeader.classList.remove('bg-primary')
        modalHeader.classList.remove('bg-danger')
        modalHeader.classList.remove('bg-warning')
    }
})

