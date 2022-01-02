require("dotenv").config();
const app = require("express")();
const axios = require("axios");
const fs = require("fs");
const lib = require("./lib");

app.get("/iconmapping/file", async (req, res) => {
  lib.getFile();

  const fileIcons = require("./fileIcons.js");

  res.json(fileIcons);
});

app.get("/iconmapping/folder", async (req, res) => {
  lib.getFolder();

  const folderIcons = require("./folderIcons.js");

  res.json(folderIcons);
});

app.get("/iconmapping/all", async (req, res) => {
  lib.getFile();
  lib.getFolder();
  
  const fileIcons = require("./fileIcons.js");
  const folderIcons = require("./folderIcons.js");

  const obj = {
    files: fileIcons,
    folders: folderIcons,
  }
  res.json(obj);
})

app.listen(3000, () => console.log("Server started on port 3000"));
