 // Aquí tu código

 const knopje = document.getElementById('agregar');
 const inputje = document.getElementById('inputelemento');
 const lijstje = document.getElementById('lista');


 knopje.addEventListener('click',function() {
    if(!document.getElementById('inputelementolijstje')) {
        inputje.insertAdjacentHTML('afterbegin','<input id="inputelementolijstje">');
    }
    else {
        const inputveld = document.getElementById('inputelementolijstje');
        if(inputveld && inputveld.value!=='') {
            lijstje.insertAdjacentHTML('afterbegin','<li>'+inputveld.value+'</li>');
            inputveld.value='';
        }
    }
})