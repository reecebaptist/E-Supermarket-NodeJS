const mongoose = require('mongoose');

// Load User model
const User = require('../models/User');
const Type = require('../models/Type');
const Product = require('../models/Product');
const Cart = require('../models/Cart');


//DB Config
const url = "mongodb://localhost:27017/online-store";

// Connect to MongoDB
mongoose.connect(url,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

/*
//Cart clearance
Cart.deleteMany({}, function(err) {
  if(err) console.log(err);
  console.log("Successfully Cleared All Previous Data in cart");
})

//Type Clearance
Type.deleteMany({}, function(err) {
  if(err) console.log(err);
  console.log("Successfully Cleared All Previous Data in types");
})

const produce = new Type({
  name: 'Produce',
  quantity: 'per kg'
});
produce.save().then().catch(err => console.log(err));

const percare = new Type({
  name: 'Personal Care',
  quantity: 'per item'
});
percare.save().then().catch(err => console.log(err));



//Product Clearance
Product.deleteMany({}, function(err) {
  if(err) console.log(err);
  console.log("Successfully Cleared All Previous Data in types");
})

//Fruit & Vegetables Details
const onion = new Product({
  id: '001',
  name: 'Onion',
  model: 'Produce',
  image: 'onion.jpg',
  cost: 20
});
onion.save().then().catch(err => console.log(err));

const potato = new Product({
    id: '002',
    name: 'Potato',
    model: 'Produce',
    image: 'potato.jpg',
    cost: 38
  })
potato.save().then().catch(err => console.log(err));

const capsicum =  new Product({
  id: '003',
  name: 'Capsicum',
  model: 'Produce',
  image: 'capsicum.jpg',
  cost: 26
})
capsicum.save().then().catch(err => console.log(err));

const palak =  new Product({
  id: '003',
  name: 'Palak',
  model: 'Produce',
  image: 'palak.jpg',
  cost: 19
})
palak.save().then().catch(err => console.log(err));

const tomato =  new Product({
  id: '004',
  name: 'Tomato',
  model: 'Produce',
  image: 'tomato.jpg',
  cost: 12
})
tomato.save().then().catch(err => console.log(err));

const carrot =  new Product({
  id: '005',
  name: 'Carrot',
  model: 'Produce',
  image: 'carrot.jpg',
  cost: 10
})
carrot.save().then().catch(err => console.log(err));

const cucumber =  new Product({
  id: '006',
  name: 'Cucumber',
  model: 'Produce',
  image: 'cucumber.jpg',
  cost: 15
})
cucumber.save().then().catch(err => console.log(err));

const coriander =  new Product({
  id: '007',
  name: 'Coriander',
  model: 'Produce',
  image: 'coriander.jpg',
  cost: 10
})
coriander.save().then().catch(err => console.log(err));

const coconut =  new Product({
  id: '008',
  name: 'Coconut',
  model: 'Produce',
  image: 'coconut.jpg',
  cost: 30
})
coconut.save().then().catch(err => console.log(err));

const banana =  new Product({
  id: '009',
  name: 'Banana',
  model: 'Produce',
  image: 'banana.jpg',
  cost: 45
})
banana.save().then().catch(err => console.log(err));


const apples =  new Product({
  id: '010',
  name: 'Apples',
  model: 'Produce',
  image: 'apples.jpg',
  cost: 120
})
apples.save().then().catch(err => console.log(err));

const oranges =  new Product({
  id: '011',
  name: 'Oranges',
  model: 'Produce',
  image: 'oranges.jpg',
  cost: 40
})
oranges.save().then().catch(err => console.log(err));


//Personal Care
const shampoo =  new Product({
  id: '101',
  name: 'Shampoo',
  model: 'Personal Care',
  image: 'shampoo.jpg',
  cost: 80
})
shampoo.save().then().catch(err => console.log(err));

*/