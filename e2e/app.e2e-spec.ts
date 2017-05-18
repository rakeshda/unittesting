import { SitepointTodoAppPage } from './app.po';

describe('sitepoint-todo-app App', () => {
  let page: SitepointTodoAppPage;

  beforeEach(() => {
    page = new SitepointTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
