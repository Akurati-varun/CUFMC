
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/student-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/manager-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/reward"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5053, hash: 'd65a1103a043710c501041c2fa9743cf05032be5c0ed89ff58a6b175df3b05bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1169, hash: 'a04190704eb6640e7c570f5daae91427031933e11404aa05b0c4f4ae5979c436', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 8042, hash: 'ff401d1a9896c9c03f64f127c11b1e227ea94a4a19fb32cebda3cbdb66cd8ba0', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'student-dashboard/index.html': {size: 98735, hash: '9f6460353815d376288db13c827f7204d8dbc46b39f8e54ace7c583ef7bf6c24', text: () => import('./assets-chunks/student-dashboard_index_html.mjs').then(m => m.default)},
    'manager-dashboard/index.html': {size: 111995, hash: 'da035335fd4f71332cca356543b59a58613974bf6a27232b30e5cf838435c78e', text: () => import('./assets-chunks/manager-dashboard_index_html.mjs').then(m => m.default)},
    'reward/index.html': {size: 8971, hash: '1c0ecafc0d5c00e7191cec3ea4fb087fb384ecd6c58d32d0575c84d48b128c84', text: () => import('./assets-chunks/reward_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
