const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    if($checkbox.checked==true){
        document.getElementById("imagem").src="imagem/pa2.jfif";

    }
    else{
        document.getElementById("imagem") .src="imagem/pa.png";

    }
});