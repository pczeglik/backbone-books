/*

  var books = new Books();
  books.add(myBook);
  books.add(secondBook);

  var app = new BooksView();
  app.setCollection(books);
  app.render();

*/

test( "Book Model", function() {
  var book = new Book({
    title: 'Good Parts',
    author: 'Douglas Crockford'
  });

  equal(book.get('title'), 'Good Parts', 'Book should has correct title');
  equal(book.get('author'), 'Douglas Crockford', 'Book should has correct author');

});

test( "Book Collection", function () {

  // Create collection
  var books = new Books();
  equal(books.collection, undefined, 'Collection should be undefined');

  // Add book
  var testBook = new Book({
    title: 'Good Parts',
    author: 'Douglas Crockford'
  });

  books.add(testBook);

  equal(books.length, 1, 'Collection should has one item');
  equal(books.contains(testBook), true, 'Collection should has testBook');

  // Remove book
  books.remove(books.models[1]);
  equal(books.length, 1, 'Collection should be empty');
});