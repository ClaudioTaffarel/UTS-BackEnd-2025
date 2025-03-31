const { env, port } = require('./core/config');
const server = require('./core/server');

const app = server.listen(port, (err) => {
  if (err) {
    console.error('Failed to start the server:', err);
    process.exit(1);
  } else {
    console.log(`Server runs at port ${port} in ${env} environment`);
  }
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);

  app.close(() => process.exit(1));
  setTimeout(() => process.abort(), 1000).unref();
});
