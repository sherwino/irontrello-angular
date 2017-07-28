import { Todo-AppAngularPage } from './app.po';

describe('todo-app-angular App', () => {
  let page: Todo-AppAngularPage;

  beforeEach(() => {
    page = new Todo-AppAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
