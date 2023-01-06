let $openBtn = document.getElementById('open-btn');
let $modalContainer = document.querySelector('.modal-container')
let $closeBtn = document.querySelector('.close-btn');

$openBtn.addEventListener('click', function(){
    console.log("funciona")
    $modalContainer.style.display = "block";
})

window.addEventListener('click', function(e){

    console.log("funciona el click");

    if(e.target === $modalContainer){
        $modalContainer.style.display = "none";
    }
})

$closeBtn.addEventListener('click', function(){    
    $modalContainer.style.display = "none";    
})



// Funciona el click en cualquier parte de la ventana pero no cambia el display a "none"