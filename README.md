# Bloomé Flores

Tienda web de **Bloomé**, una florería de flores eternas y detalles personalizados. Permite explorar arreglos, revisar la información de cada producto, armar un carrito y enviar el pedido directamente por WhatsApp.

## Características

- Catálogo de ramos y cajas personalizadas con precios.
- Filtros por colección.
- Vista detallada de cada arreglo.
- Carrito de compra con cantidades y total referencial.
- Confirmación del pedido por WhatsApp.
- Enlaces a Instagram, política de privacidad y términos y condiciones.
- Diseño adaptable para celular, tablet y escritorio.
- Vista previa al compartir el enlace y favicon personalizado.
- Vercel Web Analytics para visitas y páginas vistas.

## Tecnologías

- React 19
- TypeScript
- Vite
- CSS personalizado
- Vercel Analytics

## Ejecutar el proyecto

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

Luego abre la dirección que indique Vite en la terminal.

## Comandos disponibles

```bash
npm run dev      # inicia el entorno local
npm run build    # genera la versión de producción
npm run preview  # previsualiza el build de producción
```

## Despliegue

El proyecto está preparado para Vercel. Conecta este repositorio a un proyecto de Vercel y cada cambio enviado a la rama `main` generará un nuevo despliegue.

Para habilitar las visitas y páginas vistas, activa **Web Analytics** desde la sección Analytics del proyecto en Vercel.

## Configuración comercial

Los datos principales están centralizados en `src/pages/Home.tsx`:

- Número de WhatsApp.
- Productos, precios e imágenes.
- Cajas personalizadas.
- Cuenta de Instagram.

Antes de publicar nuevas campañas o información legal, revisa que los precios, disponibilidad, datos de contacto y textos legales estén actualizados.
