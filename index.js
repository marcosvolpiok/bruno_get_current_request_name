const fs = require("fs");
const path = require("path");
const dir = path.join(bru.cwd());
const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles.filter((x)=> path.extname(x)=== ".bru");
};
getAllFiles(dir).forEach(function(file) {
  const content = fs.readFileSync(file,'utf8');
  let url = new RegExp("(?<=url: )"+req.getUrl());
  if (url.test(content))
  {
    console.log(path.parse(file).name);
  }
});

module.exports = {
  randomQuote
};
