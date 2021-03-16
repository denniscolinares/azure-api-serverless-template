#! /bin/bash

echo "Installing serverless"
echo "_______________________________"

npm install -g --unsafe-perm serverless
npm -i -g --unsafe-perm storage-engine
npm install 

#npm audit fix

echo "Installing serverless plugins"
echo "_______________________________"
npm install serverless-azure-functions serverless-pseudo-parameters

#npm audit fix

#cd artifacts

#ls $env

#cd ..


echo "Deploying to $env"
echo "_______________________________"
serverless deploy -v -r $region --stage $env --package artifacts/$env
