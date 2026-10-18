const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');const vm=require('node:vm');
const base=path.join(__dirname,'..');const get=f=>fs.readFileSync(path.join(base,f),'utf8');const html=get('index.html'),about=get('about.html'),css=get('style.css'),sitemap=get('sitemap.xml');
const canonical='https://senih25.github.io/harbormap-ny/';
assert(html.includes('rel="canonical" href="'+canonical+'"'),'canonical home');
assert(about.includes('rel="canonical" href="'+canonical+'about.html"'),'canonical about');
assert(html.includes('content="index,follow,max-image-preview:large"'),'robots meta');
assert(html.includes('application/ld+json'),'JSON-LD missing');
const m=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);assert(m);const schema=JSON.parse(m[1]);assert.equal(schema.url,canonical);assert.equal(schema.areaServed.name,'New York City, New York, USA');
for(const f of ['style.css','i18n.js','app.js','assets/mark.svg'])assert(fs.existsSync(path.join(base,f)),f);
assert(sitemap.includes(canonical)&&sitemap.includes(canonical+'about.html'),'sitemap URLs');
assert(!html.includes('google-site-verification'),'do not invent GSC ownership token');
assert(css.includes('prefers-reduced-motion'),'reduced motion');assert(css.includes(':focus-visible'),'keyboard focus');
const sandbox={window:{}};vm.runInNewContext(get('i18n.js'),sandbox,{timeout:250});const i18n=sandbox.window.HARBORMAP_I18N;assert.equal(Object.keys(i18n).length,7,'7 languages');for(const [lang,msg] of Object.entries(i18n)){for(const key of ['find','near','health','legal','urgent','disclaimer','privacy','search'])assert(msg[key],lang+':'+key)}
const register=JSON.parse(get('data/source-register.json'));assert.equal(register.datasetSources.length,3);let counts=0;for(const entry of register.datasetSources){assert(entry.datasetId&&entry.updated&&entry.url&&entry.terms&&entry.fields,entry.id);const d=JSON.parse(get('data/'+({'queens-library':'libraries','nyc-internet':'internet','nys-health':'hospitals'})[entry.id]+'.json'));assert.equal(d.length,entry.loadedRecords,entry.id);counts+=d.length}assert.equal(counts,601);
assert(!/gtag\(|google-analytics\.com|googletagmanager|mixpanel|segment\.io/i.test(html+get('app.js')),'No analytics trackers');
console.log(JSON.stringify({status:'PASS',canonical,facilityRecords:counts,languages:Object.keys(i18n),sitemapPages:2,sourceRegister:3,analytics:false},null,2));