function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },
  { path: '/home', name: 'home', component: page('home/index.vue') },
  { path: '/search', name: 'search', component: page('search/index.vue') },
  { path: '/gallery', name: 'gallery', component: page('gallery/index.vue') },
  { path: '/list', name: 'list', component: page('list/index.vue') },
  { path: '/detail', name: 'detail', component: page('detail/index.vue') },
  { path: '/apply', name: 'apply', component: page('apply/index.vue') },
  { path: '/about', name: 'about', component: page('about/index.vue') },
  { path: '/faq', component: page('faq/index.vue'),
    children: [
      { path: '', redirect: { name: 'faq.first' } },
      { path: 'first', name: 'faq.first', component: page('faq/first.vue') },
      { path: 'second', name: 'faq.second', component: page('faq/second.vue') },
      { path: 'third', name: 'faq.third', component: page('faq/third.vue') }
    ] },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  // { path: '/home', name: 'home', component: page('home.vue') },
  { path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ] },

  { path: '*', component: page('errors/404.vue') }
]
