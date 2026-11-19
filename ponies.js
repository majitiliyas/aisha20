/* =================== PONIES (fan-art, drawn in SVG) =================== */
let gid=0;
function pony(c){
  const id='g'+(gid++);
  const m=c.mane, s=c.stroke;
  const manePath="M152 34 C112 30 98 70 108 112 C114 138 124 154 132 156 C128 128 134 104 142 94 C134 72 142 50 162 44Z";
  const streaks=m.slice(1).map((col,i)=>`<path d="M${150-i*5} ${42+i*3} C${122-i*4} ${48+i*4} ${112-i*3} ${84+i*4} ${120-i*2} ${128+i*3}" stroke="${col}" stroke-width="${m.length>3?6:9}" fill="none" stroke-linecap="round"/>`).join('');
  const tail = c.curly
    ? `<g fill="${m[0]}" stroke="${m[1]||s}" stroke-width="2"><circle cx="62" cy="140" r="16"/><circle cx="50" cy="160" r="15"/><circle cx="56" cy="182" r="14"/><circle cx="44" cy="198" r="11"/></g>`
    : `<path d="M72 128 C34 118 24 176 46 206 C52 182 58 168 80 152Z" fill="${m[0]}" stroke="${s}" stroke-width="2"/>`+
      m.slice(1).map((col,i)=>`<path d="M${70-i*3} ${134+i*2} C${46-i*3} ${138+i*4} ${40-i*2} ${170+i*3} ${48-i*1} ${196-i*2}" stroke="${col}" stroke-width="${m.length>3?5:7}" fill="none" stroke-linecap="round"/>`).join('');
  const mane = c.curly
    ? `<g fill="${m[0]}" stroke="${m[1]}" stroke-width="2"><circle cx="120" cy="56" r="20"/><circle cx="110" cy="84" r="18"/><circle cx="116" cy="112" r="17"/><circle cx="126" cy="138" r="14"/><circle cx="146" cy="38" r="19"/><circle cx="174" cy="32" r="17"/><circle cx="196" cy="46" r="13"/></g>`
    : `<path d="${manePath}" fill="${m[0]}" stroke="${s}" stroke-width="2"/>${streaks}
       <path d="M138 42 C164 20 204 34 200 64 C190 52 176 50 166 62 C164 52 152 48 140 56Z" fill="${m[0]}" stroke="${s}" stroke-width="2"/>
       ${m[1]?`<path d="M150 40 C170 30 192 40 194 54" stroke="${m[1]}" stroke-width="5" fill="none" stroke-linecap="round"/>`:''}
       ${c.curl?`<circle cx="118" cy="148" r="9" fill="${m[0]}" stroke="${s}" stroke-width="2"/><circle cx="198" cy="66" r="7" fill="${m[0]}" stroke="${s}" stroke-width="2"/>`:''}`;
  const wings = c.wings ? `<path d="M96 136 C98 104 132 96 146 110 C136 114 134 120 142 126 C128 128 126 136 132 142 C116 146 104 146 96 136Z" fill="${c.body}" stroke="${s}" stroke-width="2.5"/>` : '';
  const horn = c.horn ? `<path d="M170 40 L190 2 L182 44Z" fill="${c.body}" stroke="${s}" stroke-width="2.5" stroke-linejoin="round"/><path d="M174 34 L184 30 M178 24 L187 21 M181 15 L188 13" stroke="${s}" stroke-width="2"/>` : '';
  const hat = c.hat ? `<path d="M112 46 C128 30 186 26 206 40 C196 46 184 46 178 44 C172 22 150 14 132 30 C124 36 118 42 112 46Z" fill="#c58a4a" stroke="#8a5a2b" stroke-width="2.5"/><ellipse cx="160" cy="44" rx="56" ry="10" fill="#c58a4a" stroke="#8a5a2b" stroke-width="2.5"/>` : '';
  const freckles = c.freckles ? `<g fill="#d98c3b"><circle cx="194" cy="92" r="1.6"/><circle cx="199" cy="96" r="1.6"/><circle cx="190" cy="97" r="1.6"/></g>` : '';
  return `<svg class="pony" viewBox="0 0 240 230" role="img" aria-label="${c.name}">
  <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c.eye[0]}"/><stop offset="1" stop-color="${c.eye[1]}"/></linearGradient></defs>
  <ellipse cx="120" cy="214" rx="62" ry="8" fill="rgba(43,34,87,.15)"/>
  ${tail}
  <g fill="${c.body}" stroke="${s}" stroke-width="2.5">
    <rect x="74" y="150" width="17" height="60" rx="8"/><rect x="134" y="150" width="17" height="60" rx="8"/>
    <ellipse cx="112" cy="148" rx="50" ry="32"/>
    <rect x="96" y="156" width="17" height="56" rx="8"/><rect x="152" y="150" width="17" height="62" rx="8"/>
    <path d="M128 140 C132 116 138 100 152 90 L176 112 C164 126 156 140 156 154Z" stroke="none"/>
    <circle cx="162" cy="80" r="44"/>
    <ellipse cx="194" cy="100" rx="22" ry="17"/>
    <path d="M130 54 L122 16 L154 40Z"/>
  </g>
  <path d="M132 50 L127 26 L146 42Z" fill="${c.inner||'#ffd6e8'}"/>
  ${wings}
  <g transform="translate(90 132) scale(.9)">${c.mark}</g>
  ${mane}
  ${horn}${hat}
  <ellipse cx="178" cy="78" rx="12.5" ry="17.5" fill="#fff" stroke="${s}" stroke-width="1.5"/>
  <ellipse cx="181" cy="81" rx="9.5" ry="13.5" fill="url(#${id})"/>
  <ellipse cx="182.5" cy="83" rx="4.6" ry="7.5" fill="#1b1430"/>
  <circle cx="185.5" cy="74.5" r="3.6" fill="#fff"/><circle cx="178" cy="90" r="1.8" fill="#fff"/>
  <path d="M165 66 C171 57 186 57 192 66" stroke="#1b1430" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M166 66 l-7 -3 M168 62 l-5 -6" stroke="#1b1430" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="192" cy="99" rx="7" ry="4" fill="#ff8fb8" opacity=".55"/>${freckles}
  <circle cx="210" cy="96" r="1.8" fill="${s}"/>
  <path d="${c.mouth||'M196 108 q8 6 15 -1'}" stroke="${s}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>`;
}
const MARK={
  star:`<path d="M20 2 L25 15 L39 15 L28 24 L32 38 L20 30 L8 38 L12 24 L1 15 L15 15Z" fill="#ed438a" stroke="#fff" stroke-width="1.5"/><circle cx="38" cy="4" r="3" fill="#fff"/><circle cx="2" cy="4" r="2.5" fill="#fff"/><circle cx="36" cy="34" r="2" fill="#fff"/>`,
  balloons:`<path d="M10 22 L18 40 M24 20 L20 40 M36 24 L22 40" stroke="#666" stroke-width="1"/><ellipse cx="10" cy="14" rx="8" ry="10" fill="#7fc8f8"/><ellipse cx="25" cy="11" rx="8" ry="10" fill="#fdf06e"/><ellipse cx="37" cy="17" rx="8" ry="10" fill="#7fc8f8"/>`,
  cloud:`<path d="M6 18 a8 8 0 0 1 10 -8 a10 10 0 0 1 18 2 a7 7 0 0 1 2 13 H8 a6 6 0 0 1 -2 -7Z" fill="#fff" stroke="#9edbf9" stroke-width="1.5"/><path d="M20 24 L14 34 L20 33 L16 44" stroke="#ee4144" stroke-width="3" fill="none"/><path d="M23 24 L17 34 L23 33 L19 44" stroke="#fdf6af" stroke-width="2" fill="none"/><path d="M26 24 L20 34 L26 33 L22 44" stroke="#1e98d3" stroke-width="2" fill="none"/>`,
  butterflies:`<g fill="#f3b6cf" stroke="#3fcfa6" stroke-width="1"><path d="M10 10 q-8 -8 -8 2 q0 8 8 2 q8 6 8 -2 q0 -10 -8 -2Z"/><path d="M30 6 q-7 -7 -7 2 q0 7 7 2 q7 5 7 -2 q0 -9 -7 -2Z"/><path d="M20 28 q-7 -7 -7 2 q0 7 7 2 q7 5 7 -2 q0 -9 -7 -2Z"/></g>`,
  diamonds:`<g fill="#6fd6f2" stroke="#2a7fb8" stroke-width="1.2"><path d="M10 6 L18 14 L10 28 L2 14Z"/><path d="M28 2 L36 10 L28 24 L20 10Z"/><path d="M20 20 L28 28 L20 42 L12 28Z"/></g>`,
  apples:`<g fill="#ee4144"><circle cx="10" cy="14" r="8"/><circle cx="28" cy="10" r="8"/><circle cx="19" cy="28" r="8"/></g><g stroke="#62bc4d" stroke-width="3"><path d="M10 6 l3 -4"/><path d="M28 2 l3 -4"/><path d="M19 20 l3 -4"/></g>`,
  muffin:`<path d="M6 20 h28 l-4 18 h-20Z" fill="#c58a4a"/><path d="M4 22 a16 14 0 0 1 32 0Z" fill="#9b6bd6"/><circle cx="14" cy="14" r="2" fill="#fff"/><circle cx="24" cy="12" r="2" fill="#fff"/>`
};
const P={
  twilight:{name:'Твайлайт Спаркл',body:'#d7a8ea',stroke:'#9c6fc0',mane:['#263173','#6c3fa0','#ed438a'],eye:['#3b1f6e','#8f63d8'],horn:1,mark:MARK.star,color:'#6c3fa0'},
  pinkie:{name:'Пинки Пай',body:'#f7b8d3',stroke:'#d978a6',mane:['#ed458b','#b8256a'],curly:1,eye:['#1f5fa8','#82ccf6'],mark:MARK.balloons,mouth:'M194 106 q10 12 20 -2',color:'#d2307a'},
  dash:{name:'Рэйнбоу Дэш',body:'#9edbf9',stroke:'#5aaed6',mane:['#ee4144','#f37033','#fdf6af','#62bc4d','#1e98d3','#672f89'],wings:1,eye:['#8c1d50','#e25393'],mark:MARK.cloud,mouth:'M196 110 q6 2 14 -4',color:'#1e7fb8'},
  flutter:{name:'Флаттершай',body:'#fdf3a8',stroke:'#e2c860',mane:['#f3b6cf','#eaa2c2'],wings:1,eye:['#0f6e75','#5ac7c9'],mark:MARK.butterflies,color:'#c26d92'},
  rarity:{name:'Рарити',body:'#f4f4fa',stroke:'#b9b6d6',mane:['#5e51a3','#7a6cc4'],curl:1,horn:1,eye:['#1f3e8a','#6d8ee0'],mark:MARK.diamonds,inner:'#e6e0ff',color:'#5e51a3'},
  aj:{name:'Эпплджек',body:'#fbbc6a',stroke:'#d58a33',mane:['#fff39d','#f1dc78'],hat:1,freckles:1,eye:['#2f7a2a','#7bc86a'],mark:MARK.apples,color:'#c06a17'},
  derpy:{name:'Дёрпи',body:'#c9ccd6',stroke:'#9095a6',mane:['#fbf3a0','#efe08a'],wings:1,eye:['#a88a17','#f2d24a'],mark:MARK.muffin,mouth:'M196 110 q6 6 14 0',color:'#7d7a3a'}
};

