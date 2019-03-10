const USUARIO_E2E = 'e2e@horchatatest.com';
const PASSWORD_E2E = 'Horchata123!';

import { Selector } from 'testcafe';

fixture('Bebidas').page('http://localhost:8080');

test('Debería poder crear una bebida', async t => {
  await t
    .typeText('#username', USUARIO_E2E)
    .typeText('#password', PASSWORD_E2E)
    .click('#login');
  
  await t
    .click('#agregar');

  const inputNombre = Selector('#nombre');
  const inputMarca = Selector('#marca');
  await t
    .expect(inputNombre.value).eql('')
    .typeText('#nombre', 'Horchata Prueba')
    .expect(inputMarca.value).eql('')
    .typeText('#marca', 'Abuela Chepa')
    .click('#guardar');
  
  await t
    .expect(Selector('#guardar').exsits).notOk();
});
