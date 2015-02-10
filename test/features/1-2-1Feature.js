describe('1-2-1', function() {

  before(function() {
    casper.start('https://makerstest.slack.com/messages');
    casper.waitForSelector('form', function() {

      this.fill('form#signin_form', {
        'email'    : 'jmitchinson+test@gmail.com',
        'password' : 'test1234'
      }, true);
    });
  });

  it('connects to the MakerTest channel', function() {
    casper.start('https://makerstest.slack.com/messages/@slackbot/');

    casper.then(function() {
      expect('body').to.include.text('MakersTest');
    });
  });

  it('reports the URL for the 1-2-1 schedule', function() {
    casper.start('https://makerstest.slack.com/messages/@makerbot/');

    casper.waitFor(function() {
      casper.waitForSelector('form#message-form', function() {

        this.sendKeys("textarea[id='message-input']", '1-2-1')
        this.sendKeys("textarea[id='message-input']", casper.page.event.key.Enter)

          // this.fillSelectors('form#message-form', {
          //   "textarea[id='message-input']": ,
          // });
        
        this.capture('./screenshot.png');
      });
    }, 6000)
      
    casper.then(function() {
      expect('span.message_content').to.include.text('1-2-1');
    });
  });
});