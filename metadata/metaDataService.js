const pool = require('../db/db');
const fs = require('fs/promises');
const path = require('path');

class metaDataService {
    static async processMetaData({ pathMetaData }) {
        try {
            const files = await fs.readdir(pathMetaData);

            for (const file of files) {
                const extFile = path.extname(file);

                if (extFile == '.sql') {
                    const pathFile = path.join(pathMetaData, file);

                    const dataFile = await fs.readFile(pathFile, 'utf-8');
                    await pool.query(dataFile);
                }
            }
        } catch (erro) {
            console.error('Erro ao ler a pasta:', erro);
        }
    }

    static async runMetaDataTables() {
        const pathTables = process.env.PATH_METADATA_TABLES;

        await this.processMetaData({ pathMetaData: pathTables });
    }

    static async runMetaDataDefaultData() {
      const pathDefaultData = process.env.PATH_METADATA_DEFAULT_DATA;

      await this.processMetaData({ pathMetaData: pathDefaultData });
    }

}

module.exports = metaDataService;