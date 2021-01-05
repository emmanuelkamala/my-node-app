const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product', 
    path: '/add-product'});
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products, 
    pageTitle: 'My Shop', 
    path: '/'})
}
