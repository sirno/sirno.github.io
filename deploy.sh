#!/usr/bin/env sh

# abort on errors
set -e

# clean
rm -rf dist

# build
bun run build

# navigate into the build output directory
cd dist

git init
git checkout -b deploy
git add -A
git commit -m 'deploy'

git push -f git@github.com:sirno/sirno.github.io.git deploy

cd -

