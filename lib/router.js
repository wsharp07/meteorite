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