/* ==========================================================
   CONTENIDO DEL SITIO
   Este es el único archivo que tenés que editar para agregar
   proyectos y piezas. No hace falta tocar index.html.
   ========================================================== */

const SITIO = {
  nombre: "Tu nombre artístico",
  bajada: "Una o dos frases que cuenten quién sos y qué hacés.",
  email: "tu@email.com",
  instagram: "https://instagram.com/tuusuario"
};

/* ----------------------------------------------------------
   PROYECTOS
   id:  una palabra en minúsculas, sin espacios ni acentos (va en la URL)
   ---------------------------------------------------------- */
const PROYECTOS = [
  { id: "proyecto-uno", nombre: "Proyecto uno", descripcion: "Qué es este proyecto, en una frase." },
  { id: "proyecto-dos", nombre: "Proyecto dos", descripcion: "Qué es este otro proyecto, en una frase." }
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
  { proyecto: "proyecto-uno", tipo: "video",  titulo: "Título del video", anio: 2025, youtube: "ID_DEL_VIDEO" },
  { proyecto: "proyecto-uno", tipo: "musica", titulo: "Tema en Spotify", anio: 2025, spotify: "track/ID_DEL_TEMA" },
  { proyecto: "proyecto-uno", tipo: "musica", titulo: "Tema en YouTube", anio: 2024, youtube: "ID_DEL_VIDEO" },
  { proyecto: "proyecto-uno", tipo: "foto",   titulo: "Descripción de la foto", anio: 2025, archivo: "img/foto-01.jpg" },
  { proyecto: "proyecto-uno", tipo: "foto",   titulo: "Otra foto", anio: 2024, archivo: "img/foto-02.jpg" },
  { proyecto: "proyecto-uno", tipo: "texto",  titulo: "Título del texto", anio: 2024,
    descripcion: "De qué trata este texto.", archivo: "textos/texto-01.pdf" },

  // ---- Proyecto dos ----
  { proyecto: "proyecto-dos", tipo: "video",  titulo: "Otro video", anio: 2023, youtube: "ID_DEL_VIDEO" },
  { proyecto: "proyecto-dos", tipo: "musica", titulo: "Tema en Bandcamp", anio: 2023,
    embed: "https://bandcamp.com/EmbeddedPlayer/album=000000/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/", alto: 120 },
  { proyecto: "proyecto-dos", tipo: "foto",   titulo: "Foto del proyecto dos", anio: 2023, archivo: "img/foto-03.jpg" },
  { proyecto: "proyecto-dos", tipo: "texto",  titulo: "Texto para leer acá", anio: 2023,
    parrafos: ["Primer párrafo del texto.", "Segundo párrafo del texto."] }
];
