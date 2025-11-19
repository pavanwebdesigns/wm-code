
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5354, hash: '664f1000a7c5b7822161de865459dd74a5db58c4e6bf3af21172f2c50f862266', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '164a1e6f1bc41c3d85ecfec3bf7221e197cd8723017ca2ec7548db8d5b5d6492', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 57209, hash: '34f0ffff1aa32048c9b0cb61ddcf8b1e1707886f30c8ae08f29a30fda1280256', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7TPCPIWS.css': {size: 305079, hash: 'RP/mAzHmxU0', text: () => import('./assets-chunks/styles-7TPCPIWS_css.mjs').then(m => m.default)}
  },
};
