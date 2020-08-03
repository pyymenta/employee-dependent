const fs = require('fs')
const fsPromises = require('fs').promises;
const SCHEMAS_PATH = `${process.cwd()}/graph/schemas`;

const setupGraphQLTypes = async () => {
  return Promise.all(
    fs.readdirSync(SCHEMAS_PATH, { encoding: "utf-8" })
       .filter(schemaFullPath => new RegExp(/graphql$/g).test(schemaFullPath))
      .map(async (schemaPath) => {
        const modulePath = `${SCHEMAS_PATH}/${schemaPath}`;
        const schema = await fsPromises.readFile(modulePath, { encoding: 'utf-8' });

        return schema;
      }),
  );
};

module.exports = {
  setupGraphQLTypes
}
