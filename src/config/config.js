// config.js

import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

// Exportar las variables de entorno necesarias
export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI;
export const NEXT_PUBLIC_FETCHURL = process.env.NEXT_PUBLIC_FETCHURL;
