This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/ssr.js, ssg.js `. The page auto-updates as you edit the file.
The pager y folder is modified. added the two files `pages/ssr.js, ssg.js` , added the `data` folder

To navigate as follows [http://localhost:3000/ssr](http://localhost:3000/ssr), [http://localhost:3000/ssg](http://localhost:3000/ssg)

## ¿Cuándo debo usar SSR y cuándo debo usar SSG?

Esta es una de las preguntas más frecuentes al momento de usar Next.js (si no es que es la más frecuente). Desde mi experiencia (y siguiendo las recomendaciones del equipo de Next.js) te aconsejo siempre empezar nuestras páginas usando SSG (Static Site Generation) y solo debemos considerar el uso de SSR (Server Side Rendering) en caso que SSG no sea suficiente para lo que queramos hacer. Por ejemplo, si estamos trabajando en un dashboard, recomiendo usar SSG para renderizar parte de la interfaz, y luego cargar los datos desde el cliente.

La única situación en la que recomiendo usar SSR, es cuando necesites tener datos frescos en cada request, y que esos datos sean importantes para el SEO o Crawlers. Un buen caso para usar SSR es cuando queremos crear un sitemap. En ese caso necesitamos que los buscadores, por ejemplo Google, tengan los datos actualizados cada vez que visiten la ruta /sitemap.