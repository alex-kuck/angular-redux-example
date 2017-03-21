import { AngularReduxExamplePage } from './app.po';

describe('angular-redux-example App', () => {
  let page: AngularReduxExamplePage;

  beforeEach(() => {
    page = new AngularReduxExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
