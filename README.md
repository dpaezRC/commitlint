# CommitLint

Una aplicación Express.js.

## Características

- **Express.js 5.x** - Framework web rápido y minimalista
- **Seguridad robusta** - Helmet para headers de seguridad y CORS configurado
- **Rate Limiting** - Protección contra ataques de fuerza bruta
- **Logging avanzado** - Winston con rotación diaria de archivos
- **Compresión** - Middleware de compresión para mejor rendimiento
- **Linting y formateo** - ESLint y Prettier configurados
- **Git hooks** - Husky con CommitLint para mensajes de commit consistentes
- **Build optimizado** - ESBuild para bundling rápido

## Requisitos

- Node.js (versión recomendada: 18+)
- npm o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd commitlint
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Configura los git hooks:
```bash
npm run prepare
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=3000
NODE_ENV=development

# RATE LIMIT
RATE_LIMIT_MAX_MINUTES=15
RATE_LIMIT_MAX_REQUESTS=100
```

### Descripción de Variables

- `PORT` - Puerto donde se ejecutará el servidor (default: 3000)
- `NODE_ENV` - Entorno de ejecución (development/production)
- `RATE_LIMIT_MAX_MINUTES` - Ventana de tiempo para el rate limiting en minutos
- `RATE_LIMIT_MAX_REQUESTS` - Número máximo de requests por ventana de tiempo

## Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecuta la aplicación en modo desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm start            # Ejecuta la aplicación construida

# Linting y formateo
npm run lint         # Ejecuta ESLint para revisar el código
npm run lint:fix     # Ejecuta ESLint y corrige automáticamente los errores

# Git hooks
npm run prepare      # Configura Husky para git hooks
```

## Estructura del Proyecto

```
├── src/
│   └── index.js          # Punto de entrada de la aplicación
├── dist/
│   └── bundle.js         # Archivo construido (generado)
├── .env                  # Variables de entorno (no incluir en git)
├── .eslintrc.js          # Configuración de ESLint
├── .prettierrc           # Configuración de Prettier
├── commitlint.config.js  # Configuración de CommitLint
├── esbuild.config.js     # Configuración de ESBuild
└── package.json
```

## Desarrollo

1. **Modo desarrollo:**
```bash
npm run dev
```
Esto ejecutará la aplicación directamente desde el código fuente con `node ./src/index.js`.

2. **Linting automático:**
El proyecto incluye ESLint y Prettier configurados. Se ejecutan automáticamente en los git hooks, pero también puedes ejecutarlos manualmente:
```bash
npm run lint:fix
```

3. **Commits convencionales:**
El proyecto usa CommitLint para asegurar mensajes de commit consistentes. Usa el formato:
```
type(scope): description

# Ejemplos:
feat: add user authentication
fix: resolve memory leak in logging
docs: update API documentation
```

## Producción

1. **Construir la aplicación:**
```bash
npm run build
```

2. **Ejecutar en producción:**
```bash
npm start
```

## Dependencias Principales

### Runtime
- **express** - Framework web
- **helmet** - Headers de seguridad
- **cors** - Cross-Origin Resource Sharing
- **express-rate-limit** - Rate limiting
- **winston** - Logging avanzado
- **compression** - Compresión gzip
- **dotenv** - Manejo de variables de entorno

### Desarrollo
- **eslint** - Linting de código
- **prettier** - Formateo de código
- **husky** - Git hooks
- **@commitlint/cli** - Linting de mensajes de commit
- **esbuild** - Bundler rápido

## API Endpoints

La aplicación base incluye:
- Rate limiting configurado
- Logging de requests con Morgan
- Headers de seguridad con Helmet
- Compresión habilitada

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios usando conventional commits
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

Los commits deben seguir el formato conventional commits. Los git hooks se encargarán de validar el formato automáticamente.

## Licencia

ISC
