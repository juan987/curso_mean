import { Ejemplo01TestingPage } from './app.po';

describe('ejemplo01-testing App', function() {
  let page: Ejemplo01TestingPage;

  beforeEach(() => {
    page = new Ejemplo01TestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
