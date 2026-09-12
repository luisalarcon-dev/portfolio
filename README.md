# Luis Alarcón Dev Software — Portfolio

Portafolio bilingüe de **Luis Fernando Alarcón Cáceres**, Full Stack Developer en Bolivia.

**Sitio:** https://luisalarcon-dev.github.io/portfolio/

React + TypeScript + Vite + Tailwind CSS. Diseño oscuro, arte original optimizado, animaciones con control de pausa y un explorador de tecnologías con logotipos y navegación por teclado.

## Verlo localmente

Instala Node.js 24 LTS y Git. Dentro de esta carpeta ejecuta:

```sh
npm install
npm run dev
```

Abre http://localhost:5173/portfolio/ (o el puerto que indique la terminal).

## GitHub y publicación

El repositorio ya está conectado a https://github.com/luisalarcon-dev/portfolio y GitHub Pages está activado con **GitHub Actions**. No necesitas volver a configurarlo.

Para descargarlo en otra computadora:

```sh
git clone https://github.com/luisalarcon-dev/portfolio.git
cd portfolio
npm install
npm run dev
```

Para publicar futuros cambios desde esta carpeta:

```sh
git add .
git commit -m "Update portfolio"
git push
```

Cada push a `main` ejecuta las comprobaciones y publica automáticamente. Puedes ver el resultado en la pestaña **Actions** del repositorio. La configuración de Pages se encuentra en **Settings → Pages → Source: GitHub Actions**.

## Verificar y compilar

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

El sitio final se genera en `dist/`. Vite usa `base: '/portfolio/'`, correspondiente a la URL pública. No requiere secretos, archivos .env, backend ni servicios de pago.

## Idiomas y contacto

- El idioma inicial sigue al navegador: español o inglés. El selector **ES / EN** permite cambiarlo y recuerda la elección en ese navegador.
- Puedes compartir una versión concreta con `?lang=es` o `?lang=en`.
- WhatsApp y llamadas están configurados al número autorizado **+591 67671435 (Bolivia, Entel)**.
- Email: luisfernando.alarcon.dev@gmail.com.

## Estructura y contenido

- `src/App.tsx`: portada y estructura principal.
- `src/components/`: navegación, animaciones, proyectos, servicios y explorador de tecnologías.
- `src/data/portfolio.ts`: proyectos, tecnologías y datos de contacto.
- `src/data/spanish.ts`: traducciones de la interfaz.
- `src/LanguageProvider.tsx` y `src/i18n.ts`: selección y persistencia del idioma.
- `src/index.css`, `src/sections.css`, `src/enhancements.css`: diseño y adaptación a pantallas.
- `public/images/`: arte original en WebP, generado para este portafolio.
- `public/icons/`: selección de logotipos Devicon; atribución en `THIRD_PARTY_NOTICES.md`.
- `.github/workflows/deploy.yml`: comprobaciones y publicación.

Dental Clinic Website es un concepto independiente, no un cliente real. Añade sus enlaces reales a `repoUrl` y `demoUrl` cuando estén disponibles. EncuentraPro está marcado como privado y en desarrollo. Las vistas de ambos proyectos son composiciones conceptuales, no capturas de productos terminados. Este repositorio contiene el portafolio, no el código de esos proyectos.

## Accesibilidad y privacidad

Navegación semántica, foco visible, menú móvil con cierre por Escape, tabs con flechas/Home/End, idioma del documento actualizado y control de movimiento. Se respeta la preferencia de movimiento reducido del sistema. Fuentes e imágenes alojadas con el sitio. Sin rastreadores, testimonios ficticios ni formularios que simulen envíos.
