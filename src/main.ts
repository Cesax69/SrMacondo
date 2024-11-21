/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import Mapboxgl from 'mapbox-gl';

// Configuración de Mapbox
Mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlbGVvMTgiLCJhIjoiY20xZ3FlNXdiMDZqcjJrcG93Mndub2w2eSJ9.x3BQvkHb-poOSbmNCEk4Yg';

// Verificación de geolocalización
if (!navigator.geolocation) {
  alert('Geolocation is not supported by your browser');
  throw new Error('El navegador no soporta la geolocalización');
}

// Inicialización de la aplicación
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));