# Aplicación Frontend de Gestión de Productos

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.8.

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

### Generación de Código

Angular CLI incluye herramientas para generar componentes, servicios, pipes y más. Algunos comandos útiles:

```bash
# Generar un nuevo componente
ng generate component nombre-componente

# Generar un nuevo servicio
ng generate service nombre-servicio

# Generar un nuevo módulo
ng generate module nombre-modulo
```

## 🛠️ Construcción

Para construir el proyecto:
```bash
ng build
```
Los archivos de la construcción se almacenarán en el directorio `dist/`.

Para una construcción de producción:
```bash
ng build --configuration production
```

## ⚡ Tests

### Tests Unitarios

Para ejecutar los tests unitarios:
```bash
ng test
```
Los tests se ejecutan con [Karma](https://karma-runner.github.io) y Jasmine.

### Tests End-to-End

Para ejecutar los tests end-to-end:
```bash
ng e2e
```

## 📚 Características Principales

- 🔐 Sistema de autenticación
- 📦 Gestión de productos
- 👤 Panel de administración
- 🎨 Diseño responsive
- 🌐 Integración con API REST

## 🔧 Configuración

El proyecto incluye diferentes configuraciones para desarrollo y producción en el directorio `environments/`. Asegúrate de configurar las variables de entorno según sea necesario.

## 📝 Convenciones de Código

Este proyecto sigue las guías de estilo oficiales de Angular:
- Uso de TypeScript estricto
- Nomenclatura en camelCase para métodos y propiedades
- Nomenclatura en PascalCase para clases y componentes
- Prefijos personalizados para componentes

## 🤝 Contribución

1. Crea un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva característica'`)
4. Sube los cambios a tu fork (`git push origin feature/nueva-caracteristica`)
5. Crea un Pull Request

## 📮 Soporte

Para reportar problemas o solicitar nuevas características, por favor utiliza la sección de Issues del repositorio.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE.md para más detalles.

## 🔗 Enlaces Útiles

- [Documentación de Angular](https://angular.dev)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Material](https://material.angular.io)
