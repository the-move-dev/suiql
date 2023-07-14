import { getMesh } from '@graphql-mesh/runtime';

import { getMeshOptions } from '../../../.mesh';

function replaceTemplateString(vars: any) {
  let templateString =
    'postgres://[USERNAME]:[PASSWORD]@[HOST]:[PORT]/[DATABASE]';

  Object.keys(vars).forEach((key: any) => {
    templateString = templateString.replace(`[${key}]`, vars[key]);
  });

  return templateString;
}

export async function executeCustomMesh(
  network: string,
  newDocument: any,
  variables: any
) {
  const dbName = process.env[`${network.toUpperCase()}_DB_NAME`];
  const vars = {
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    DATABASE: dbName,
  };

  const meshOptions: any = await getMeshOptions();

  if (meshOptions.sources[0] && meshOptions.sources[0].handler.config) {
    meshOptions.sources[0].handler.config.connectionString =
      replaceTemplateString(vars);
  }

  const mesh = await getMesh(meshOptions);

  return mesh.execute(newDocument, variables);
}
