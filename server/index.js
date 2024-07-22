// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const express = require("express");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer(storage);

const app = express();
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef

app.get("/", (req, res) => {
  res.send("heelo");
});
// Define a route for uploading files
app.post("/api/upload", upload.single("file"), function (req, res) {
  res.json(req.file);
});

const port = 3007; // change the port to 3001 or any other available port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
