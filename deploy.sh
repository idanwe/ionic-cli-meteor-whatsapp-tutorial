#/bin/sh

serverUrl=ionic-meteor-whatsapp-clone-step-$1.meteor.com
cd server
meteor deploy $serverUrl
cd ..
timestamp=$(date +%Y%m%d%H%M%S)
npm install
bower install
cd www
echo "__meteor_runtime_config__ = {};" > lib/meteor-client-side/meteor-runtime-config.js
echo "__meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL = 'http://$serverUrl';" >> lib/meteor-client-side/meteor-runtime-config.js
rm -rf .git
git init
git remote add --fetch origin https://github.com/dotansimha/ionic-meteor-whatsapp-clone-step-$1

git push origin --delete gh-pages

if git rev-parse --verify origin/gh-pages > /dev/null 2>&1
then
    git checkout gh-pages
else
    git checkout --orphan gh-pages
fi

git add .
git commit -a -m "Auto deploy $timestamp"
git push -u --force origin gh-pages
