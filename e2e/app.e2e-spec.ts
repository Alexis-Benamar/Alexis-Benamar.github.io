import { AlexisBenamar.Github.IoPage } from './app.po';

describe('alexis-benamar.github.io App', () => {
  let page: AlexisBenamar.Github.IoPage;

  beforeEach(() => {
    page = new AlexisBenamar.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
