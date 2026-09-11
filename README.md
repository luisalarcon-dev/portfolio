# Luis Alarcón Dev Software — Portfolio

Portafolio de **Luis Fernando Alarcón Cáceres**, Full Stack Developer en Bolivia.
React + TypeScript + Vite + Tailwind CSS. Diseño responsive oscuro con tipografías locales, iconos Lucide y animaciones ligeras que respetan la preferencia de movimiento reducido.

## 1. Verlo en tu computadora

Requisito: Node.js 24 LTS y Git.

Abre una terminal dentro de esta carpeta `portfolio` y ejecuta:

```sh
npm install
npm run dev
```

Abre **http://localhost:5173/portfolio/** (si el puerto está ocupado, usa el enlace que aparece en la terminal). Para detenerlo, presiona Ctrl+C.

## 2. Conectarlo a GitHub y subirlo

En tu cuenta **luisalarcon-dev**, crea un repositorio público llamado **portfolio**. Déjalo vacío: sin README, licencia ni .gitignore. Luego, desde esta carpeta:

```sh
git init -b main
git add .
git commit -m "Create professional portfolio"
git remote add origin https://github.com/luisalarcon-dev/portfolio.git
git push -u origin main
```

GitHub puede pedirte iniciar sesión. Si el repositorio ya existe y tiene archivos, no fuerces el push: primero hay que integrar su contenido.

## 3. Activar GitHub Pages

En el repositorio de GitHub:

1. Abre **Settings → Pages**.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. Abre **Actions → Deploy portfolio to GitHub Pages → Run workflow → Run workflow**.
4. Espera a que termine con una marca verde.

Tu dirección será **https://luisalarcon-dev.github.io/portfolio/**.
El sitio no queda publicado por descargar este proyecto; es necesario completar estos pasos.

Cada nuevo push a `main` volverá a publicarlo automáticamente:

```sh
git add .
git commit -m "Update portfolio"
git push
```

## Verificaciones y producción

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

`dist/` contiene el sitio compilado. El workflow instala desde `package-lock.json`, ejecuta las verificaciones y publica únicamente `dist/`.

La configuración `base: '/portfolio/'` en `vite.config.ts` corresponde al repositorio solicitado. Las fuentes se alojan con el sitio; no se necesitan claves, variables de entorno, backend ni servicios de pago.

## Estructura

- `src/App.tsx`: portada y estructura principal.
- `src/components/`: navegación, secciones y tarjetas reutilizables.
- `src/data/portfolio.ts`: contacto, proyectos, tecnologías y usos de IA.
- `src/index.css`: identidad, tipografía, portada y estilos generales.
- `src/sections.css`: secciones y ajustes responsive.
- `public/favicon.svg`: monograma LA.
- `.github/workflows/deploy.yml`: publicación automática.

## Editar tu contenido

En `src/data/portfolio.ts`:

- Añade enlaces reales a `repoUrl` y `demoUrl` de Dental Clinic Website. Vacíos, se muestra un texto informativo y no un botón roto.
- EncuentraPro aparece como **Private / In Development**. Su código no se incluye.
- Para WhatsApp, añade a `profile.whatsapp` el número profesional autorizado para publicar, con código de país y solo dígitos. Mientras esté vacío, la interfaz reserva su lugar en el grupo de contacto sin mostrar un enlace.
- Actualiza tecnologías y descripciones conforme evolucione tu trabajo.

Las vistas de proyectos son composiciones ilustrativas creadas para este portafolio; no son capturas de productos terminados. Dental Clinic Website es un concepto independiente, no un cliente real. Este repositorio contiene el portafolio, no el código de esos proyectos.

## Accesibilidad y privacidad

Navegación semántica, enlace para saltar al contenido, foco visible, menú móvil con cierre por Escape y enlaces externos con protección de contexto. No contiene formularios que simulen envíos, rastreadores, métricas inventadas ni testimonios. No se han añadido fotos o marcas de terceros; el identificador visual es un monograma tipográfico LA.

## Documentación técnica oficial

- [Vite: despliegue en GitHub Pages](https://vite.dev/guide/static-deploy#github-pages)
- [Tailwind CSS con Vite](https://tailwindcss.com/docs/installation/using-vite)
- [GitHub: workflows para Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Diseño y movimiento

La segunda versión incorpora una portada con arte original, parallax con el cursor y el desplazamiento, entradas escalonadas al aparecer las secciones, indicador de lectura, navegación activa y tarjetas con inclinación suave. Los proyectos tienen detalles desplegables. El botón **Motion on / Motion off** permite pausar los efectos; también se respeta la preferencia de movimiento reducido del sistema.

La imagen principal está en `public/images/hero-ribbon.webp` (aproximadamente 100 KB). Se generó con la herramienta integrada de imágenes usando una dirección de cinta abstracta de cromo y vidrio, iluminación cyan/cobalto/violeta y fondo oscuro sin texto ni logotipos. No requiere un motor 3D ni servicios externos.
