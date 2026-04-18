import { cpSync, rmSync, existsSync } from 'fs';
import { resolve } from 'path';

const ANGULAR_ASSETS = resolve('../angular_app/src/assets/react/build');
const REACT_DIST = resolve('./dist');

if (existsSync(ANGULAR_ASSETS)) {
  rmSync(ANGULAR_ASSETS, { recursive: true, force: true });
  console.log('Carpeta anterior eliminada');
}

cpSync(REACT_DIST, ANGULAR_ASSETS, { recursive: true });
console.log('Build copiado a: ' + ANGULAR_ASSETS);
