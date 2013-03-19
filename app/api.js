var api = (function () {
  "use strict";

  var API_URL = "https://www.googleapis.com/books/v1/volumes?q=",

  getBooks = function getBooks(phrase) {
    var url = API_URL;
    if (phrase) {
      url += phrase + '&callback=?';
      $.getJSON(url).then(function (results) {
        var items = results.items,
          i = 0, len = items.length,
          books;

        if (len > 0) {
          books = new Books();
          for (; i < len; i += 1) {
            books.add({
              title: items[i].volumeInfo.title,
              author: items[i].volumeInfo.authors[0],
              cover: items[i].volumeInfo.imageLinks.thumbnail,
              description: items[i].volumeInfo.description
            });
          }
        }

      var app = new BooksView();
      app.setCollection(books);
      app.render();

      });
    }
  };



  return {
    search: function search(phrase) {
      getBooks(phrase);
    }
  };

}());




