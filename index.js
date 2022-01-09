require("dotenv").config();
const app = require("express")();
const lib = require("./lib");

app.get("/iconmapping/file", async (req, res) => {
  await lib.getFile();

  const fileIcons = require("./fileIcons.js");

  res.json(fileIcons);
});

app.get("/iconmapping/folder", async (req, res) => {
  await lib.getFolder();

  const folderIcons = require("./folderIcons.js");

  res.json(folderIcons);
});

app.get("/iconmapping/language", async (req, res) => {
  await lib.getLanguages();

  const languageIcons = require("./languageIcons.js");

  res.json(languageIcons);
});

app.get("/iconmapping/all", async (req, res) => {
  await lib.getFile();
  await lib.getFolder();
  await lib.getLanguages();

  const fileIcons = require("./fileIcons.js");
  const folderIcons = require("./folderIcons.js");
  const languageIcons = require("./languageIcons.js");

  res.json({
    files: fileIcons,
    folders: folderIcons,
    languages: languageIcons,
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));
