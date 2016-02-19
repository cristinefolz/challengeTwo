var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/challangeTwo');

var Product = require('./models/product');

var productRouter = require('./routes/products')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));


app.set('view engine', 'ejs');

var port = process.env.PORT || 9090;

app.get('/products', function(req, res){
	Product.find(function(err, data){
		if(err){
			console.log(err);
		} else {
			res.render('index', { products: data });
		}
	})
  //Need to do Product.find to get all products,
  //and then render the index page
  //For inspiration, look at the GET route in routers/products
});


app.use('/api', productRouter);

app.listen(port, function(){
  console.log('app listening on '+ port)
});