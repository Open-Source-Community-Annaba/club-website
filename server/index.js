express = require("express");
cors = require("cors");
dotenv = require("dotenv");
const cron = require("node-cron");
const { backupData } = require("./backup");
const fs = require("fs");


const app = express();

const allowedOrigins = ["https://j-mena-check.netlify.app/"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    }
  },
};

app.use(cors(corsOptions));


const port = process.env.PORT || 8000;

let list = [];

fs.readFile("./backup/backup.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading backup file:", err);
  } else {
    const retrievedList = JSON.parse(data);
    list = retrievedList;
  }
});

if (list == []) {
  fs.readFile("./backup/cleanBackup.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading backup file:", err);
    } else {
      const retrievedList = JSON.parse(data);
      list = retrievedList;
    }
  });
}

const updateList = (id) => {
  const updatedList = [...list];
  for (var i = 0; i < updatedList.length; i++) {
    if (updatedList[i].id == id) {
      updatedList[i].checked = !updatedList[i].checked;
      console.log(
        updatedList[i].name +
          " was set to " +
          (updatedList[i].checked ? "present" : "not present")
      );
      break;
    }
  }
  list = updatedList;
};

app.use(cors());
dotenv.config();

app.get("/list", (req, res) => {
  res.json(list);
});

app.get("/update/:id", (req, res) => {
  const id = req.params.id;
  updateList(id);
  res.json(list);
});

cron.schedule("*/1 * * * *", () => {
  backupData(list, "./backup/backup.json");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
