import { Selector } from 'testcafe';

fixture('App').page('http://localhost:8080');

test('Debería mostrar el título', async t => {
  await t
    .expect(Selector('h1').innerText).eql('Automated Testing con JavaScript');
});
