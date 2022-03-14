function listaDeProductos(){
const URLJSON = "../json/productos.json";
$(".listaDeProductos").prepend('<button id="btn2" class="btn btn-outline-dark" type="button">Ver lista de productos</button>');
$("#btn2").click(() => { 
    $("#btn2").hide();
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $(".listaDeProductos").prepend(`<div>
                                <h3>${dato.nombre}</h3>
                                <p> ${dato.descripcion}</p>
                                <p> ${dato.precio}</p>
                            </div>`)
      }  
    }
    });
});
}

listaDeProductos();

