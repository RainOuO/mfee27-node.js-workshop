const fs = require('fs');
function file(fileName, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, options, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}
async function readfile() {
  try {
    console.log(await file('test.txt', 'utf8'));
  } catch (err) {
    console.log(err);
  }
}
readfile();
