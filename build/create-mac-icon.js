const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const buildDir = __dirname;
const sourceIcon = path.join(buildDir, 'icon.png');
const iconsetDir = path.join(buildDir, 'icon.iconset');
const outputIcon = path.join(buildDir, 'icon.icns');

const sizes = [
  [16, 'icon_16x16.png'],
  [32, 'icon_16x16@2x.png'],
  [32, 'icon_32x32.png'],
  [64, 'icon_32x32@2x.png'],
  [128, 'icon_128x128.png'],
  [256, 'icon_128x128@2x.png'],
  [256, 'icon_256x256.png'],
  [512, 'icon_256x256@2x.png'],
  [512, 'icon_512x512.png'],
  [1024, 'icon_512x512@2x.png'],
];

function run(command, args) {
  execFileSync(command, args, { stdio: 'inherit' });
}

if (process.platform !== 'darwin') {
  if (!fs.existsSync(outputIcon)) {
    throw new Error('build/icon.icns is missing. Generate it on macOS with npm run icon:mac.');
  }
  process.exit(0);
}

if (!fs.existsSync(sourceIcon)) {
  throw new Error(`Source icon is missing: ${sourceIcon}`);
}

fs.rmSync(iconsetDir, { recursive: true, force: true });
fs.mkdirSync(iconsetDir, { recursive: true });

for (const [size, filename] of sizes) {
  run('sips', ['-z', String(size), String(size), sourceIcon, '--out', path.join(iconsetDir, filename)]);
}

run('iconutil', ['-c', 'icns', iconsetDir, '-o', outputIcon]);
fs.rmSync(iconsetDir, { recursive: true, force: true });
console.log(`Created ${outputIcon}`);
