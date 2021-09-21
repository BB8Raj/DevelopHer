// require the express module
import express, { query } from "express";
import QueryString from "qs";

//cart interface
interface Cart {
  id: number;
  product: string;
  price: number;
  quantity: number;
}

// create a new Router object
const routes = express.Router();

//default test
routes.get("/hi", (req, res) => {
  res.json("hello world");
});

routes.get("/p", function (req, res) {
  res.send("tagId is set to " + req.query.tagId);
});

// GET /p?tagId=5
// tagId is set to 5

//create hard coded cart
const myCart: Cart[] = [
  { id: 1, product: "cider", price: 4, quantity: 2 },
  { id: 2, product: "nuts", price: 2, quantity: 2 },
  { id: 3, product: "donuts", price: 5, quantity: 3 },
  { id: 4, product: "apple butter", price: 3.99, quantity: 1 },
  { id: 5, product: "pumpkin pie", price: 7.99, quantity: 1 },
  { id: 6, product: "gas", price: 35.39, quantity: 1 },
];

//counter
let counter = myCart.length + 1;

//GET cart-items
routes.get("/cart-items", (req, res) => {
  //console.log(req.query.maxPrice);
  if (req.query.maxPrice) {
    //defined by query param
    const price = Number(req.query.maxPrice);
    const priceLessThanOrEqualMax = myCart.filter(
      (myCart) => myCart.price <= price
    );
    if (priceLessThanOrEqualMax.length === 0) {
      res.status(404);
      res.end();
    } else {
      res.json(priceLessThanOrEqualMax);
    }
  }

  if (req.query.prefix) {
    //sets query param name
    const product = String(req.query.prefix); //set product to query param name
    const prefixString = myCart.filter((element) =>
      String(element.product).startsWith(product)
    );
    if (prefixString.length === 0) {
      res.status(404);
      res.end();
    } else {
      res.json(prefixString);
      res.end();
    }
  }
  if (req.query.pageSize) {
    const id = Number(req.query.pageSize);
    const checkPageSize = myCart.filter((myCart) => myCart.id <= id);
    if (checkPageSize.length === 0) {
      res.status(404);
      res.end();
    } else {
      res.json(checkPageSize);
    }
  }
});

//GET cart-items/:id
//test pass => localhost:3000/cart-items/4
//test fail => localhost:3000/cart-items/7
routes.get("/cart-items/:id", (req, res) => {
  if (req.params.id) {
    const itemID = Number(req.params.id);
    const getIDparam = myCart.find((element) => element.id === itemID);
    if (getIDparam != getIDparam) {
      res.status(404);
      res.json("ID Not Found");
      res.end();
    } else {
      res.json(getIDparam);
      res.end();
    }
  }
});

/* Test in Body => { "product": "grapes", 
"price": 2.50, 
"quantity": 2 } */
//Install NPM uuid package (sources: https://github.com/kelektiv/node-uuid):
//npm install uuid
//var uuid = require('uuid');
//https://stackoverflow.com/questions/23327010/how-to-generate-unique-id-with-node-js

/* const crypto = require("crypto");
const id = crypto.randomBytes(16).toString("hex");
console.log(id); // => f9b327e70bbcf42494ccb28b2d98e00e
 */

//counter in line or add lenght of array.
//when posting
routes.post("/cart-items", (req, res) => {
  //const cart: Cart = { id: counter, ...req.body.product };
  //using spread for all items in product....
  const addToCart: Cart = {
    //my original code
    id: counter,
    product: req.body.product,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  myCart.push(addToCart);
  counter++;
  res.status(201);
  res.json(addToCart);
  //myCart.splice(0, 0, uniID);
});

//PUT
//test - localhost:3000/cart-items/3
/* body: { 
  "price": 5, 
  "quantity": 23 } */
routes.put("/cart-items/:id", (req, res) => {
  if (req.params.id) {
    const id = Number(req.params.id);
    //const product = String(req.body.product);
    const price = req.body.price;
    const quantity = req.body.quantity;
    const cartToUpdate = myCart.find((element) => element.id === id);
    if (cartToUpdate) {
      //getIdToUpdate.product = product;
      cartToUpdate.price = price;
      cartToUpdate.quantity = quantity;
    }
    console.log(cartToUpdate);
  }
  res.json(myCart);
  res.end();
});

//DELETE
//test - localhost:3000/cart-items/5
routes.delete("/cart-items/:id", (req, res) => {
  if (req.params.id) {
    const id = Number(req.params.id);
    const index = myCart.findIndex((element) => element.id === id);
    myCart.splice(index, 1);
    res.json(myCart);
  }
});

/// localhost:3000/cart-items/1

export default routes;
