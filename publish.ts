#!/usr/bin/env -S npx tsx

import fs from 'node:fs';
import { spawnSync } from 'node:child_process';

function exec(command: string, args: string[] = []) {
  spawnSync(command, [...args], { cwd: process.cwd(), stdio: 'inherit', shell: true });
}

const dist = 'dist/';

exec('npm', ['run', 'build']);

fs.copyFileSync('LICENSE', dist + 'LICENSE');
fs.copyFileSync('README.md', dist + 'README.md');

{
  const pkgJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

  pkgJson.main = pkgJson.main.replace(dist, '');
  pkgJson.module = pkgJson.module.replace(dist, '');
  pkgJson.types = pkgJson.types.replace(dist, '');

  delete pkgJson.scripts;
  delete pkgJson.devDependencies;

  for (const command in pkgJson.bin) {
    pkgJson.bin[command] = pkgJson.bin[command].replace(dist, '');
  }

  fs.writeFileSync('dist/package.json', JSON.stringify(pkgJson, null, 2));
}

process.chdir(dist);

exec('npm', ['publish']);
