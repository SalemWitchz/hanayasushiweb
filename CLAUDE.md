# hanayasushiweb

## Contexto del proyecto

Rodrigo es estudiante de ingeniería en software (UNACH, Tuxtla Gutiérrez, Chiapas) y desarrollador freelance. Este proyecto se programa desde dos computadoras distintas:

- **Computadora de la ciudad** (escritorio): donde estudia de lunes a viernes.
- **Computadora del pueblo**: la usa los fines de semana, cuando viaja y no siempre puede llevarse la de escritorio.

## Flujo de trabajo entre las dos computadoras

El código se sincroniza con **git**, no con ninguna herramienta de sincronización automática de archivos. La regla es siempre la misma en ambas máquinas:

1. **Antes de empezar a programar:** `git pull` — para traer lo último que se hizo en la otra computadora.
2. **Al terminar la sesión:** `git add .`, `git commit -m "mensaje descriptivo"`, `git push` — para subir el avance, aunque sea chico.

Nunca programar sin hacer `pull` primero, para evitar trabajar sobre una versión vieja y generar conflictos de merge innecesarios.

## Por qué existe este archivo (CLAUDE.md)

El historial de conversación de Claude Code no se sincroniza entre computadoras — cada máquina guarda su propio historial local de sesiones. Este archivo sí viaja con el proyecto (vía git push/pull), así que sirve como memoria compartida entre ambas computadoras: aquí se anotan decisiones de diseño, estructura del proyecto, convenciones de código y qué falta por hacer.

**Regla:** al cerrar una sesión de trabajo importante, actualizar este archivo con lo relevante antes de hacer commit, para que la siguiente sesión (en cualquiera de las dos computadoras) arranque con el contexto correcto.

## Preferencias de trabajo

- No agregar "Co-Authored-By: Claude" ni ninguna atribución de Claude/Anthropic en los mensajes de commit de git.

## Stack tecnológico

- **Frontend:** Next.js (App Router) + TypeScript + Tailwind CSS
- **Hosting (prototipo):** Vercel (capa gratuita)
- **Backend/BD (planeado):** Supabase (PostgreSQL + Auth), capa gratuita
- **Pagos (prototipo):** modo sandbox de Stripe o Mercado Pago (sin dinero real todavía)

## Modelo de negocio y alcance (fases)

El proyecto nace de una idea más grande (sistema de pedidos + logística de reparto propia, inspirada en un segundo proyecto llamado "PinEco"). Se decidió avanzar por fases para no invertir capital antes de tiempo:

1. **Fase 1 (actual):** catálogo de productos, carrito, formulario de pedido (datos: nombre, dirección con referencias, teléfono, forma de pago), sin lógica de reparto — solo un botón "Solicitar mandadito" que notifica a los mandaditos con los que el negocio ya trabaja. Pago del envío fuera de la plataforma (efectivo/transferencia directa al mandadito), para evitar obligaciones fiscales de "plataforma tecnológica" ante el SAT.
2. **Fase 2:** pool compartido de mandaditos entre varios restaurantes (marketplace de dos lados), aún sin optimización de rutas.
3. **Fase 3:** motor de optimización de rutas (VRP) tipo PinEco — OSRM + OR-Tools/VROOM — cuando ya haya suficiente densidad de pedidos simultáneos para agrupar entregas.
4. **Fase 4:** red logística regional completa (tipo mini-DiDi Food), con dispersión de pagos a repartidores — requiere procesador de pagos tipo Mercado Pago para Plataformas y asesoría fiscal por las retenciones de ISR/IVA que aplican a plataformas tecnológicas.

## Negocio real: Hanaya Sushi

- Ubicación: Calle 14 Poniente #130, entre Cvln. Tapachula y Blvd. Belisario Domínguez, col. Moctezuma, Tuxtla Gutiérrez, Chiapas.
- Actualmente toma pedidos por WhatsApp y Facebook de forma manual.
- Identidad de marca: fondo azul marino oscuro, blanco, acento rojo (logo con ícono de montaña/sol), dorado para promociones.
- El menú completo (categorías, productos, precios) vive en `src/data/menu.ts`.

## Estado del proyecto

Proyecto Next.js recién inicializado (App Router + TypeScript + Tailwind). Pendiente: construir catálogo del menú, carrito y formulario de pedido.

## Próximos pasos

- [x] Crear la carpeta del proyecto en `C:\proyectos\hanayasushiweb`
- [x] Inicializar el repositorio git
- [x] Conectar a un repositorio remoto en GitHub (privado)
- [x] Definir stack tecnológico (Next.js + Tailwind + Supabase)
- [x] Primer commit
- [ ] Cargar el menú completo como datos estructurados
- [ ] Construir la página de catálogo/menú con el diseño de marca
- [ ] Construir carrito de compra
- [ ] Construir formulario de pedido (nombre, dirección, teléfono, forma de pago)
- [ ] Botón "Solicitar mandadito"
