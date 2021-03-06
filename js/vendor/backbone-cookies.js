// from: https://github.com/akprasad/backbone-cookie/blob/master/cookie.js

(function(ns) {
  ns.Cookie = Backbone.Model.extend({
    initialize: function() {
      this.fetch();
    },
    fetch: function() {
      try {
        this.set(JSON.parse($.cookie(this.id)));
      } catch(e) {
        // ignore errors..
      }
    },
    save: function(attributes) {
      this.set(attributes);
      $.cookie(this.id, JSON.stringify(this.toJSON()));
    },
    destroy: function(options) {
      $.removeCookie(this.id);
    },
    isEmpty: function() {
      return (_.size(this.attributes) <= 1); // just 'id'
    }
  });
}(namespace = window || {}));
