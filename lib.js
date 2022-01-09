const axios = require("axios");
const fs = require("fs");

function decode(content) {
  return Buffer.from(content, "base64").toString("utf-8");
}

function indexOfStr(str, strr) {
  return str.indexOf(strr) + strr.length;
}

module.exports = {
  getLanguages: async () => {
    const data = await (
      await axios.get(
        "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/src/icons/languageIcons.ts"
      )
    ).data;
    let content = data.substring(
      indexOfStr(data, "export const languageIcons: LanguageIcon[] = ")
    );

    // For some reason i need to save it to a file and then read it back in.
    fs.writeFileSync(
      "./languageIcons.js",
      "const languageIcons = " + content + "\n\nmodule.exports = languageIcons;"
    );
  },
  getFile: async () => {
    const data = await (
      await axios.get(
        "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/src/icons/fileIcons.ts"
      )
    ).data;
    let content = data.substring(
      indexOfStr(data, "export const fileIcons: FileIcons = ")
    );

    content = content
      .replace(/\n/g, "")
      .replace(/IconPack.Angular/g, '"angular"')
      .replace(/IconPack.Nest/g, '"nest"')
      .replace(/IconPack.Ngrx/g, '"angular_ngrx"')
      .replace(/IconPack.React/g, '"react"')
      .replace(/IconPack.Redux/g, '"react_redux"')
      .replace(/IconPack.Vuex/g, '"vue_vuex"')
      .replace(/IconPack.Vue/g, '"vue"');

    // For some reason i need to save it to a file and then read it back in.
    fs.writeFileSync(
      "./fileIcons.js",
      "const fileIcons = " + content + "\n\nmodule.exports = fileIcons;"
    );
  },
  getFolder: async () => {
    const data = await (
      await axios.get(
        "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/src/icons/folderIcons.ts"
      )
    ).data;
    let content = data.substring(
      indexOfStr(data, "export const folderIcons: FolderTheme[] = ")
    );


    content = content
      .replace(/\n/g, "")
      .replace(/IconPack.Angular/g, '"angular"')
      .replace(/IconPack.Nest/g, '"nest"')
      .replace(/IconPack.Ngrx/g, '"angular_ngrx"')
      .replace(/IconPack.React/g, '"react"')
      .replace(/IconPack.Redux/g, '"react_redux"')
      .replace(/IconPack.Vuex/g, '"vue_vuex"')
      .replace(/IconPack.Vue/g, '"vue"');

    // For some reason i need to save it to a file and then read it back in.
    fs.writeFileSync(
      "./folderIcons.js",
      "const folderIcons = " + content + "\n\nmodule.exports = folderIcons;"
    );
  },
};
