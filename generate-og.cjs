const sharp = require('sharp');

const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'>
  <defs>
    <linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop offset='0%' style='stop-color:#07090e;stop-opacity:1'/>
      <stop offset='50%' style='stop-color:#1a1326;stop-opacity:1'/>
      <stop offset='100%' style='stop-color:#0a1a2a;stop-opacity:1'/>
    </linearGradient>
    <linearGradient id='accent' x1='0%' y1='0%' x2='100%' y2='0%'>
      <stop offset='0%' style='stop-color:#8b5cf6;stop-opacity:1'/>
      <stop offset='50%' style='stop-color:#ec4899;stop-opacity:1'/>
      <stop offset='100%' style='stop-color:#06b6d4;stop-opacity:1'/>
    </linearGradient>
    <filter id='glow'><feGaussianBlur stdDeviation='20'/></filter>
  </defs>
  <rect width='1200' height='630' fill='url(#bg)'/>
  <circle cx='200' cy='150' r='300' fill='#8b5cf6' opacity='0.15' filter='url(#glow)'/>
  <circle cx='1000' cy='500' r='350' fill='#06b6d4' opacity='0.12' filter='url(#glow)'/>
  <circle cx='600' cy='300' r='400' fill='#ec4899' opacity='0.08' filter='url(#glow)'/>
  <rect x='0' y='0' width='1200' height='630' fill='url(#accent)' opacity='0.05'/>
  <g transform='translate(80, 180)'>
    <text x='0' y='0' font-family='Arial, sans-serif' font-size='22' font-weight='600' fill='#a78bfa' letter-spacing='4'>SAKSHI KASHYAP</text>
    <text x='0' y='120' font-family='Arial, sans-serif' font-size='72' font-weight='800' fill='white' letter-spacing='-2'>Digital</text>
    <text x='0' y='200' font-family='Arial, sans-serif' font-size='72' font-weight='800' fill='url(#accent)' letter-spacing='-2'>Marketer</text>
    <text x='0' y='240' font-family='Arial, sans-serif' font-size='36' font-weight='800' fill='#e2e8f0' letter-spacing='-2'>&amp; AI Web Developer</text>
    <rect x='0' y='290' width='280' height='6' fill='url(#accent)' rx='3'/>
    <text x='0' y='340' font-family='Arial, sans-serif' font-size='24' font-weight='500' fill='#cbd5e1'>Digital Marketing with AI Specialist</text>
    <text x='0' y='380' font-family='Arial, sans-serif' font-size='20' font-weight='400' fill='#94a3b8'>AI Tools &#183; Web Development &#183; Game Development &#183; AI Video</text>
    <text x='0' y='430' font-family='Arial, sans-serif' font-size='18' font-weight='400' fill='#64748b'>probable-barnacle-bice.vercel.app</text>
  </g>
  <g transform='translate(900, 420)' opacity='0.9'>
    <circle cx='150' cy='100' r='120' fill='none' stroke='#8b5cf6' stroke-width='2' opacity='0.6'/>
    <circle cx='150' cy='100' r='150' fill='none' stroke='#06b6d4' stroke-width='1' opacity='0.4'/>
    <circle cx='150' cy='100' r='80' fill='#8b5cf6' opacity='0.2'/>
    <text x='150' y='95' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' font-weight='600' fill='#a78bfa' letter-spacing='2'>AI</text>
    <text x='150' y='120' text-anchor='middle' font-family='Arial, sans-serif' font-size='11' fill='#94a3b8'>POWERED</text>
  </g>
</svg>`;

sharp(Buffer.from(svg)).jpeg({quality: 92}).toFile('public/og-image.jpg').then(() => {
  console.log('og-image.jpg created successfully');
}).catch(err => {
  console.error('Error:', err);
  process.exit(1);
});