/* ==========================================================
   CONTENIDO DEL SITIO
   Este es el único archivo que tenés que editar para agregar
   proyectos y piezas. No hace falta tocar index.html.
   ========================================================== */

const SITIO = {
  nombre: "VaTó Artística Colectiva",
  bajada: "Una forma de hacer arte en comunidad en tiempos de exaltación de lo individual.",
  imagenPortada: "img/LogoRojo0.png",
  altPortada: "Descripción de la imagen para accesibilidad",  
  email: "vato.artistica.colectiva@gmail.com",
  instagram: "https://instagram.com/vato.artistica.colectiva",
  imagenFondo: "img/LogoVatoNegro.svg",
  velo: 50
};

/* ----------------------------------------------------------
   PROYECTOS
   id:  una palabra en minúsculas, sin espacios ni acentos (va en la URL)
   ---------------------------------------------------------- */
const PROYECTOS = [
  { id: "theravennas",
    nombre: "The Ravennas",
    descripcion: "Banda de rock?",
    imagen: "img/TheRavennas/TheRavennas.png"},
  { id: "maquinas",
    nombre: "Máquinas de Emoción Perpetua",
    descripcion: "Qué es este otro proyecto, en una frase." }
];

/* ----------------------------------------------------------
   PIEZAS
   Cada pieza lleva: proyecto (el id de arriba), tipo y titulo.
   "anio" es opcional y sirve para ordenar (las más nuevas primero).

   tipo: "video"
     youtube: "ID"     → de youtube.com/watch?v=ID

   tipo: "musica"   (elegí UNA de estas tres formas)
     youtube: "ID"
     spotify: "track/ID"   (también "album/ID" o "playlist/ID")
     embed:   "https://..." (src del iframe de Bandcamp, SoundCloud u otro)
              alto: 120      (opcional, altura en px del reproductor)

   tipo: "foto"
     archivo: "img/nombre.jpg"

   tipo: "texto"
     archivo: "textos/nombre.pdf"      (para descargar)
     descripcion: "..."                (opcional)
     parrafos: ["...", "..."]          (opcional, para leerlo dentro de la web)
   ---------------------------------------------------------- */
const ITEMS = [
  // ---- Proyecto uno ----
  { proyecto: "theravennas", tipo: "video",  titulo: "Título del video", anio: 2025, youtube: "lpFNldZWI6Y" },
  { proyecto: "theravennas", tipo: "musica", titulo: "Tema en Spotify", anio: 2025, spotify: "track/3Bq8ofXsAxoSppHT2c8Tjz" },
  { proyecto: "theravennas", tipo: "musica", titulo: "Tema en YouTube", anio: 2024, youtube: "UxzvG8mewkc" },
  { proyecto: "theravennas", tipo: "foto",   titulo: "Descripción de la foto", anio: 2025, archivo: "img/TheRavennas/img1.jpg" },
  { proyecto: "theravennas", tipo: "texto",  titulo: "Título del texto", anio: 2024,
    descripcion: "De qué trata este texto.", archivo: "textos/test.pdf" },

  // ---- Proyecto dos ----
  { proyecto: "proyecto-dos", tipo: "video",  titulo: "Otro video", anio: 2023, youtube: "ID_DEL_VIDEO" },
  { proyecto: "proyecto-dos", tipo: "musica", titulo: "Tema en Bandcamp", anio: 2023,
    embed: "https://bandcamp.com/EmbeddedPlayer/album=000000/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/", alto: 120 },
  { proyecto: "proyecto-dos", tipo: "foto",   titulo: "Foto del proyecto dos", anio: 2023, archivo: "img/foto-03.jpg" },
  { proyecto: "proyecto-dos", tipo: "texto",  titulo: "Texto para leer acá", anio: 2023,
    parrafos: ["Primer párrafo del texto.", "Segundo párrafo del texto."] }
];
