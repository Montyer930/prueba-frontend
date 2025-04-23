
---

## 📁 `frontend/README.md` (Angular)

```md
# Frontend - Prueba Técnica Fullstack (Angular)

Este repositorio contiene el frontend de la prueba técnica fullstack, desarrollado con **Angular 19.2.8**. Este proyecto permite autenticarse, visualizar productos y gestionar datos consumiendo una API RESTful protegida con JWT.

## 🔧 Tecnologías

- Angular 19
- Angular CLI
- Bootstrap 5
- Reactive Forms
- Guards dinámicos
- Interceptor HTTP para autenticación
- Vercel para despliegue

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14.x o superior)
- npm (versión 6.x o superior)
- Angular CLI (`npm install -g @angular/cli`)

## 🚀 Instalación

1. Clona el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Navega al directorio del proyecto
```bash
cd prueba-frontend
```

3. Instala las dependencias
```bash
npm install
```
## 💻 Desarrollo

### Servidor de desarrollo

Para iniciar el servidor de desarrollo:
```bash
ng serve
```
Navega a `http://localhost:4200/` en tu navegador. La aplicación se recargará automáticamente cuando realices cambios en el código.

### Estructura del Proyecto

```
src/
  ├── app/
  │   ├── admin/          # Módulo de administración
  │   ├── auth/           # Módulo de autenticación
  │   ├── products/       # Módulo de productos
  │   └── services/       # Servicios compartidos
  ├── environments/       # Configuraciones por ambiente
  └── assets/            # Recursos estáticos
```
- `/services/` → llamadas a API, uso de promesas (`async/await`)
- `/guards/` → verificación del token
- `/components/` → vistas protegidas, formularios
- `/interceptors/` → token en cada solicitud + manejo de errores

## 🔐 Autenticación

- Login con validación y JWT
- El token se guarda en `localStorage` y se inyecta automáticamente en cada petición con un interceptor
- Logout borra el token y redirige al login

## 🌐 Producción

- App: [https://prueba-frontend.vercel.app](https://prueba-frontend.vercel.app)
- Backend: [https://fullstacktestapi-production.up.railway.app](https://fullstacktestapi-production.up.railway.app)

## 🧪 Funcionalidades

- Login y logout
- Listado de productos de una compañía
- Creación de productos (solo si estás autenticado)
- Guards que restringen el acceso según autenticación
- Formularios reactivos con validación en tiempo real
- Manejo global de errores vía interceptor

### Tests End-to-End

Para ejecutar los tests end-to-end:
```bash
ng e2e
```

## 📁 Configuración del entorno

```ts
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  baseApiUrl: 'https://fullstacktestapi-production.up.railway.app'
};
