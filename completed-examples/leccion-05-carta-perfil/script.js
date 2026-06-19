
============================================================
 ===== 3) JAVASCRIPT  (va en el panel JS de JSFiddle) =====
============================================================
 
/* Esto es la "magia" extra: al hacer clic, cambiamos los colores al azar
   Y ademas hacemos saltar la carta para que se sienta viva.
   No te preocupes por entender todo a fondo: es solo para que veas lo que viene
   despues de HTML y CSS. */
 
// Esta es nuestra lista de degradados de color. Puedes agregar los que quieras.
const temas = [
  "linear-gradient(135deg, #7b2ff7, #2f80ed)",  // morado -> azul
  "linear-gradient(135deg, #ff7b00, #ff007b)",  // naranja -> rosa
  "linear-gradient(135deg, #11998e, #38ef7d)",  // verde
  "linear-gradient(135deg, #fc5c7d, #6a82fb)"   // rosa -> azul
];
 
// Esta funcion se ejecuta cada vez que alguien hace clic en el boton.
function cambiarLook() {
  // 1) Elegimos un color al azar de la lista
  const azar = temas[Math.floor(Math.random() * temas.length)];
  document.body.style.background = azar;                   // pintamos el fondo
  document.querySelector(".avatar").style.background = azar;  // y tambien el avatar
 
  // 2) Hacemos saltar la carta
  const carta = document.querySelector(".carta");
  carta.classList.add("animar");                            // activamos la animacion
  setTimeout(() => carta.classList.remove("animar"), 400);  // la quitamos para poder repetirla
}
 
 
============================================================
 IDEAS PARA HACERLO TUYO (opcional, para mostrar al final):
 - Cambia el emoji del avatar por el tuyo, o usa una foto:
     <img src="URL-DE-TU-FOTO" alt="mi foto" width="110">
 - Agrega mas colores a la lista "temas" en el JavaScript.
 - Agrega mas cosas a la lista "gustos".
 - Cambia el texto del nivel y de la bio para que hablen de ti.
============================================================
