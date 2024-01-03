

//Añadimos el evento click a cada elemento del nav
var links = document.querySelectorAll(".menu .link");
links.forEach(elemento => {
  elemento.addEventListener('click', (event) => {
    marcarItem(elemento, event.target.id)
  })
})

// Función para marcar el item del nav que se clickeo
const marcarItem = (elemento, id) => {

  // Elimina la clase 'selected' de todos los elementos de la barra de navegación
  links.forEach((item) => {
    item.classList.remove("link-selected");
  });

  // Agrega la clase 'selected' al elemento clicado
  elemento.classList.add("link-selected");

  // Guardar el ítem seleccionado en localStorage
  localStorage.setItem("itemSeleccionado", id);
};

var itemSeleccionado = localStorage.getItem("itemSeleccionado");

// Aplicar el estilo al ítem seleccionado si existe en localStorage
if (itemSeleccionado) {
    var elemento = document.getElementById(itemSeleccionado);
  if (elemento) {
    marcarItem(elemento, itemSeleccionado);
  }
}
  