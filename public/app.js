console.log('YOU BETTER MAKE SURE YOU CAN SEE THIS IN YOUR CONSOLE....')

var addProduct = function(event){
  event.preventDefault();

  var name = $('#name').val();
  var inStock = $('#inStock').val();
  var cost = $('#cost').val();
  var $productTable = $('#productTable');


  var product = {};
    product.name = name;
    product.inStock = inStock;
    product.cost = cost;


    $.ajax({
      url: '/api/products',
      method: 'POST',
      data: product
    }).done(function(data){

      console.log('I posted a product!', data);
      $productTable.append('<tr id=' + data._id +'>\
            <td>' + data.name + '\
            </td>\
            <td>' + data.cost + '\
            </td>\
            <td>' + data.inStock + '\
            </td>\
          </tr>');

    });
  $('#name').val('');
  $('#inStock').val(''); 
  $('#cost').val('');


};

$('#addProduct').on('click', addProduct);