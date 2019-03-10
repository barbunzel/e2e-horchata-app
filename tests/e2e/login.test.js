const USUARIO_E2E = 'e2e@horchatatest.com';
const PASSWORD_E2E = 'Horchata123!';

import { Selector } from 'testcafe';

fixture('Login').page('http:localhost:8080/');

test('Debería poder hacer login y logout', async t => {
  // ingresamos con usuario y password
  // si #logout existe, se hizo login con éxito
  await t
    .typeText('#username', USUARIO_E2E)
    .typeText('#password', PASSWORD_E2E)
    .click('#login')
    .expect(Selector('#logout').exists).ok('Logout no existe');
  
  await t
    .click('#logout')
    .expect(Selector('#logout').exists).notOk('Logout existe');
});
