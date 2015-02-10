describe('1-2-1', function() {

  beforeEach(function() {
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
    casper.start('https://makerstest.slack.com/messages/@slackbot/');

    casper.then(function() {
      
    });
  });
});