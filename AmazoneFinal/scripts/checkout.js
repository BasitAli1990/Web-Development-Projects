import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import '../data/cart-oop.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';

async function loadPage () {
  try{
    //throw 'error1';
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      //throw 'error2';
      loadCart(() => {
        //reject('error3')
        resolve('value2');
      });
    })
  
  } catch(error) {
    console.log('Unexpected error. Please try again later.');
  }
  // console.log('load page');
  renderPaymentSummary();
  renderOrderSummary();
}

loadPage();
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  })

]).then((values) => {
  console.log(values);
  renderPaymentSummary();
  renderOrderSummary();
});

/*
new Promise ((resolve) => { 
  //console.log('start promise');
  loadProducts(() => {
    //console.log('Finished loading');
    resolve('value1');
  });

}).then((value) => {
  console.log(value);
  //console.log('next step');
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderPaymentSummary();
  renderOrderSummary();
});*/

/*
loadProducts(() => {
  loadCart(() => {
    renderPaymentSummary();
    renderOrderSummary();
  });
});
*/

