// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData =  (fnCallback) => {
  let listPath = [file1, file2, file3];
  let hasil = [];
  listPath.forEach( (path) => {
    fs.readFile(path, "utf8", (err, data) => {
      const json = JSON.parse(data);
      // console.log(json);
      if (err) {
        return fnCallback(err, "Error Path Json");
      } else {
        if (Array.isArray(json)) {
          json.forEach((element) => {
            if ("data" in element) {
              hasil.push(element.data.message.split(" ")[1]);
            } else {
              hasil.push(element.message.split(" ")[1]);
            }
          });
        } else {
          hasil.push(json.message.split(" ")[1]);
        }
      }
    })
  });
  setTimeout(function(){
    console.log(hasil);
    return fnCallback(null, hasil);
  }, 500);
};


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
