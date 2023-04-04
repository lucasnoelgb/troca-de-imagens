const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    if($checkbox.checked==true){
        document.getElementById("imagens").src="img/pa2.jfif";

    }
    else{
        document.getElementById("imagens").src="img/pa.png";

    }
});