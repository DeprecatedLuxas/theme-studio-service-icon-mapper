const axios = require("axios");
const fs = require("fs");


function decode(content) {
  return Buffer.from(content, "base64").toString("utf-8");
}

module.exports = {
  getFile: async () => {
    const data = await (
      await axios.get(
        "https://api.github.com/repos/Pkief/vscode-material-icon-theme/contents/src/icons/fileIcons.ts",
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        }
      )
    ).data;
    let content = decode(data.content);
    content = content.substring(
      content.indexOf("export const fileIcons: FileIcons = ") +
        "export const fileIcons: FileIcons = ".length
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
        "https://api.github.com/repos/Pkief/vscode-material-icon-theme/contents/src/icons/folderIcons.ts",
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          },
        }
      )
    ).data;
    let content = decode(data.content);
    content = content.substring(
      content.indexOf("export const folderIcons: FolderTheme[] = ") +
        "export const folderIcons: FolderTheme[] = ".length
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
