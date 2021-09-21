// require the express module
import express from "express";
import { pets } from "../models";
import { getAllPets } from "../models";
import { findPetByAge } from "../models";
import { findPetByName } from "../models";
//import { Pet } from "../models";

// create a new Router object
const routes = express.Router();

//get endpoint at the root just returns a string (Read)
routes.get("/", (req, res) => {
  res.render("home");
});

//get endpoint at /pets returns all pets (Read)
//get endpoint to see a specific pet by name, or age
// endpoint = /pets?age=1&name=cooper
routes.get("/pets", (req, res) => {
  console.log(req.query);
  if (req.query.age) {
    const age = Number(req.query.age);
    const pets = findPetByAge(age);
    if (pets.length === 0) {
      res.status(404);
      res.end();
    } else {
      res.render("pet-search", { pets });
    }
  } else if (req.query.name) {
    const name = req.query.name.toString();
    const petWithName = findPetByName(name);
    if (petWithName.length === 0) {
      res.status(404);
      res.end();
    } else {
      res.render("pet-search", { pets: petWithName });
    }
  } else {
    res.render("pet-search", { pets: getAllPets() });
  }
});

/* //post endpoint lets you add a new pet (Create)
routes.post('/pets', (req, res) => {
  if (req.body.name && req.body.type && req.body.fave_toy && req.body.age) {
    pets.push(req.body);
    res.json(pets);
  } else {
    res.status(400);
    res.end();
  }
});

//put endpoint lets you change pet information (Update)
/// localhost:3000/pets/1
routes.put('/pets/:id', (req, res) => {
  if (req.params.id) {
    const id = Number(req.params.id);
    const name = req.body.name;
    const petToUpdate = pets.find((pet) => pet.id === id);
    if (petToUpdate) {
      petToUpdate.name = name;
    }
  }
  res.json(pets);
  res.end();
});

//delete endpoint lets you remove a pet from the list (Delete)
routes.delete('/pets/:id', (req, res) => {
  if (req.params.id) {
    const id = Number(req.params.id);
    const index = pets.findIndex((pet) => pet.id === id);
    pets.splice(index, 1);
    res.json(pets);
  }
});
 */
export default routes;
