const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./db");
// const { createUserSchema } = require('./database');

const PORT = 5434;

// middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ROUTES //

// home page
app.get("/", (req, res) => {
  res.send("Hello world!").status(200);
});

// articles page
app.get("/articles", (req, res) => {
  res.send("Hello world!").status(200);
});

app.get("/users", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM new_user");
    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// create a new user account
app.post("/user/create", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await pool.query(
      "INSERT INTO new_user (username, email, password) VALUES($1, $2, $3) RETURNING *",
      [username, email, password]
    );

    res.json(newUser);
  } catch (err) {
    console.error(err.message);
  }
});

// create a new post

app.post("/post/create", async (req, res) => {
  try {
    const { post_id, post_title, post_img, post_description, username } =
      req.body;
    const newPost = await pool.query(
      "INSERT INTO new_post (title, content, username) VALUES($1, $2, $3) RETURNING *",
      [title, content, username]
    );

    res.json(newPost);
  } catch (err) {
    console.error(err.message);
  }
});

// create a post to check login status
app.post("/user/login", async (req, res) => {
  try {
    if (req.body["email"]) {
      const { email, password } = req.body;
      console.log(email, password);
      const chkUser = await pool.query(
        "SELECT EXISTS(SELECT 1 FROM new_user WHERE email=$1 AND password=$2)",
        [email, password]
      );
      const { exists } = chkUser.rows[0];
      if (exists) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    }
  } catch (err) {
    console.error(err.message);
  }
});

// INSERTION CODE INSERT INTO new_user (username, password) VALUES ($1, $2) RETURNING *;

// Server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
// app.post('/register', async (req, res) => {
//     const { username, fullName, email, password} = req.body;

//     try {
//         // Call the createUserSchema function to create a schema for the new user
//         await createUserSchema(username);

//         // Other logic for registering the user goes here...

//         res.status(200).send('User registered successfully');
//     } catch (err) {
//         console.error('Error registering user: ', err.message);
//         res.status(500).send('Error registering user');
//     }
// });
