const { app, port } = require('./server');
const metaDataService = require('./metadata/metaDataService');

const start = async () => {
  if (process.env.RUN_METADATA_TABLES == '1') {
    await metaDataService.runMetaDataTables();
  }

  if (process.env.RUN_METADATA_DEFAULT_DATA == '1') {
    await metaDataService.runMetaDataDefaultData();
  }

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
};

start();