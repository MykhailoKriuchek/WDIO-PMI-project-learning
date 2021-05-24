import homePage from '../pages/home.page';

describe('Home Page Suite', function() {
  it('should have Load Delay section', function() {
    // Using component to capture repeating html part
    homePage
        .open()
        .verifyTextInPage('UI Test Automation');
    expect(homePage.pageModals[3].title).toEqual('nnnn');
    expect(homePage.pageModals[3].content).toEqual(
        'Ensure that a test is capable of waiting for a page to load');

    utilities.takeScreenshot('homepage');
  });

  it('should have Load Delay section', function() {
    // Using component to capture repeating html part
    homePage
        .open()
        .verifyTextInPage('UI Test Automation');
    expect(homePage.pageModals[3].title).toEqual('nnnn');
    expect(homePage.pageModals[3].content).toEqual(
        'Ensure that a test is capable of waiting for a page to load');

    utilities.takeScreenshot('homepage');
  });
});
