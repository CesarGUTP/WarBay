FlowRouter.route('/', {
  name: 'home',
  action(){
    BlazeLayout.render('MainLayout', {main:'Home'})
  }
})

FlowRouter.route('/buy', {
  name: 'buy',
  action(){
    BlazeLayout.render('MainLayout',{main: 'Buy'});
  }
})

FlowRouter.route('/sell', {
  name: 'sell',
  action(){
    BlazeLayout.render('MainLayout',{main: 'Sell'});
  }
})

FlowRouter.route('/about', {
  name: 'about',
  action(){
    BlazeLayout.render('MainLayout',{main: 'About'});
  }
})

FlowRouter.route('/cart', {
  name: 'cart',
  action(){
    BlazeLayout.render('MainLayout',{main: 'Cart'});
  }
})


FlowRouter.route('/checkout',
{
  name:'checkout',
  action()
  {
    BlazeLayout.render('MainLayout', {main: 'Checkout'});
  }
})
