const fs = require("node:fs");
const path = require("node:path");

// 1. Recibir argumento opcional desde process.argv
const estudiante = process.argv[2] ?? "Estudiante Anónimo";

// 2. Representar los datos del videojuego
const videojuego = {
  titulo: "Hollow Knight",
  estudio: "Team Cherry",
  anio: 2017,
  plataformas: ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
  multijugador: false,
};

// 3. Transformaciones de datos
const plataformasComoTexto = videojuego.plataformas.join(", ");
const esMultijugador = videojuego.multijugador ? "Sí" : "No";

// 4. Construir la ficha con Template Literals
const ficha = `====================================
        FICHA DE VIDEOJUEGO
====================================
Estudiante: ${estudiante}
Versión de Node.js: ${process.version}
Plataforma del sistema: ${process.platform}
------------------------------------
Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año de Lanzamiento: ${videojuego.anio}
Plataformas: ${plataformasComoTexto}
Multijugador: ${esMultijugador}
====================================`;

// 5. Preparar rutas y crear archivos/carpetas
const carpetaSalida = path.join(__dirname, "salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");

fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

// 6. Mostrar por pantalla
console.log(ficha);
console.log(`\nArchivo generado con éxito en: ${rutaArchivo}`);