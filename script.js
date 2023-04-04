const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    if($checkbox.checked==true){
        document.getElementById("imagens").src="imagem/pa2.jfif";

    }
    else{
        document.getElementById("imagens").src="imagem/pa.png";

    }
});