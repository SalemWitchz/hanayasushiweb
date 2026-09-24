# Contexto completo del proyecto — hanayasushiweb

> Documento generado el 2026-09-22 a partir de la conversación fundacional del proyecto. Sirve como memoria detallada complementaria al `CLAUDE.md` (que se mantiene más breve y accionable).

## 1. Quién y cómo se trabaja

Rodrigo es estudiante de ingeniería en software (UNACH, Tuxtla Gutiérrez, Chiapas) y desarrollador freelance. Programa desde dos computadoras (una de escritorio entre semana, otra los fines de semana), por lo que el flujo de trabajo depende de git: `git pull` antes de empezar, `git add . && git commit && git push` al terminar. El historial de Claude Code no se sincroniza entre máquinas, por eso `CLAUDE.md` (y este documento) existen como memoria compartida.

**Preferencia explícita:** no incluir "Co-Authored-By: Claude" ni ninguna atribución de Claude/Anthropic en los commits de git.

## 2. Origen del proyecto

El punto de partida fue un audio de WhatsApp (nota de voz) que Rodrigo transcribió usando **Buzz** (app gratuita, usa Whisper localmente, sin costo ni límite de minutos — instalada tras resolver un problema de descarga incompleta y luego un error de "database is locked" por una instancia duplicada del proceso). La transcripción reveló la propuesta de negocio original de un conocido: digitalizar los pedidos de **Hanaya Sushi**, un restaurante ubicado en la 13ª poniente de Tuxtla Gutiérrez que actualmente toma pedidos de forma manual por WhatsApp y Facebook.

La idea original (del audio) incluía:
- Página web + app para pedidos en línea (reemplazando el manejo manual por WhatsApp).
- Notificación al negocio cuando llega un pedido nuevo (alarma, pantalla completa).
- Estados de pedido más claros ("procesando pago" → "pago exitoso") en vez del limbo típico de WhatsApp.
- Integración con DiDi para el envío a domicilio.
- Ficha de pago final que incluya el costo de transporte según la zona.

## 3. Evaluación crítica de la idea original

- **DiDi no tiene API pública** para que un desarrollador externo conecte pedidos automáticamente a sus repartidores (a diferencia de Uber Direct). Cualquier "integración" con DiDi sería despacho manual, no automatización real.
- **"Bloquear el celular y sonar alarma"** no es literal a nivel de sistema operativo, pero sí se puede lograr una experiencia similar con notificaciones push persistentes o una app tipo kiosko.

## 4. Solución para app móvil sin invertir en licencias

Rodrigo no ve rentable pagar la licencia de Apple Developer Program para publicar en la App Store. Solución acordada: construir un **PWA (Progressive Web App)**:
- **iOS:** "Agregar a pantalla de inicio" desde Safari — gratis, sin App Store. Desde iOS 16.4 soporta notificaciones push (con limitaciones: no hay forma de forzar pantalla completa ni bloquear el teléfono como una app nativa).
- **Android:** sin restricción — se puede empaquetar la misma PWA como app real de Play Store (licencia única ~$25 USD, no anual como Apple), con acceso completo a notificaciones agresivas.

**Limitación técnica real identificada:** iOS bloquea el rastreo de GPS en segundo plano para PWAs (a diferencia de apps nativas). Esto afecta solo al lado del repartidor si se necesita tracking en vivo. Mitigación: los repartidores usan Android (ya decidido sin restricciones), y iOS se reserva para el cliente que ordena, donde esta limitación no aplica.

## 5. Segundo proyecto paralelo: PinEco

Rodrigo compartió una propuesta formal de otro proyecto, **PinEco (PinEco Logistics)** — plataforma de optimización de rutas ecológicas (VRP) y telemetría para Pymes de reparto en Tuxtla Gutiérrez. Componentes: panel web + PWA para repartidores, motor de rutas sobre OpenStreetMap/OSRM + tráfico en tiempo real, telemetría de combustible/odómetro, dashboard de KPIs (ahorro monetario, CO2 evitado). Modelo SaaS propuesto: $299-499 MXN/mes por Pyme, con capital de inversión limitado.

### Evaluación técnica de PinEco

- **Inconsistencia detectada:** la propuesta plantea usar OSRM (motor de rutas *estático*, sin tráfico en vivo nativo) para lograr "tráfico en tiempo real" evitando APIs comerciales costosas — esto es contradictorio; el tráfico en tiempo real normalmente sí requiere una API de pago (Mapbox, TomTom, Google).
- **¿Se puede dar mejores rutas que Google Maps?** No, en una ruta punto A→B, Google Maps siempre gana (datos de tráfico de millones de usuarios + Waze). El valor real de un motor propio no está ahí, sino en:
  1. Optimizar el **orden de múltiples paradas simultáneas** (VRP) — algo que Google Maps no resuelve gratis para un repartidor.
  2. Integración directa con el sistema de pedidos propio (sin copiar/pegar direcciones).
  3. Telemetría de negocio propia (combustible, kilometraje) ligada a cada pedido.
  4. A largo plazo, modelar patrones de tráfico locales con datos propios, reduciendo dependencia de APIs de pago.

## 6. Fusión de ambos proyectos

Rodrigo aclaró que su idea real era fusionar ambos: hanayasushiweb no solo maneja pedidos, sino que también incluye el motor de despacho/rutas tipo PinEco como **motor de logística interno**, en vez de depender de DiDi.

### Obstáculo crítico detectado: los "mandaditos"

Rodrigo señaló una realidad importante: los restaurantes pequeños (el mercado objetivo) rara vez tienen flota propia — dependen de **"mandaditos"**, repartidores informales e independientes contratados por pedido individual, que cobran el envío directamente. Esto rompe la premisa base del motor VRP, porque:

- El VRP (optimización de múltiples paradas) solo aporta valor cuando una misma persona entrega **varios pedidos en un mismo viaje**.
- Un mandadito normalmente atiende **un solo pedido por viaje** — no hay nada que optimizar en cuanto a secuencia de paradas; Google Maps ya es suficiente para ese caso.

### Roadmap de fases acordado (para escalar sin capital inicial alto)

1. **Fase 1 (alcance actual del MVP):** catálogo, carrito, formulario de pedido (nombre, dirección con referencias, teléfono, forma de pago). Sin flota propia — solo un botón "Solicitar mandadito" que notifica a los mandaditos con los que el negocio ya trabaja. **Pago del envío fuera de la plataforma** (efectivo/transferencia directa cliente→mandadito), para evitar que la plataforma se convierta en intermediario financiero.
2. **Fase 2:** pool compartido de mandaditos entre varios restaurantes (marketplace de dos lados) — todavía sin optimización de rutas, es sobre construir la red.
3. **Fase 3:** aquí sí se activa el motor VRP (OSRM + OR-Tools/VROOM) — cuando ya hay suficiente densidad de pedidos simultáneos como para agrupar entregas en un mismo viaje.
4. **Fase 4:** red logística regional completa (tipo mini-DiDi Food) — con dispersión de pagos a repartidores, lo cual introduce obligaciones fiscales reales de "plataforma tecnológica" ante el SAT (retención de ISR/IVA, como aplica a Uber/DiDi/Rappi). Requiere asesoría contable/legal antes de llegar a esta fase.

**Disparadores para avanzar de fase:** no se pasa a la siguiente fase por calendario, sino cuando la evidencia lo justifica (ej. mandaditos recurrentes trabajando con varios restaurantes → Fase 2; suficiente volumen de pedidos simultáneos en la misma zona → Fase 3).

## 7. Pago a mandaditos y repartidores (por fase)

- **Fase 1-2 (mandaditos freelance):** el pago del envío NO pasa por la plataforma — el cliente paga directo al mandadito (efectivo/transferencia). Evita que la plataforma sea intermediario financiero y las obligaciones fiscales que eso implica.
- **Flota propia de un restaurante:** es una relación de pago entre el restaurante y su repartidor (sueldo o comisión) — asunto de RH del negocio, no del software. La plataforma solo registra entregas por repartidor como referencia para el restaurante.
- **Fase 3-4 (marketplace operado por la plataforma):** aquí sí tendría sentido cobrar el envío y dispersar pagos a mandaditos, usando un procesador con soporte de marketplace/split payments (en México: **Mercado Pago para Plataformas** o Conekta; Stripe Connect tiene soporte limitado en México). Requiere resolver antes las obligaciones fiscales de "plataforma tecnológica" (retención de ISR/IVA).

## 8. Estimación de costos de mantenimiento

Para un **piloto de 3-5 Pymes**, usando herramientas de bajo costo (OSRM + OR-Tools/VROOM self-hosted, capa gratuita de Mapbox para tráfico):

| Rubro | Costo mensual estimado |
|---|---|
| VPS (hosting + BD PostGIS + motor de rutas) | $15-25 USD |
| API de tráfico (dentro de capa gratuita al inicio) | $0-20 USD |
| Dominio/SSL (amortizado) | $2 USD |
| Notificaciones push (web push nativo) | $0 |
| **Total aprox.** | **$20-45 USD/mes (~400-900 MXN/mes)** |

Esta infraestructura es compartida entre todos los clientes (arquitectura multi-tenant), no se multiplica por restaurante nuevo.

### Pricing sugerido y argumento de venta

Con el rango de $299-499 MXN/mes ya propuesto en el documento de PinEco, el margen es positivo desde 2 clientes y saludable (60-75% de margen bruto) desde 5 clientes. El argumento de venta más fuerte no es "mejores rutas que Google Maps", sino que **plataformas como DiDi Food o Rappi cobran 20-30% de comisión por pedido** a los restaurantes — una cuota fija mensual de $499-799 MXN es mucho más barata para un restaurante con ventas de $20,000-30,000 MXN/mes en pedidos.

## 9. Prototipo con herramientas 100% gratuitas

Para un prototipo (no producto final, ni siquiera beta), el stack completo se puede armar en $0:

| Componente | Herramienta gratuita |
|---|---|
| Frontend (web + PWA) | Next.js/React en Vercel o Netlify (capa gratuita) |
| Backend + Base de datos | Supabase (PostgreSQL con **PostGIS incluido**, Auth, capa gratuita) |
| Motor de rutas (OSRM) | Servidor demo público de OSRM (`router.project-osrm.org`) — solo para pruebas, no producción |
| Optimización multi-parada (VRP) | OR-Tools de Google — gratis |
| Mapa visual | Leaflet.js + tiles de OpenStreetMap |
| Tráfico en tiempo real | Capa gratuita de Mapbox (100k requests/mes) o datos simulados |
| Notificaciones push | Web Push API nativa (VAPID) |
| Pagos | Modo sandbox de Stripe o Mercado Pago |

**Advertencias:** el servidor demo de OSRM tiene política de uso limitado (no es para producción); las capas gratuitas de Supabase/Vercel tienen límites de inactividad — suficiente para prototipo, no para uso real con muchos usuarios.

## 10. El negocio real: Hanaya Sushi

- Ubicación: Calle 14 Poniente #130, entre Cvln. Tapachula y Blvd. Belisario Domínguez, col. Moctezuma, Tuxtla Gutiérrez, Chiapas.
- Página de Facebook confirmada: nombre "Hanaya Sushi", Tuxtla Gutiérrez (contenido completo bloqueado por Facebook sin sesión iniciada).
- Actualmente toma pedidos manualmente vía WhatsApp/Facebook, pidiendo: **Nombre, Dirección con referencias, Número de teléfono, Forma de pago (efectivo o transferencia)** — estos son exactamente los campos que replica el formulario de pedido del sitio.
- Identidad de marca: fondo azul marino oscuro (#0b1f3d), blanco, acento rojo (#e0202b, logo con ícono de montaña/sol), dorado (#d9a441) para promociones.
- Menú completo (categorías, productos, precios, descripciones) capturado como datos estructurados en `src/data/menu.ts`: Charolas de Sushi, Combox, Alitas & Boneless, Rollos, Rollos Primavera, Balls, Arroz, Kushiages, Aderezos, Tempura Mix, Snacks, Ramen, Postres, Bebidas. Promo vigente de septiembre 2026: 60 Makis Mixtos por $309.

## 11. Estado técnico actual (alcance de la Fase 1)

Proyecto Next.js (App Router, TypeScript, Tailwind CSS v4) inicializado en `C:\proyectos\hanayasushiweb`, con repo git conectado a `https://github.com/SalemWitchz/hanayasushiweb` (privado).

**Construido hasta ahora:**
- `src/data/menu.ts` — menú completo estructurado.
- `src/app/globals.css` — variables de color de marca (`--color-hanaya-navy`, `--color-hanaya-red`, `--color-hanaya-gold`).
- `src/components/Header.tsx` — encabezado con logo y ubicación.
- `src/components/PromoBanner.tsx` — banner de promoción vigente (se oculta automáticamente después de la fecha de vencimiento).
- `src/components/Shop.tsx` — catálogo interactivo con carrito (agregar/quitar cantidad, total) y formulario de pedido.
- `src/lib/whatsapp.ts` — arma el mensaje de pedido y genera el link de WhatsApp (`wa.me`) con el resumen del carrito y los datos del cliente.
- `src/types/order.ts` — tipos `CartItem` y `OrderDetails`.
- `.claude/launch.json` — configuración para levantar el servidor de desarrollo (`npm run dev`, puerto 3000) desde el navegador integrado.

**Flujo actual del MVP:** el cliente navega el menú, agrega productos al carrito, llena sus datos, y al dar clic en "Enviar pedido por WhatsApp" se abre WhatsApp con el mensaje ya armado — digitaliza el flujo manual actual sin necesitar backend todavía. No incluye pagos reales, cuenta de administración, ni lógica de reparto (eso corresponde a fases posteriores).

**Pendiente inmediato:** reemplazar el número de WhatsApp placeholder en `src/lib/whatsapp.ts` (línea 5) con el número real del negocio.

## 12. Próximos pasos sugeridos (no decididos aún)

- [ ] Confirmar número de WhatsApp real de Hanaya Sushi.
- [ ] Decidir si se persisten los pedidos en una base de datos (Supabase) o si Fase 1 se queda solo con el flujo de WhatsApp.
- [ ] Diseñar el esquema de base de datos multi-tenant (`restaurant_id`) desde el inicio, aunque el primer cliente real sea solo Hanaya, para no tener que reescribir nada al vender a otros restaurantes.
- [ ] Definir si/cuándo se agrega el botón "Solicitar mandadito" y cómo notifica (WhatsApp, push, etc.).
- [ ] Evaluar despliegue en Vercel con dominio propio.
