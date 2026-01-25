# Entruemplung

A modern web application built with React, TypeScript, and Vite.

## Build and Deployment

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

The build command creates a `dist` folder containing the production-ready files.

**Note**: The `dist` folder is not tracked in version control (excluded via `.gitignore`). It is generated during the build process and used for deployment.

### Deployment
This project is configured for Netlify deployment. The `netlify.toml` file specifies that the `dist` folder should be published.
