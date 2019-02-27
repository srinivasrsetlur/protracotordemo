describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('https://angular-6-registration-login-example.stackblitz.io');

    //console.log(browser.getTitle);
    expect(browser.getTitle()).toEqual('Angular 6 User Registration and Login Example');
    element(by.partialLinkText('Register')).click();
    console.log('Entering register page')
    element(by.partialLinkText('JasonWatmore.com')).click();

  });
});