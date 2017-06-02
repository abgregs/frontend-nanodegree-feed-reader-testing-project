/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('each feed has a URL defined', function () {
          allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });

        });

        it('each feed has a name defined', function () {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });

        });

    });

    /* This is the second test suite. This suite is all about the
    * menu element and ensuring its visibility changes when it's supposed to.
    */

    describe('The Menu', function() {
      var body,
      menuIcon;

      beforeEach(function() {
        body = $(document.body);
        menuIcon = $('.menu-icon-link');
      });

      it('is hidden by default', function () {
        expect(body.hasClass('menu-hidden')).toBe(true);
      });


      it('changes visibility when the menu icon is clicked', function () {
        // Expect menu to display when clicked.
        menuIcon.trigger("click");
        expect(body.hasClass('menu-hidden')).toBe(false);
        // Expect menu to hide when clicked again.
        menuIcon.trigger("click");
        expect(body.hasClass('menu-hidden')).toBe(true);
      });

    });

    /* This is the third test suite. This suite requires the use of Jasmine's
    * asynchronous done() function to test that once loadFeed is finished loading,
    * the feed contains at least one entry.
    */
    describe('Initial Entries', function() {
      var feed;

      beforeEach(function(done) {
        feed = $('.feed');
        feed.empty();
        loadFeed(0, done);
      });

      it('should contain at least one entry', function () {
        expect(feed.length).not.toBe(0);

      });

    });

    /* This is the fourth and last test suite. This suite ensures that when
    * a new feed is loaded by the loadFeed function that the content
    * actually changes.
    */

    describe('New Feed Selection', function() {
      var feed,
      firstTitle,
      secondTitle;

      beforeEach(function(done) {
        feed = $('.feed');
        feed.empty();
        loadFeed(0, function () {

          firstTitle = $('.feed h2').html();
          // console.log(firstTitle);
          loadFeed(1, function () {
            secondTitle = $('.feed h2').html();
            // console.log(secondTitle);
            done();
          });
       });
    });

      it('has new content', function() {
        // Compare content of first article entry header in each feed.
        expect(firstTitle === secondTitle).toBe(false);

      });

      // Reload initial feed.
      afterEach(function(done) {
        feed = $('.feed');
        feed.empty();
        loadFeed(0, done);
      });
    });


}());
