npm run build

cp package.json dist
cp package-lock.json dist

cp LICENSE dist
cp README.md dist

cd dist
npm publish