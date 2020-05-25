const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const Product = require('../models/Product');
const Type = require('../models/Type');
const Cart = require('../models/Cart');


// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

// Pricing
router.get('/pricing', ensureAuthenticated, (req, res) => {
  Cart.find({buyerid: req.user.email, status: 0}).then(cart => {
  Type.find({}).then(type => {
    Product.find({}).then(product => {
      res.render('pricing', {
        user: req.user,
        product: product,
        type: type,
        button: undefined,
        cart: cart,
        addItem: undefined
      });
      }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}).catch(err => console.log(err));

  }
);

//Pricing Handle
router.post('/pricing',  (req, res) => {
    const { button } = req.body;  
    Cart.find({buyerid: req.user.email, status: 0}).then(cart => {
        Product.findOne({name: button}).then(product =>{
          const addItem = new Cart({
            billno: 0,
            buyerid: req.user.email,
            itemid: product.id,
            status: 0
          });
          addItem.save().then(addItem => {
            Type.find({}).then(type => {
              Product.find({}).then(product => {
                console.log(addItem);
            res.render('pricing', {
              button: button,
              cart: cart,
              user: req.user,
              type: type,
              product: product,
              addItem: addItem
            });
          }).catch(err => console.log(err));
        }).catch(err => console.log(err));
          }).catch(err => console.log(err));
        }).catch(err => console.log(err));
      }).catch(err => console.log(err));

});


//Cart
router.get('/cart', ensureAuthenticated, (req, res) => {

  Product.find({}).then(product => {
  Cart.find({buyerid: req.user.email, status: 0}).then( cart => {
    res.render('cart', {
      user: req.user,
      cart: cart,
      quantity: undefined,
      product: product,
      plus: undefined,
      minus: undefined,
      remove: undefined,
      clear: undefined
    });
  }).catch(err => console.log(err));
}).catch(err => console.log(err));

});

//Cart Handle
router.post('/cart', ensureAuthenticated, (req, res) => {

  
  const { plus, minus, remove, checkout } = req.body;
  if(checkout == 'checkout') {
    Product.find({}).then(product => {
    Cart.find({buyerid: req.user.email, status: 0}).then( cart => {
    Cart.updateMany({buyerid: req.user.email, status: 0},{status: 1}).then(() => {
      res.render('cart', {
        user: req.user,
        cart: cart,
        quantity: undefined,
        product: product,
        plus: undefined,
        minus: undefined,
        remove: undefined,
        clear: 1
        });
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
}).catch(err => console.log(err));
  } else {
  Product.find({}).then(product => {
    Cart.find({buyerid: req.user.email, status: 0}).then( cart => {
      cart.forEach(cart1 => {
        if(remove != cart1.itemid) {
        if(plus == cart1.itemid && cart1.quantity < 99) {  

            Cart.update({itemid: plus, status: 0, buyerid: req.user.email},{quantity: cart1.quantity+1}).then(() => {
              res.render('cart', {
                user: req.user,
                cart: cart,
                quantity: cart1.quantity+1,
                product: product,
                plus: plus,
                minus: minus,
                remove: undefined,
                clear: undefined
                });
            });  

        } else if(minus == cart1.itemid && cart1.quantity > 1) {
          Cart.update({itemid: minus, status: 0, buyerid: req.user.email},{quantity: cart1.quantity-1}).then(() => {
            res.render('cart', {
              user: req.user,
              cart: cart,
              quantity: cart1.quantity-1,
              product: product,
              plus: plus,
              minus: minus,
              remove: undefined,
              clear: undefined
              });
          });  
        } else if((minus ==cart1.itemid && cart1.quantity == 1) || (plus == cart1.itemid && cart1.quantity == 99)) {
          res.render('cart', {
            user: req.user,
            cart: cart,
            quantity: undefined,
            product: product,
            plus: undefined,
            minus: undefined,
            remove: undefined,
            clear: undefined
          });
        } 
      } else {
        Cart.deleteOne({itemid: remove,buyerid: req.user.email, status: 0}, function(err) {
          if(err) console.log(err);
          res.render('cart', {
            user: req.user,
            cart: cart,
            quantity: undefined,
            product: product,
            plus: undefined,
            minus: undefined,
            remove: remove,
            clear: undefined
          });
        });
      }
      });
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
  }
});


module.exports = router;