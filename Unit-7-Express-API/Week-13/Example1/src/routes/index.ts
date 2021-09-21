// require the express module
import express from "express";

// create a new Router object
const routes = express.Router();

routes.get("/hi", (req, res) => {
  res.json("hello world");
});

export default routes;
