import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.DEV_PORT || 5000;
const outputDir = resolve(__dirname, '../.tmp/build/static');
const serveConfig = resolve(__dirname, '../serve.json');

const command = `npx serve --listen ${port} --config ${serveConfig} ${outputDir}`;
console.log('Running:', command);
execSync(command, { stdio: 'inherit' });
