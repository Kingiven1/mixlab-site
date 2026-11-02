// Generates the printable QR code for the permanent /guide URL.
// Run AFTER the final domain is set in content/event.js (siteUrl):
//   npm run qr
// Output: qr-export/mix-lab-guide-qr.svg and .png (2000px), plus the readable URL.
// Then scan it on a phone before sending to print.
import fs from 'node:fs';
import QRCode from 'qrcode';
import event from '../content/event.js';

if (!event.siteUrl) {
  console.error('\n  siteUrl is not set in content/event.js — the QR export stays pending until the final domain is confirmed.\n');
  process.exit(1);
}

const url = `${event.siteUrl.replace(/\/$/, '')}/guide`;
const opts = { errorCorrectionLevel: 'H', margin: 2, color: { dark: '#1A0308', light: '#FFFFFF' } };

fs.mkdirSync('qr-export', { recursive: true });
fs.writeFileSync('qr-export/mix-lab-guide-qr.svg', await QRCode.toString(url, { ...opts, type: 'svg' }));
await QRCode.toFile('qr-export/mix-lab-guide-qr.png', url, { ...opts, width: 2000 });
fs.writeFileSync('qr-export/guide-url.txt', `${url.replace(/^https?:\/\//, '')}\n`);
console.log(`\n  QR code saved to qr-export/ → ${url}\n  Print the readable URL beside it, and test-scan on a phone.\n`);
