# Proyecto de Chat con GPT-3.5

Este proyecto es el resultado de un desafío que involucró la integración de la API de OpenAI para utilizar la versión 3.5 de ChatGPT en una aplicación web. Permite a los usuarios interactuar con un modelo de lenguaje avanzado para mantener conversaciones naturales y dinámicas.

## Tecnologías Utilizadas

- **Next.js 14**: Framework de React para aplicaciones web modernas.
- **Chakra UI**: Biblioteca de componentes de interfaz de usuario para React.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar conversaciones y datos de usuario.
- **JavaScript**: Lenguaje de programación principal utilizado en el desarrollo del proyecto.

## Funcionalidades Principales


- **Integración con OpenAI**: Accede a la API de OpenAI para utilizar la versión 3.5 de ChatGPT y permitir conversaciones con inteligencia artificial.
- **Persistencia de Conversaciones**: Utiliza MongoDB para almacenar conversaciones de usuario y permitir que los usuarios retomen sus conversaciones anteriores.
- **Interfaz de Usuario Responsiva**: Diseño moderno y receptivo utilizando Chakra UI para una experiencia de usuario óptima en diferentes dispositivos.


## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto ejecutando `npm install`.
3. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:


// DB Configuration
DB_URL= Aqui deberian ingresar la URL para conectar su propio mongo compass


// Chat gpt parameters
GPT_API_KEY= Aqui deberian colocar su propia API KEY de OpenAi
GPT_ORGANIZATION= Aqui deberian colocar su propia organizacion de OpenAi


// Authentication secrets
JWT_SECRET="Agueda" (puedes cambiarlo por la palabra secreta que desees)
JWT_EXPIRATION=1h (puedes cambiarlo por el tiempo que desees)

// Server port
SERVER_PORT=3001

// Url Front
NEXT_PUBLIC_FETCHURL= Aqui deberian colocar tu direccion local para enviar las consultas al back

// CORS
CORS=http://localhost:3000

4. Ejecuta el proyecto localmente con `npm run dev` para el frontend y `npm start` para el backend.

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, asegúrate de seguir las pautas de contribución y enviar tus solicitudes de extracción.

## Contacto

Para cualquier pregunta o sugerencia, no dudes en ponerte en contacto conmigo a través de mi correo electrónico jose_moya@live.com.ar.

## Proyecciones:

Proximos pasos para mejorar la app:

1. Dockerizarla
2. Modificar el comportamiento para aprovechar las bondades de la SDK de vercel
3. Deploy!

## Muchas gracias!!!!
