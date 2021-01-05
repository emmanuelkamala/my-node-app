const products = [];

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  res.render('add-product', {pageTitle: 'Add Product', path: '/add-product'});
}

exports.postAddProduct = (req, res, next) => {
  products.push({title: req.body.title})
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  // console.log(adminData.products);
  // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
  res.render('shop', {prods: products, pageTitle: 'My Shop', path: '/'})
}

exports.productNotFound = (req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
  res.status(404).render('404', {pageTitle: 'Not Found'});
}