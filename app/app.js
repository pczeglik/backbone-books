var AppRoute = Backbone.Router.extend({

  routes: {
    "book/:book": "book"
  },

  book: function (book) {
    console.log(book);
  }
});

/**
 * Book model
 * @type {object}
 */
var Book = Backbone.Model.extend({

  defaults: {
    title: '',
    author: '',
    cover: ''
  },

  initialize: function(obj) {
    _.extend(this, this.defaults, obj);
  }
});

/**
 * Book view
 * @type {object}
 */
var BookView = Backbone.View.extend({

  el: $('.container'),
  tagName: 'li',
  className: 'book',

  template: _.template($('#book').html()),

  initialize: function () {},

  render: function (item) {
    this.model = item;
    this.$el.append(this.template(this.model.toJSON()));
  }
});


/**
 * Books Collection
 * @type {object}
 */
var Books = Backbone.Collection.extend({
  model: Book
});

/**
 * Books View
 * @type {object}
 */
var BooksView = Backbone.View.extend({

  el: $('.container'),

  initialize: function () {},

  setCollection: function (coll) {
    this.collection = coll;
  },

  render: function () {
    var book = new BookView();
    _.each(this.collection.models, function (item) {
      book.render(item);
    });
  }
});


var appRouter = new AppRoute();
Backbone.history.start();