const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieSession = require("cookie-session");
require("colors");

const authRouter = require("./routers/auth.router")
const usersRouter = require("./routers/users.router")
const stripeRouter = require("./routers/stripe.router")
const { getProducts } = require("./controllers/stripe.controller");


const app = express();

app.use(
  cors({origin: "http://localhost:5173", credentials: true}));

app.use(express.json())

app.use(cookieSession({
    secret: "DontTellAnyone",
    maxAge: 1000 * 60 * 60 * 24,
  }));

app.use("/auth", authRouter)
app.use("/users", usersRouter)
app.use("/payments", stripeRouter);
app.get("/products", getProducts);

app.listen(3000, () => console.log("Server  is running on port 3000".yellow.bold));