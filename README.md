# Hello React on Azure App Service

This is a minimal React + Vite app configured to run on Azure App Service (Linux).

## Local development

- Dev server:

```bash
npm install
npm run dev
```

- Build and preview:

```bash
npm run build
npm run preview
```

## Azure App Service deployment

App Service will run `npm start` which serves the built static files from the `build` folder via Express and supports SPA routes.

High-level steps:

1. Build assets locally (or let build happen in App Service):
   ```bash
   npm ci
   npm run build
   ```
2. Deploy all files to App Service (use Azure DevOps, GitHub Actions, or ZIP deploy).
3. Ensure `PORT` is provided by App Service; the server reads it automatically.

### ZIP deploy quickstart (optional)

```bash
# Build
npm ci
npm run build

# Create a zip (exclude node_modules if using Oryx to install on server)
powershell -Command "Compress-Archive -Path * -DestinationPath app.zip -Force"

# Deploy (requires Azure CLI login and an existing Web App)
az webapp deploy --name <app_name> --resource-group <rg> --src-path app.zip
```

### Notes
- Vite output is configured to `build/` and `server.cjs` serves this folder.
- For CI/CD, prefer `npm ci` over `npm install`.
- Set `WEBSITE_RUN_FROM_PACKAGE=1` for immutable deployments (optional).
