import { cp, mkdir, rm } from 'node:fs/promises';

const outputDirectory = new URL('../dist/', import.meta.url);
const projectDirectory = new URL('../', import.meta.url);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(new URL('index.html', projectDirectory), new URL('index.html', outputDirectory));
await cp(new URL('src/', projectDirectory), new URL('src/', outputDirectory), { recursive: true });
await cp(new URL('public/', projectDirectory), outputDirectory, { recursive: true });

console.log('Static site ready in dist/.');
