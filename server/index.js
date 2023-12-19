express = require("express");
cors = require("cors");
dotenv = require("dotenv");

const port = 8000;
const app = express();

app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("hii");
});

app.listen(port, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
