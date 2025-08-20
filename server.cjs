// Simple Express static server for Azure App Service
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 8080;

app.use(compression());
const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath, { maxAge: '1d', index: false }));

// SPA fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
