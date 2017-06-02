Front-End Web Development Nano-Degree - Feed Reader Testing Project
================================================================

What Is It?
-----------
In this project I learned how to use [Jasmine](http://jasmine.github.io/) to write a series of test suites against a pre-existing application that reads RSS feeds.


What Did I Learn?
-----------
In this project I tested against some existing features of a web application that reads RSS feeds. Tests require an understanding of the underlying business logic of an application as well as any event handling and DOM manipulation. Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript. Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

Getting Started
---------------

To get started, download the project here: https://github.com/abgregs/frontend-nanodegree-feed-reader-testing-project

You can set up a local server with python to run the app. Once Python is installed on your machine, navigate to the folder where you saved the project after downloading from GitHub. If you're using Python 3.x or higher, in your terminal execute the following command: `python -m http.server 8000`. If you're using Python 2.x, execute the following command: `python -m SimpleHTTPServer 8000`. You should see a message: `Serving HTTP on 0.0.0.0 port 8000 ...`

Then, open up a browser and enter the following address: http://localhost:8000/index.html

Scrolling to the bottom of the page, you will see a section where Jasmine provides the results of the tests I've written. You can make changes to (or intentionally break) the app and see how these changes impact the results of our tests, or write new tests.

What's Included
----------------

The project currently contains an `index.html` and `jasmine`, `js`, `fonts` and `css` folders.

I've written the tests in the `jasmine` > `spec` > `feedreader.js` file.

The project required an understanding of how `index.html`,  `js` > `app.js`, and `css` > `styles.css` files controlled various aspects of the application, in order to successfully write the suite of tests.
