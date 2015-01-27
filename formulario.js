var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#publicar_nav"),
	$list = $("#contenido"),
	$post = $(".item").first(),
	$video =$("#video");


if(localStorage.getItem("autosave"))
{
	$titulo.val(sessionStorage.getItem("titulo"));
	$url.val(sessionStorage.getItem("url"));
}

var id = setInterval(function(){
	var width = window.innerWidth;
	sessionStorage.setItem("titulo", $titulo.val());
	sessionStorage.setItem("url", $url.val());
	if(width<1000){
		$video.slideUp();
	}
}, 1000)

function mostrarFormulario()
{
	var width = window.innerWidth;
	$form.slideToggle();
	$list.slideToggle();
	if(width>=1000){
		$video.slideToggle();
	}
	return false;
}

function agregarPost()
{
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find(".titulo_item a")
	.text(titulo)
	.attr("href", url);


	$clone.hide();
	$list.prepend($clone);
	$clone.slideDown();
	mostrarFormulario();
	$titulo.val("");
	$url.val("");

	return false;
}

//Eventos
$button.click( mostrarFormulario );
$form.on("submit", agregarPost);
