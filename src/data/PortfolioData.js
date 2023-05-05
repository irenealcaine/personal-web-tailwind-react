import amigaria from "../images/amigaria.png";
// import apv from "../images/apv.png";
import todolistapp from "../images/todolistapp.png";
import weatherApp from "../images/weatherApp.png";
import crypto from "../images/crypto.png";
import spotyclon from "../images/spotyclon.png";
import netfliclon from "../images/netfliclon.png";
import minimal from "../images/minimal.png";
import mascotas from "../images/mascotas.png";

import amigariafav from "../images/amigariafav.svg";
// import apvfav from "../images/APVfav2.png";
import todofav from "../images/todofav2.png";
import sunfav from "../images/sunfav2.png";
import coinfav from "../images/coinfav2.png";
import melodyfav from "../images/melodyfav2.png";
import netfliclonfav from "../images/netfliclonfav.jpg";
import IAfav from "../images/IAfav.png";
import mascotasfav from "../images/mascotasfav.png";

import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import vue from "../images/vue.png";
// import mongo from "../images/mongo.svg";
// import nodejs from "../images/nodejs.png";
// import express from "../images/express.png";
import sass from "../images/sass.png";
import js from "../images/js.png";
import mui from "../images/mui.png";
import firebase from "../images/firebase.png";

export const portfolioData = [
  {
    id: 10,
    url: "https://www.canguromascotas.com",
    github: "https://github.com/irenealcaine/cangurodemascotas",
    img: mascotas,
    favicon: mascotasfav,
    title: "Canguro de mascotas",
    icons: [react, tailwind],
    description: "Web de guarderia y paseos de mascotas",
    longDescription:
      "Web que ofrece servicios de canguro de mascotas en Llíria, Valencia, donde se ofrence información sobre los diferentes servicios para perros. Se muestran opiniones de clientes satisfechos y una galería de fotos de los perros alojados, así como datos de contacto.",
  },
  {
    id: 20,
    url: "https://app.amigaria.com/login",
    github: "https://github.com/AmigariaWeb/web-app",
    img: amigaria,
    favicon: amigariafav,
    title: "Amigaria",
    icons: [vue, sass, firebase],
    description: "Web 100% accesible de integración social",
    longDescription:
      "Web de integración social 100% accesible y para todos los públicos. Red social donde colgar en forma de ticket tus peticiones de ayuda, que cuando otro usuario acepta, ésta se elimina del tablón para el resto de usuarios. Cada ticket consta de un título, una breve descripción, fecha, categoría y autor. Hay una sección personal donde aparecen tus tickets, los cuales se pueden editar o borrar y los de otros usuarios que tu hayas aceptado.",
  },
  {
    id: 30,
    url: "https://magenta-halva-e5d59d.netlify.app/",
    github: "https://github.com/irenealcaine/netfliclon",
    img: netfliclon,
    favicon: netfliclonfav,
    title: "Netfliclon",
    icons: [react, tailwind, firebase],
    description: "Clon de Netflix",
    longDescription:
      "Web que imita la de Netflix usando la API de TMDB. En la página principal se pueden ver los detalles de una de las películas de moda, así como listas de las novedades, las películas populares, las pelísulas en tendencia, las mejor valoradas y documentales. Cada película tiene su propia página con informacion de la película, como una descripción, la fecha de estreno, la duración y la nota. También se muestran los actores que participan y películas similares. Cada actor tiene también su propia página donde se muestra la fecha de nacimiento y la de fallecimiento si la hubiera, lugar de nacimiento, descripción de su carrera y sus participaciones en películas.",
  },
  {
    id: 40,
    url: "https://majestic-macaron-741bec.netlify.app/",
    github: "https://github.com/irenealcaine/spotyclon",
    img: spotyclon,
    favicon: melodyfav,
    title: "Spoticlon",
    icons: [react, tailwind],
    description: "Clon de Spotify",
    longDescription:
      "Web que imita la página de Spotify antigua, usando la API de Shazam, incluso se pueden escuchar las canciones. En la página principal se ven las canciones populares del momento a nivel mundial ordenadas por categoría, también se puede acceder mediante el menú a las canciones populares de tu zona, los artistas y los discos populares.",
  },
  // {
  //   id: 50,
  //   url: "https://golden-melba-970593.netlify.app",
  //   github: "https://github.com/irenealcaine/APV_MERN_frontend",
  //   img: apv,
  //   favicon: apvfav,
  //   title: "APV",
  //   icons: [mongo, express, react, nodejs],
  //   description: "Administración de pacientes de veterinaria",
  //   longDescription:
  //     "Web de administración de pacientes de veterinaria. Se puede ingresar en una cuenta existente, crear una si aún no se tiene o recuperar la contraseña si se ha perdido. Una vez habiendo ingresado en la cuenta se pueden agregar pacientes con sus datos y una vez agregados se pueden editar o borrar los datos.",
  // },
  {
    id: 60,
    url: "https://prismatic-chaja-00b433.netlify.app",
    github: "https://github.com/irenealcaine/weather-API",
    img: weatherApp,
    favicon: sunfav,
    title: "Weather app",
    icons: [js, tailwind],
    description: "App de previsión del tiempo",
    longDescription:
      "Web de pronóstico del tiempo que proporciona información detallada sobre el clima actual y los pronósticos para los próximos días utilizando la API de Openweathermap. Con detección automática de ubicación, muestra la fecha y hora actual, así como la temperatura, humedad y velocidad del viento. Además, muestra una gráfica de las próximas 12 horas con la temperatura y probabilidad de lluvia, y una vista de siete días con información sobre la temperatura, humedad, velocidad del viento y probabilidad de lluvia para cada día.",
  },
  {
    id: 70,
    url: "https://melodic-pony-2cdb8b.netlify.app",
    github: "https://github.com/irenealcaine/todo-vue",
    img: todolistapp,
    favicon: todofav,
    title: "ToDo list",
    icons: [vue, tailwind],
    description: "App de lista de tareas pendientes",
    longDescription:
      "Web de lista de tareas pendientes, cada tarea está asignada a una categoría (trabajo o personal) y se muestran con colores diferentes. Cada tarea se puede editar, marcar como realizada o borrar. Los datos se almacenan en localStorage.",
  },
  {
    id: 80,
    url: "https://deft-moonbeam-671bbb.netlify.app",
    github: "https://github.com/irenealcaine/cryptotracker",
    img: crypto,
    favicon: coinfav,
    title: "Cryptotracker",
    icons: [react, mui],
    description: "Seguimiento de criptomonedas",
    longDescription:
      "Información actualizada de las criptomonedas más populares utilizando la API de coingecko. Precios y gráficas de variación de precios del último año de 100 criptomonedas, así como el precio y market cap en tiempo real, tanto en euros como en dólares.",
  },
  {
    id: 90,
    url: "https://tiny-basbousa-a815bc.netlify.app",
    github: "https://github.com/irenealcaine/portfolio-minimalist",
    img: minimal,
    favicon: IAfav,
    title: "Porfolio",
    icons: [js],
    description: "Porfolio minimalista de proyectos de Irene Alcaine",
    longDescription:
      "Porfolio de diseño simplificado con enlaces a mis proyectos, modo noche y día y datos de contacto",
  },
];
