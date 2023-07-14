# Sui QL API

API provides Graph QL interface to [Sui Indexer](https://github.com/MystenLabs/sui/tree/main/crates/sui-indexer) database.

API uses [GraphQL Mesh](https://github.com/Urigo/graphql-mesh).

## Running Sui QL API locally

1. Install dependencies: `npm i`

1. Prepare Sui Indexer database following steps in  [documentation](https://github.com/MystenLabs/sui/tree/main/crates/sui-indexer).

1. Add `.env` file based on the provided `.env.template`

1. Run `knex migrate:latest` to add "smart comments" to indexer database tables and fields required for GraphQL schema generation with Mesh on the next step.

1. Edit connection string in `meshrc.yaml`.

1. Run `npm run mesh:build` to build mesh files.

1. Edit configuration file `stages\offline.yml`.

1. Run `npm run dev` to start API with [serverless-offline](https://www.serverless.com/plugins/serverless-offline).


## Endpoints

API exposes an endpoint `/graphql/{network}`. `{network}` is a parameter representing Sui network: Mainnet or Testnet. Appropriate `{network}_DB_NAME` environment needs to be configured in the stage file.


## Deploying to the cloud (AWS)

Repository contains stage configuration for deployment of the API to AWS.

Follow the steps below in order to deploy API:

1. Configure AWS CLI.

2. Edit configurations in file `stages\aws.yaml`.

3. Run `npm run deploy:aws`.



