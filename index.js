$(document).ready(function(){

  var subTotal = 0;

  $('.card-action').click(function(){

//selecting variables for order items based on event.target

    var par = $(event.target).parents().children()[2];

    var item = $(par).children()[0].innerText;

    var price = $(par).children()[1].innerText;

// adding order items to table

    $('#orders tbody').append('<tr><td class="order">'+item+'</td><td class="item justify">'+price+'</td></tr>');

// formatting price to floating point and adding to subTotal

    var priceFloat = price.replace(/\$/g,"");

    priceFloat= parseFloat(priceFloat);

    subTotal += priceFloat;

// calculating 8.5% tax and total

    var withTax = (subTotal*0.085).toFixed(2);

    var total = (parseFloat(subTotal) + parseFloat(withTax)).toFixed(2);

//  assigning to native dom elements

    $('.subtotal.justify').text('$'+subTotal);

    $('.tax.justify').text('$'+withTax);

    $('.total.justify').text('$'+total);


// end of Add to Order click
  })

  $('#pinkbutton').click(function(){

    //assign variables to check form input

    var name = $('#name').val();

    var phone = $('#telephone').val();

    var address = $('#textarea1').val();

    //toast validation messages

    if (address.length>0 && name.length>0 && phone.length>0 && $('#orders tbody tr').length>0){
      Materialize.toast('Woo Hoo! Your order is on its way!', 4000)
    } else {
      Materialize.toast('Woops ~ Please double-check your order! ', 4000)
    }

// end of Place Order click

  })

//end of document.onready
  });
