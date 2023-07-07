bucket="suiql.com"

cd ./packages/graphiql
rm -rf ./build
yarn run build-bundles

if [ ! -d "./build" ];
then
  echo 'Build error'
  exit 1;
fi

if [ "$bucket" != null ];
then
  aws s3 rm s3://$bucket/ --recursive
  aws s3 cp ./build s3://$bucket/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --recursive
  rm -rf ./build
else
  echo 'Operation is failed. You should pass argument(prod or test) to upload files into prod or test environment'
fi
