// require the express module
import express, { application } from "express";

// require the cors module
import cors from "cors";

//import route from routes server
import routes from "./routes/index";

// creates an instance of an Express server
const app = express();

// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors());

// allow POST and PUT requests to use JSON bodies
app.use(express.json());

app.use("/", routes);

// define the port
const port = 3000;

// Settings for web pages
import path from "path";
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
