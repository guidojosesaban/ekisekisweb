// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ...otras configuraciones
  server: {
    host: true, // Esto hace que escuche en todas las IPs disponibles (0.0.0.0)
    // port: 4321 // Puedes especificar el puerto si lo deseas
  }
});