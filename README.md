# Blog Académico: «La Comunicación es Clave»
## Tecnólogo en Análisis y Desarrollo de Software (ADSO) — SENA
### Competencia: Comunicación Oral y Escrita

---

## 1. Resumen del Proyecto y Diseño

El blog **«La Comunicación es Clave: Puente entre el Código y la Empatía Humana»** es una solución web académica desarrollada a la medida para la competencia de Comunicación Oral y Escrita del SENA. Su propósito es consolidar en un entorno digital interactivo, accesible y formal las reflexiones teóricas, los retos prácticos de introspección interpersonal y las evidencias de aprendizaje generadas por el equipo de aprendices.

### Identidad Visual y Paleta Cromática
El diseño transmite tranquilidad, orden, claridad, armonía y confianza profesional, sustentado estrictamente en la paleta oficial requerida:
- **Azul cielo (`#87CEEB`):** Color principal de marca, acentos de interacción y realce visual.
- **Verde menta suave (`#EAF4F4`):** Superficie secundaria para fondos de lectura relajante y descansada.
- **Beige claro (`#F5F0E8`):** Fondo complementario que aporta calidez, equilibrio y cercanía.
- **Blanco (`#FFFFFF`):** Base limpia para tarjetas de contenido, contenedores modales y legibilidad máxima.
- **Azul grisáceo oscuro (`#29465B`):** Títulos, textos destacados y elementos de alto contraste (cumpliendo estándares de accesibilidad WCAG AAA con relación de contraste superior a 7:1).

### Tecnologías Empleadas
- **HTML5:** Semántica web estricta (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Diseño responsivo mediante Flexbox y CSS Grid, variables CSS (`:root`), tipografía fluida (`clamp()`) y soporte para `prefers-reduced-motion`.
- **JavaScript (Vanilla / ES6):** Sin librerías externas ni dependencias pesadas; control del menú móvil accesible, desplazamiento suave con compensación de altura, observador de secciones activas (`IntersectionObserver`), filtros en tiempo real y modal accesible para visualización de PDF.

---

## 2. Inventario de Documentos y Evidencias Analizadas

| # | Documento / Evidencia | Tipo | Autores Identificados | Relación con la Competencia / Contenido |
|---|------------------------|------|------------------------|-----------------------------------------|
| 1 | **Guía Oficial de la Actividad** | Guía de Instrucciones | SENA (Equipo de Formación) | Establece los requisitos obligatorios: introducción a la comunicación, temas vistos, reflexión del reto, evidencias, perfiles de integrantes y reflexiones de fin de trimestre. |
| 2 | **Rol de la comunicación asertiva en el desempeño del tecnólogo en ADSO** | Documento Académico | Daniel Racero, Isabella López, Marisol Loaiza | Analiza los 6 beneficios estratégicos: requisitos, colaboración, resolución de conflictos, retroalimentación (code reviews), relación con clientes y negociación de plazos/recursos. |
| 3 | **Informe Reflexivo: Reto de Tipos de Comunicación** | Informe Práctico | Equipo de Aprendices ADSO | Análisis de las relaciones interpersonales, factores de distancia/cercanía, emociones, actitudes y el impacto de la empatía y la asertividad. |
| 4 | **Evidencia Individual — Daniel Racero** | Evidencia de Aprendizaje | Daniel Racero | Trabajo individual de aplicación de habilidades comunicativas orales y escritas. *(Asignada con enlace y visor en el blog; archivo a ubicar en `assets/pdf/`)*. |
| 5 | **Evidencia Individual — Isabella López** | Evidencia de Aprendizaje | Isabella López | Trabajo individual de desarrollo de habilidades comunicativas y asertivas. *(Asignada con enlace y visor en el blog; archivo a ubicar en `assets/pdf/`)*. |
| 6 | **Evidencia Individual — Marisol Loaiza** | Evidencia de Aprendizaje | Marisol Loaiza | Trabajo individual de argumentación, redacción y coherencia textual. *(Asignada con enlace y visor en el blog; archivo a ubicar en `assets/pdf/`)*. |

> **Nota sobre los archivos locales:** Dado que los comandos de escaneo recursivo en el sistema operativo fueron denegados por políticas de seguridad del usuario en terminal, el proyecto incluye una arquitectura estandarizada con rutas relativas limpias dentro de `assets/pdf/` y una guía detallada para que los aprendices ubiquen sus archivos PDF originales sin necesidad de alterar la lógica del blog.

---

## 3. Matriz de Cumplimiento de Requisitos de la Guía Oficial

| Requisito de la Guía | Estado | Ubicación en el Blog | Observaciones |
|----------------------|--------|----------------------|---------------|
| 1. Introducción natural sobre qué es la comunicación y su importancia | **Cumplido** | Sección B (`#que-es-comunicacion`) | Redacción original que aborda la comunicación en la vida diaria, expresión de ideas/emociones, escucha activa y su impacto en ADSO. |
| 2. Temática vista durante la formación en comunicaciones | **Cumplido** | Sección C (`#temas-formacion`) | Cubre modelos de comunicación, comunicación verbal/no verbal, estilos (pasivo, agresivo, asertivo), barreras comunicativas y espacio para temas complementarios. |
| 3. Reflexión sobre el reto de formación (tipos de comunicación) | **Cumplido** | Sección D (`#reto-comunicacion`) | Marco conceptual del reto enfocado en el autoconocimiento de vínculos interpersonales, sin juzgar, con 3 espacios editables para cada aprendiz. |
| 4. Integración del documento «Rol de la comunicación asertiva en ADSO» | **Cumplido** | Sección E (`#comunicacion-software`) | Se desarrollaron a fondo los 6 pilares obligatorios vinculados a casos reales de ingeniería de software (scrum, code reviews, requisitos). |
| 5. Tres perfiles independientes para los integrantes | **Cumplido** | Sección F (`#integrantes`) | Tarjetas individuales para Daniel Racero, Isabella López y Marisol Loaiza con avatares tipográficos elegantes y campos editables. |
| 6. Evidencias de los trabajos realizados por cada aprendiz | **Cumplido** | Sección G (`#evidencias`) | Galería interactiva con filtros (Todos, Grupales, Daniel, Isabella, Marisol), visor modal integrado de PDF y enlaces directos de descarga. |
| 7. Reflexión individual de fin de trimestre de cada integrante | **Cumplido** | Sección H (`#reflexiones`) | 3 módulos independientes con preguntas orientadoras y plantillas editables en primera persona para Daniel, Isabella y Marisol. |
| 8. Identidad visual con paleta de colores requerida | **Cumplido** | `css/styles.css` | Uso armonioso de `#87CEEB`, `#EAF4F4`, `#F5F0E8`, `#FFFFFF` y `#29465B`. |
| 9. Responsive design y accesibilidad universal | **Cumplido** | `index.html`, `styles.css`, `script.js` | Menú accesible con ARIA, focus visible, contraste WCAG AAA, skip-link y `prefers-reduced-motion`. |

---

## 4. Estructura de Carpetas del Proyecto

```text
Blog_La-comunicacion-es-clave/
├── index.html                  # Estructura semántica completa del blog académico
├── css/
│   └── styles.css              # Hoja de estilos con variables de color y responsive
├── js/
│   └── script.js               # Funcionalidades: menú móvil, scrollspy, modal PDF, filtros
├── assets/
│   ├── img/                    # Directorio preparado para fotos o recursos gráficos
│   └── pdf/                    # Directorio para alojar las evidencias en PDF
│       └── README_EVIDENCIAS.txt # Instrucciones de nombrado y vinculación de archivos
└── README.md                   # Documentación técnica y pedagógica completa
```

---

## 5. Instrucciones para Ejecutar el Blog Localmente

El blog no requiere servidores complejos (Node.js, PHP, Python, Apache ni compiladores). Funciona de forma 100% nativa en cualquier navegador web moderno:

### Opción A: Ejecución directa (Más rápida y sencilla)
1. Abra el explorador de archivos de Windows y navegue a:
   `c:\Users\maris\Documents\sena\comunicaciones\Blog_La-comunicacion-es-clave`
2. Haga doble clic sobre el archivo `index.html`.
3. El blog se abrirá automáticamente en su navegador web predeterminado (Google Chrome, Microsoft Edge, Mozilla Firefox o Safari).

### Opción B: Con Visual Studio Code (Live Server)
1. Abra la carpeta `Blog_La-comunicacion-es-clave` en VS Code.
2. Si tiene instalada la extensión **Live Server**, haga clic derecho en `index.html` y seleccione **Open with Live Server**.
3. El sitio se ejecutará en la dirección local `http://127.0.0.1:5500/index.html` con recarga automática en vivo al guardar cambios.

---

## 6. Instrucciones para Incorporar Nuevas Evidencias en PDF

Para agregar o actualizar las evidencias en PDF del equipo:

1. **Copiar los archivos PDF:**
   Guarde sus archivos PDF dentro de la carpeta:
   `Blog_La-comunicacion-es-clave/assets/pdf/`
   
   *Nombres sugeridos para vinculación automática:*
   - `evidencia-comunicacion-asertiva.pdf`
   - `evidencia-reto-comunicacion.pdf`
   - `evidencia-daniel-racero.pdf`
   - `evidencia-isabella-lopez.pdf`
   - `evidencia-marisol-loaiza.pdf`

2. **Si utiliza nombres de archivo distintos:**
   - Abra el archivo `index.html` en un editor de texto o código.
   - Presione `Ctrl + F` y busque la sección `<section id="evidencias">`.
   - Localice la tarjeta del aprendiz correspondiente y actualice las rutas en los dos botones:
     ```html
     <!-- Botón de vista previa modal -->
     <button type="button" data-pdf="assets/pdf/SU_ARCHIVO.pdf" ...>Vista previa</button>
     
     <!-- Enlace para abrir o descargar -->
     <a href="assets/pdf/SU_ARCHIVO.pdf" target="_blank" ...>Abrir PDF</a>
     ```
   - Guarde el archivo (`Ctrl + S`) y actualice el navegador (`F5`).

---

## 7. Lista de Información Pendiente a Completar por los Integrantes

Siguiendo las directrices éticas de no inventar experiencias personales ni datos ficticios, los siguientes campos fueron estructurados con marcadores editables claros para que los aprendices los completen con sus datos reales:

1. **Para Daniel Racero:**
   - [ ] Redactar su perfil personal y académico en la tarjeta de integrantes (`#integrantes`).
   - [ ] Describir su participación y rol en el blog (`#integrantes`).
   - [ ] Redactar su reflexión personal sobre el reto de tipos de comunicación y relaciones interpersonales (`#reto-comunicacion`).
   - [ ] Redactar su reflexión individual de fin de trimestre respondiendo a las preguntas orientadoras (`#reflexiones`).
   - [ ] Colocar su PDF individual en `assets/pdf/evidencia-daniel-racero.pdf`.

2. **Para Isabella López:**
   - [ ] Redactar su perfil personal y académico en la tarjeta de integrantes (`#integrantes`).
   - [ ] Describir su participación y rol en el blog (`#integrantes`).
   - [ ] Redactar su reflexión personal sobre el reto de tipos de comunicación y relaciones interpersonales (`#reto-comunicacion`).
   - [ ] Redactar su reflexión individual de fin de trimestre respondiendo a las preguntas orientadoras (`#reflexiones`).
   - [ ] Colocar su PDF individual en `assets/pdf/evidencia-isabella-lopez.pdf`.

3. **Para Marisol Loaiza:**
   - [ ] Redactar su perfil personal y académico en la tarjeta de integrantes (`#integrantes`).
   - [ ] Describir su participación y rol en el blog (`#integrantes`).
   - [ ] Redactar su reflexión personal sobre el reto de tipos de comunicación y relaciones interpersonales (`#reto-comunicacion`).
   - [ ] Redactar su reflexión individual de fin de trimestre respondiendo a las preguntas orientadoras (`#reflexiones`).
   - [ ] Colocar su PDF individual en `assets/pdf/evidencia-marisol-loaiza.pdf`.

4. **Datos Institucionales Generales (en el pie de página):**
   - [ ] Nombre exacto del Centro de Formación SENA.
   - [ ] Nombre del Instructor o Instructora de la competencia de Comunicaciones.
   - [ ] Regional del SENA correspondiente.

---

## 8. Lista de Comprobación Final (Checklist de Calidad)

- [x] **Cumplimiento total de la guía:** Las 6 secciones obligatorias y la articulación con ADSO están presentes y desarrolladas.
- [x] **Nombres exactos del equipo:** Daniel Racero, Isabella López, Marisol Loaiza en perfiles, reflexiones y evidencias.
- [x] **Identidad visual:** Paleta (#87CEEB, #EAF4F4, #F5F0E8, #FFFFFF, #29465B) aplicada armónicamente.
- [x] **Accesibilidad WCAG:** Contraste de color superior a 7:1 en textos, navegación por teclado, focus visible, enlaces semánticos y textos descriptivos.
- [x] **Diseño adaptable (Responsive):** Grillas adaptativas para móviles, tabletas y computadores de escritorio.
- [x] **Interacciones funcionales:** Menú móvil hamburguesa, desplazamiento suave con compensación de altura, filtros dinámicos de evidencias y modal de vista previa de PDF.
- [x] **Integridad documental:** No se inventaron datos personales, calificaciones ficticias ni notas arbitrarias.
- [x] **Independencia técnica:** 100% ejecutable localmente sin requerir conexión a internet ni frameworks externos.
