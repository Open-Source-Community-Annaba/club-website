express = require("express");
cors = require("cors");
dotenv = require("dotenv");

// const port = process.env.PORT;
const port = 8000;
const app = express();

const listStudents = [
  { id: 1, name: "khalil cheddadi", zone: 1, checked: false },
  { id: 2, name: "achref benammrane", zone: 1, checked: false },
  { id: 3, name: "bougerra takoua", zone: 2, checked: false },
  { id: 4, name: "anis slougha", zone: 3, checked: false },
  { id: 5, name: "berouk abderahmane", zone: 1, checked: false },
  { id: 6, name: "chiheb menkoucha", zone: 1, checked: false },
];

const updateList = (id) => {
  const updatedList = [...list];
  for (var i = 0; i < updatedList.length; i++) {
    if (updatedList[i].id == id) {
      updatedList[i].checked = !updatedList[i].checked;
      console.log(updatedList[i])
      break;
    }
  }
  list = updatedList;
  
};

app.use(cors());
dotenv.config();

app.get("/update/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  updateList(id)
  res.send("hii");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
