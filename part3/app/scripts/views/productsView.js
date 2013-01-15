Cadec.Views.ProductsView = Backbone.View.extend({

  el : '#products', // samma som id om dom-elementet redan finns i dokumentet

  initialize : function () {
    console.log('Product Collection view init');
    this.render();
    this.collection.on('change', this.render, this);
  }, 

	render : function () {
    	var self = this;
    	this.$el.empty();
    	this.collection.each(function (product) {
    		var view = new Cadec.Views.ItemView({
        		model : product
        	});
        	self.$el.append(view.el);
    	});
	}
});

Cadec.Views.ItemView = Backbone.View.extend({

  tagName : 'li',
  className : 'productItem',

  initialize : function () {
    this.template = _.template($('#productsTemplate').html());
    this.render();    
  },

  render : function () {
    this.$el.html(this.template(this.model.toJSON()));
  }, 

  /*events : {
      'click' : 'onclick'
  },

  onclick : function () {
      console.log('click! '+this.model.cid);
      if (Cadec.currentView) {
        // remove the view from the dom, this needs to be called otherwise the view could still be active
        Cadec.currentView.remove();
      }
      Cadec.currentView = new Cadec.Views.ProductDetailView({
        model : this.model
      });
      this.$el.addClass('highlight');
  }*/
});