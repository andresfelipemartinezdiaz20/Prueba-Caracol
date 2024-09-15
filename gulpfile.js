import gulp from 'gulp';
import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import path from 'path';
import url from 'url';

// Obtener __dirname usando import.meta.url
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de rutas
const paths = {
  styles: {
    src: 'src/styles/styles.less', // Archivos Less en la carpeta src
    dest: 'src/public/styles/'      // Carpeta de destino para el CSS compilado
  }
};

// Tarea para compilar Less
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(less({
      paths: [path.join(__dirname, 'src', 'styles')] // Ruta de archivos Less
    }))
    .pipe(cleanCSS()) // Minifica el CSS
    // .pipe(rename({ suffix: '.min' })) // Agrega '.min' al nombre del archivo
    .pipe(gulp.dest(paths.styles.dest)); // Guarda el CSS en la carpeta destino
}

// Tarea de observación
function watch() {
  gulp.watch(paths.styles.src, styles);
}

// Exportar tareas
export { styles, watch };
export default watch; // Cambiado a 'watch' como tarea predeterminada
