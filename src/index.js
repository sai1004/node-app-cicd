const express = require("express");
const app = express();
const PORT = 6000;
const bodyParser = require("body-parser");
const logger = require("morgan");

const runServer = () => {
  try {
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(logger("common"));

    app.get("/api", (req, res) => {
      res.json({ message: " Hello App Works!! " });
    });

    app.get("/api/todos", (req, res) => {
      res.json({
        data: [
          {
            id: 1,
            todo: "Do something nice for someone you care about",
            completed: false,
            userId: 152,
          },
          {
            id: 2,
            todo: "Memorize a poem",
            completed: true,
            userId: 13,
          },
          {
            id: 3,
            todo: "Watch a classic movie",
            completed: true,
            userId: 68,
          },
          {
            id: 4,
            todo: "Watch a documentary",
            completed: false,
            userId: 84,
          },

          {
            id: 8,
            todo: "Bake pastries for yourself and neighbor",
            completed: true,
            userId: 198,
          },
          {
            id: 9,
            todo: "Go see a Broadway production",
            completed: false,
            userId: 7,
          },
        ],
      });
    });

    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`
        ++++++++++++++++++++++++++++++++++++++++++++++++
        server is listening on http://127.0.0.1:${PORT}/api
        ++++++++++++++++++++++++++++++++++++++++++++++++
        `);
    });
  } catch (error) {
    console.log(`Error While Starting Server : `, error.message);
  }
};

runServer();
