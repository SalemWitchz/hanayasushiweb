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

## Estado del proyecto

_(Pendiente: aquí se irá documentando la estructura, stack elegido, y avance conforme se defina.)_

## Próximos pasos

- [ ] Crear la carpeta del proyecto en `C:\hanayasushiweb` (en cada computadora que se use)
- [ ] Inicializar el repositorio git
- [ ] Conectarlo a un repositorio remoto en GitHub
- [ ] Definir stack tecnológico (frontend / backend)
- [ ] Primer commit
