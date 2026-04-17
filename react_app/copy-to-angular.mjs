// copy-to-angular.mjs
import { cpSync, rmSync, existsSync } from 'fs';
import { resolve } from 'path';

// Ajusta esta ruta a donde está tu proyecto Angular
const ANGULAR_ASSETS = resolve('../tu-proyecto-angular/src/assets/react/build');
const REACT_DIST = resolve('./dist');

// Limpia el destino si existe
if (existsSync(ANGULAR_ASSETS)) {
  rmSync(ANGULAR_ASSETS, { recursive: true, force: true });
  console.log('🗑️  Carpeta anterior eliminada');
}

// Copia el build
cpSync(REACT_DIST, ANGULAR_ASSETS, { recursive: true });
console.log(`✅ Build copiado a: ${ANGULAR_ASSETS}`);