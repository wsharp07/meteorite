Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route("/", {
	name : "homeIndex",
	data : function(){
		return {
			message : "Welcome to Meteorite"
		} 
	}
});

Router.route("/about", {
	name : "homeAbout",
	data : function(){
		return {
			message : "About Meteorite"
		} 
	}
});

Router.route("/contact", {
	name : "homeContact",
	data : function(){
		return {
			message : "Contact Meteorite"
		} 
	}
});

Router.route("/products/:sku", {
	name: "productsShow",
	data: function(){
		var sku = this.params.sku;
		return Products.findOne({sku: this.params.sku});
	}
});

Router.route("/vendors/:slug", {
	name: "vendorsShow",
	data: function(){
		var slug = this.params.slug;
		return Vendors.findOne({slug: this.params.slug});
	}
});

