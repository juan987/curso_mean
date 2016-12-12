import { Ejemplo02BasicAuthAngularPage } from './app.po';

describe('ejemplo02-basic-auth-angular App', function() {
  let page: Ejemplo02BasicAuthAngularPage;

  beforeEach(() => {
    page = new Ejemplo02BasicAuthAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
