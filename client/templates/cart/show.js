Template.cartShow.helpers({
	cart: function(){
		return Carts.getCart(userKey);
	}
});

Template.cartShow.events({
	"click .remove-from-cart": function(ev){
		ev.preventDefault();
		removeFromCart(this.sku, function(err,res){
			if(err){
				console.log(err);
			} else{
				if(cart.items.length === 0){
					Router.go("homeIndex");
				}
			}
		});
	},
	"change .item-qty": function(ev){
		var rawValue = $(ev.currentTarget).val();

	    if(!isNaN(rawValue)){
	      var newQty = parseInt(rawValue);
	      var name = this.name;
	      if(newQty === 0){
	        removeFromCart(this.sku);
	      }else {
	        this.quantity = parseInt(newQty);
	        updateCart(this.sku,this.quantity, function (err, res) {
	          if (err) {
	            //console.log(err);
	            sAlert.error(err);
	          } else {
	            //alert(name + " updated");
	            sAlert.success(name + " updated");
	          }
	        });
	      }
	      //just to be sure
	      $(ev.currentTarget).val(newQty);
	    }else{
	      sAlert.error("That's not a number...");
	    }
	}
});